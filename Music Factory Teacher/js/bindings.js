//------GLOBAL VARIABLES-----//
    var currentBookId;
    var currentCultureName;
    var currentBookType;
    var currentBook;
    var currentLessonNumber;
    var currentChapterNumber;
    //var domain = "http://musicfactory.a8hosting.com/";
    var domain = "http://192.168.1.39:2580/";
    
//------FUNCTIONS FOR BOOK LISTING START-----//
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
                GenerateInfantBooks(books.InfantBooks);
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
            GetKinderBookById(currentBookId, currentCultureName)
            window.location = "#views/mf-kinderbookcover.html";
        }
      });
      kendo.bind($(".booklisting-kinder"), KinderBooksViewModel);  
    };
    
    //GENERATE INFANTBOOKS FOR BOOK LISTING  
    function GenerateInfantBooks(infantbooks){ 
      var InfantBooksViewModel = kendo.observable(
      {
        InfantBooks: infantbooks,
        SelectBook:  function(e) {

            currentBookId = e.data.Id;
            currentCultureName = e.data.CultureName;
            currentBookType = e.data.Type;
            GetInfantBookById(currentBookId, currentCultureName)
            //window.location = "#views/mf-infantbookcover.html";
            app.navigate("views/mf-infantbookcover.html");
        }
      });
      kendo.bind($(".booklisting-infant"), InfantBooksViewModel);  
    };
//------FUNCTIONS FOR BOOK LISTING END-----//
    
//------FUNCTIONS FOR KINDER BOOK DETAILS START-----//
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
 
    function BindKinderGlossaryDetails(book)
    {
      var BookViewModel = GenerateKinderTableOfContents(book);
      kendo.bind($("#table-of-contents-glossary"), BookViewModel);
      GenerateKinderGlossaryDetails(book);
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
          $('#lesson-details .km-scroll-container').hide().slideUp();
          $('#lesson-details .km-scroll-container').slideDown();
          if (window.location.href.indexOf("bookdetails") > -1) {
            hideDrawer();
            GenerateKinderLessonDetails(currentBook, currentChapterNumber, currentLessonNumber);
          }
          else{
            window.location = "#views/mf-kinderbookdetails.html";
          }
        },
        GoToPreface: function(e){
          window.location = "#views/mf-kinderbookpreface.html";
        },
        GoToCover: function(e){
          window.location = "#views/mf-kinderbookcover.html";
        },
        GoToGlossary: function(e){
          window.location = "#views/mf-kinderbookglossary.html";
        },
      });
      return BookViewModel;
    }
    
    function GenerateKinderLessonDetails(book, chapterNumber, lessonNumber)
    {
      var prevLessonNumber = "";
      var prevLesson = GetLessonByNumber(book.Lessons, (parseInt(lessonNumber) - 1));
      if(prevLesson == null || prevLesson.LessonNumber == 0) 
      {
        $(".bttn-prev-lesson").addClass("hide");
        $(".bttn-prev-preface").removeClass("hide");
      }
      else{        
        prevLessonNumber = prevLesson.LessonNumber;
        $(".bttn-prev-lesson").removeClass("hide");
        $(".bttn-prev-preface").addClass("hide");
      }
      var currentLesson = GetLessonByNumber(book.Lessons, lessonNumber);
      var currentChapter = GetChapterByNumber(book.Chapters, currentLesson.ChapterNumber)
      
      var nextLessonNumber = "";
      var nextLesson = GetLessonByNumber(book.Lessons, (parseInt(lessonNumber) + 1));
      if(nextLesson == null) 
      {
        $(".bttn-next-lesson").addClass("hide");
        $(".bttn-glossary-lesson").removeClass("hide");
      }
      else{
        nextLessonNumber = nextLesson.LessonNumber;
        $(".bttn-next-lesson").removeClass("hide");
        $(".bttn-glossary-lesson").addClass("hide");
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
            removeScroll();
          },
          NextLessonClick: function(e){
            $('#lesson-details .km-scroll-container').hide().slideUp();
            $('#lesson-details .km-scroll-container').slideDown();
            InitializeTabs();
            removeScroll();
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
      var firstLesson = book.Chapters.First().Lessons.First();
      var PrefaceViewModel = kendo.observable({
        BookTitle: book.Title,
        PrefaceContent: book.Preface,
        FirstLessonNumber: firstLesson.LessonNumber,
        NextLessonClick: function(e)
        {
          currentLessonNumber = firstLesson.LessonNumber;
          currentChapterNumber = firstLesson.ChapterNumber;
          window.location = "#views/mf-kinderbookdetails.html";
        },
        GoToLibrary: function(e){
          window.location = "#views/mf-booklisting.html";
        },
      });
      kendo.bind($("#preface-details"), PrefaceViewModel, kendo.ui, kendo.mobile.ui); 
    }
    
    function GenerateKinderGlossaryDetails(book)
    {
      var lastLesson = book.Chapters.Last().Lessons.Last();
      var GlossaryViewModel = kendo.observable({
        BookTitle: book.Title,
        GlossaryContent: book.Glossary,
        LastLessonNumber: lastLesson.LessonNumber,
        GoToLibrary: function(e){
          window.location = "#views/mf-booklisting.html";
        },
        PrevLessonClick: function(e){
            currentLessonNumber = lastLesson.LessonNumber;
            currentChapterNumber = lastLesson.ChapterNumber;
            window.location = "#views/mf-kinderbookdetails.html";
          },
      });
      kendo.bind($("#glossary-details"), GlossaryViewModel); 
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
//------FUNCTIONS FOR KINDER BOOK DETAILS END-----//
    
//------FUNCTIONS FOR INFANT BOOK DETAILS START-----// 
    function GetInfantBookById(_bookId, _cultureName){
      $.ajax({
          type: "POST",
          url: domain + "Custom/Services/A8_MusicFactoryService.svc/GetInfantBookById",
          contentType: "application/json;charset=utf-8",
          dataType: "json",
          data: JSON.stringify({ bookId: _bookId, cultureName: _cultureName }),
          async: false,
          success: function (result) {
              var book = result.d;
              currentBook = book;
          },
          error: function () { alert("error GetInfantById"); }
      });
    };
    
    function BindInfantCoverDetails(book)
    {
      var BookViewModel = GenerateInfantTableOfContents(book);
      kendo.bind($("#table-of-contents-cover"), BookViewModel);
      GenerateInfantCoverDetails(book);
    }
    
    function BindInfantPrefaceDetails(book)
    {
      var BookViewModel = GenerateInfantTableOfContents(book);
      kendo.bind($("#table-of-contents-preface"), BookViewModel);
      GenerateInfantPrefaceDetails(book);
    }
    
    function BindInfantLessonDetails(book)
    {
      var BookViewModel = GenerateInfantTableOfContents(book);
      kendo.bind($("#table-of-contents-theme"), BookViewModel);
      GenerateInfantLessonDetails(book, currentChapterNumber, currentLessonNumber);
    }
    
    function BindInfantGlossaryDetails(book)
    {
      var BookViewModel = GenerateInfantTableOfContents(book);
      kendo.bind($("#table-of-contents-glossary"), BookViewModel);
      GenerateInfantGlossaryDetails(book);
    } 
    
    function GenerateInfantTableOfContents(infantbook)
    {
      var BookViewModel = kendo.observable({
        Book: infantbook,
        Themes: infantbook.Themes,
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
          $('#lesson-details .km-scroll-container').hide().slideUp();
          $('#lesson-details .km-scroll-container').slideDown();
          if (window.location.href.indexOf("bookdetails") > -1) {
            hideDrawer();
            GenerateInfantLessonDetails(currentBook, currentChapterNumber, currentLessonNumber);
          }
          else{
            //window.location = "#views/mf-infantbookdetails.html";
            app.navigate("views/mf-infantbookdetails.html");
          }
        },
        GoToPreface: function(e){
         // window.location = "#views/mf-infantbookpreface.html";
         app.navigate("views/mf-infantbookpreface.html");
        },
        GoToCover: function(e){
          //window.location = "#views/mf-infantbookcover.html";
          app.navigate("views/mf-infantbookcover.html");
        },
        GoToGlossary: function(e){
         // window.location = "#views/mf-infantbookglossary.html";
         app.navigate("views/mf-infantbookglossary.html");
        },
      });
      return BookViewModel;
    }
    
    function GenerateInfantCoverDetails(book)
    {
      var CoverViewModel = kendo.observable({
        BookTitle: book.Title,
        CoverImageUrl: book.CoverImageUrl,
        GoToLibrary: function(e){
         // window.location = "#views/mf-booklisting.html";
         app.navigate("views/mf-booklisting.html");
        },
      });
      kendo.bind($("#cover-details"), CoverViewModel); 
    } 
    
    function GenerateInfantPrefaceDetails(book)
    {
      var firstLesson = book.Themes.First().Lessons.First();
      var PrefaceViewModel = kendo.observable({
        BookTitle: book.Title,
        PrefaceContent: book.Preface,
        FirstLessonNumber: firstLesson.LessonNumber,
        NextLessonClick: function(e)
        {
          currentLessonNumber = firstLesson.LessonNumber;
          currentChapterNumber = firstLesson.ThemeNumber;
          //window.location = "#views/mf-infantbookdetails.html";
          app.navigate("views/mf-infantbookdetails.html");
        },
        GoToLibrary: function(e){
         // window.location = "#views/mf-booklisting.html";
         app.navigate("views/mf-booklisting.html");
        },
      });
      kendo.bind($("#preface-details"), PrefaceViewModel, kendo.ui, kendo.mobile.ui); 
    }
    
    function GenerateInfantLessonDetails(book, chapterNumber, lessonNumber)
    {
      var prevLessonNumber = "";
      var prevLesson = GetLessonByNumber(book.Lessons, (parseInt(lessonNumber) - 1));
      if(prevLesson == null || prevLesson.LessonNumber == 0) 
      {
        $(".bttn-prev-lesson").addClass("hide");
        $(".bttn-prev-preface").removeClass("hide");
      }
      else{        
        prevLessonNumber = prevLesson.LessonNumber;
        $(".bttn-prev-lesson").removeClass("hide");
        $(".bttn-prev-preface").addClass("hide");
      }
      var currentLesson = GetLessonByNumber(book.Lessons, lessonNumber);
      var currentChapter = GetChapterByNumber(book.Themes, currentLesson.ThemeNumber)
      
      var nextLessonNumber = "";
      var nextLesson = GetLessonByNumber(book.Lessons, (parseInt(lessonNumber) + 1));
      if(nextLesson == null) 
      {
        $(".bttn-next-lesson").addClass("hide");
        $(".bttn-glossary-lesson").removeClass("hide");
      }
      else{
        nextLessonNumber = nextLesson.LessonNumber;
        $(".bttn-next-lesson").removeClass("hide");
        $(".bttn-glossary-lesson").addClass("hide");
      }
      
      var LessonViewModel = kendo.observable({
          Book: book,
          PrevLessonNumber: prevLessonNumber,
          CurrentLesson: currentLesson,
          CurrentTheme: currentChapter,
          NextLessonNumber: nextLessonNumber,
          PrevLessonClick: function(e){
            GenerateInfantLessonDetails(currentBook, prevLesson.ThemeNumber, prevLesson.LessonNumber);
            $('#lesson-details .km-scroll-container').hide().slideUp();
            $('#lesson-details .km-scroll-container').slideDown();
            InitializeTabs();
            removeScroll();
          },
          NextLessonClick: function(e){
            $('#lesson-details .km-scroll-container').hide().slideUp();
            $('#lesson-details .km-scroll-container').slideDown();
            InitializeTabs();
            removeScroll();
            GenerateInfantLessonDetails(currentBook, nextLesson.ThemeNumber, nextLesson.LessonNumber);
          },
          GoToLibrary: function(e){
            //window.location = "#views/mf-booklisting.html";
            app.navigate("views/mf-booklisting.html");
          },
        });
        kendo.bind($("#lesson-details"), LessonViewModel);  
    }
    
    function GenerateInfantGlossaryDetails(book)
    {
      var lastLesson = book.Themes.Last().Lessons.Last();
      var GlossaryViewModel = kendo.observable({
        BookTitle: book.Title,
        GlossaryContent: book.Glossary,
        LastLessonNumber: lastLesson.LessonNumber,
        GoToLibrary: function(e){
         // window.location = "#views/mf-booklisting.html";
         app.navigate("views/mf-booklisting.html");
        },
        PrevLessonClick: function(e){
            currentLessonNumber = lastLesson.LessonNumber;
            currentChapterNumber = lastLesson.ThemeNumber;
          //  window.location = "#views/mf-infantbookdetails.html";
          app.navigate("views/mf-infantbookdetails.html");
          },
      });
      kendo.bind($("#glossary-details"), GlossaryViewModel); 
    }
    
//------FUNCTIONS FOR INFANT BOOK DETAILS END-----//    
    
//------COMMON FUNCTIONS START-----//
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
//------COMMON FUNCTIONS END-----//




