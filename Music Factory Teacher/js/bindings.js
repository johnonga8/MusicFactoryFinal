//------GLOBAL VARIABLES-----//
    var currentBookId;
    var currentCultureName;
    var currentBookType;
    var currentBook;
    var currentLessonNumber;
    var currentChapterNumber;
    var domain = "http://musicfactory.a8hosting.com/";
    //var domain = "http://192.168.1.39:2580/";
    
//------FUNCTIONS FOR BOOK LISTING-----//
    function GetAllBooks(){
        $.ajax({
            type: "POST",
            async: false,
            url: domain + "Custom/Services/A8_MusicFactoryService.svc/GetAllBooks",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: null,
            success: function (result) {
                var books = result.d;
                GenerateKinderBooks(books.KinderBooks);
                //GenerateInfantBooks(books.InfantBooks);
            },
            error: function () { alert("error GetAllBooks"); }
        });
      };
    //GENERATE KINDERBOOK FOR BOOK LISTING  
    function GenerateKinderBooks(kinderbooks){ 
      var KinderBooksViewModel = kendo.observable(
      {
        KinderBooks: kinderbooks,
        SelectBook:  function(e) {

            currentBookId = e.data.Id;
            currentCultureName = e.data.CultureName;
            currentBookType = e.data.Type;
            //window.location = "#views/mf-bookdetails.html";
            GetKinderBookById(currentBookId, currentCultureName)
            //window.location = "#views/mf-bookpreface.html";
            window.location = "#views/mf-bookcover.html";
        }
      });
      kendo.bind($(".booklisting-kinder"), KinderBooksViewModel);  
    };
    //GENERATE INFANTBOOKS FOR BOOK LISTING  
    /*function GenerateInfantBooks(infantbooks){ 
      var InfantBooksViewModel = kendo.observable(
      {
        KinderBooks: infantbooks,
        SelectBook:  function(e) {
            currentBookId = e.data.Id;
            currentCultureName = e.data.CultureName;
            currentBookType = e.data.Type;
            window.location = "#views/mf-bookdetails.html";
        }
      });
      kendo.bind($(".tabcontent-infant"), InfantBooksViewModel);  
    };*/

//------FUNCTIONS FOR BOOK DETAILS-----//
    //GET KINDER BOOK BY ID
    function GetKinderBookById(_bookId, _cultureName){
      $.ajax({
          type: "POST",
          url: domain + "Custom/Services/A8_MusicFactoryService.svc/GetKinderBookById",
          contentType: "application/json;charset=utf-8",
          dataType: "json",
          data: JSON.stringify({ bookId: _bookId, cultureName: _cultureName }),
          async: false,
          success: function (result) {
              var book = result.d;
              currentBook = book;
          },
          error: function () { alert("error GetKinderBookById"); }
      });
    };
    
    function BindKinderCoverDetails(book)
    {
      var BookViewModel = GenerateKinderTableOfContents(book);
      kendo.bind($("#table-of-contents-cover"), BookViewModel);
      GenerateKinderCoverDetails(book);
    }
    
    function BindKinderPrefaceDetails(book)
    {
      var BookViewModel = GenerateKinderTableOfContents(book);
      kendo.bind($("#table-of-contents-preface"), BookViewModel);
      GenerateKinderPrefaceDetails(book);
    }
    
    function BindKinderLessonDetails(book)
    {
      var BookViewModel = GenerateKinderTableOfContents(book);
      kendo.bind($("#table-of-contents-chapter"), BookViewModel);
      GenerateKinderLessonDetails(book, currentChapterNumber, currentLessonNumber);
    }
    
    function GenerateKinderTableOfContents(kinderbook)
    {
      var BookViewModel = kendo.observable({
        Book: kinderbook,
        Chapters: kinderbook.Chapters,
        SlideToggle: function(e){
          $(e.currentTarget).toggleClass('active-link');
          $(e.currentTarget).parent("li").toggleClass("li-active-link");
          $(e.currentTarget).siblings('ul').slideToggle();
          $(e.currentTarget).children(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top");
        },
        SelectLesson: function(e){
          currentLessonNumber = $(e.currentTarget).children('input.js-lessonnumber').val();
          currentChapterNumber = $(e.currentTarget).children('input.js-chapternumber').val();
          InitializeTabs();
          if (window.location.href.indexOf("mf-bookdetails") > -1) {
            hideDrawer();
            GenerateKinderLessonDetails(currentBook, currentChapterNumber, currentLessonNumber);
          }
          else{
            window.location = "#views/mf-bookdetails.html";
          }
        },
        GoToPreface: function(e){
          window.location = "#views/mf-bookpreface.html";
        },
        GoToCover: function(e){
          window.location = "#views/mf-bookcover.html";
        },
      });
      return BookViewModel;
    }
    
    function GenerateKinderLessonDetails(book, chapterNumber, lessonNumber)
    {
      var prevLessonNumber = "";
      var prevLesson = GetLessonByNumber(book.Lessons, (parseInt(lessonNumber) - 1));
      if(prevLesson != null) 
      {
        prevLessonNumber = prevLesson.LessonNumber;
        $(".bttn-prev-lesson").removeClass("hide");
        $(".bttn-prev-preface").addClass("hide");
      }
      else{
        $(".bttn-prev-lesson").addClass("hide");
        $(".bttn-prev-preface").removeClass("hide");
      }
      var currentLesson = GetLessonByNumber(book.Lessons, lessonNumber);
      var currentChapter = GetChapterByNumber(book.Chapters, currentLesson.ChapterNumber)
      
      var nextLessonNumber = "";
      var nextLesson = GetLessonByNumber(book.Lessons, (parseInt(lessonNumber) + 1));
      if(nextLesson != null) 
      {
        nextLessonNumber = nextLesson.LessonNumber;
      }
      
      var LessonViewModel = kendo.observable({
          Book: book,
          PrevLessonNumber: prevLessonNumber,
          CurrentLesson: currentLesson,
          CurrentChapter: currentChapter,
          NextLessonNumber: nextLessonNumber,
          PrevLessonClick: function(e){
            GenerateKinderLessonDetails(currentBook, prevLesson.ChapterNumber, prevLesson.LessonNumber);
            $('#lesson-details .km-scroll-container').hide().slideUp();
            $('#lesson-details .km-scroll-container').slideDown();
            InitializeTabs();
          },
          NextLessonClick: function(e){
            $('#lesson-details .km-scroll-container').hide().slideUp();
            $('#lesson-details .km-scroll-container').slideDown();
            InitializeTabs();
            GenerateKinderLessonDetails(currentBook, nextLesson.ChapterNumber, nextLesson.LessonNumber);
          },
          GoToLibrary: function(e){
            window.location = "#views/mf-booklisting.html";
          },
        });
        kendo.bind($("#lesson-details"), LessonViewModel);  
    }
    
    function GenerateKinderPrefaceDetails(book)
    {
      var PrefaceViewModel = kendo.observable({
        BookTitle: book.Title,
        PrefaceContent: book.Preface,
        FirstLessonNumber: book.Chapters.First().Lessons.First().LessonNumber,
        FirstChapterNumber: book.Chapters.First().Lessons.First().ChapterNumber,
        NextLessonClick: function(e)
        {
          currentLessonNumber = $(e.currentTarget).children('input.js-lessonnumber').val();
          currentChapterNumber = $(e.currentTarget).children('input.js-chapternumber').val();
          window.location = "#views/mf-bookdetails.html";
        },
        GoToLibrary: function(e){
          window.location = "#views/mf-booklisting.html";
        },
      });
      kendo.bind($("#preface-details"), PrefaceViewModel, kendo.ui, kendo.mobile.ui); 
    }
    
    function GenerateKinderCoverDetails(book)
    {
      var CoverViewModel = kendo.observable({
        BookTitle: book.Title,
        CoverImageUrl: book.CoverImageUrl,
        GoToLibrary: function(e){
          window.location = "#views/mf-booklisting.html";
        },
      });
      kendo.bind($("#cover-details"), CoverViewModel); 
    }
    
    function GetChapterByNumber(chapters, chapterNumber)
    {
      var chapter = chapters.First(function(chapter){ return chapter.ChapterNumber == chapterNumber });
      return chapter;
    }
    
    function GetLessonByNumber(lessons, lessonNumber)
    {
      var lesson = lessons.First(function(lesson){ return lesson.LessonNumber == lessonNumber });
      return lesson;
    }
    
    function RenderLessonsTemplate(chapter) 
    {
      return kendo.Template.compile($('#lessons-template').html())(chapter);
    }
    
    function EnableScrolling() 
    {
      $("#scroller").data("kendoMobileScroller").enable();
    }
    




