//------GLOBAL VARIABLES-----//
    var currentBookId;
    var currentCultureName;
    var currentBookType;
    var currentChapterNumber;
    var currentLessonNumber;
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
            /*$(".js-book-selected").click(function(){
              currentBookId = $(this).children().children('#currentBookId').val();
            });*/
            currentBookId = e.data.Id;
            currentCultureName = e.data.CultureName;
            currentBookType = e.data.Type;
            window.location = "#views/mf-bookdetails.html";
        }
      });
      kendo.bind($(".tabcontent-kinder"), KinderBooksViewModel);  
    };
    //GENERATE INFANTBOOKS FOR BOOK LISTING  
    function GenerateInfantBooks(infantbooks){ 
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
    };

//------FUNCTIONS FOR BOOK DETAILS-----//
    //GENERATE KINDERBOOKS BY ID
    function GetKinderBookById(_bookId, _cultureName){
      $.ajax({
          type: "POST",
          url: domain + "Custom/Services/A8_MusicFactoryService.svc/GetKinderBookById",
          contentType: "application/json;charset=utf-8",
          dataType: "json",
          //data: JSON.stringify({ bookId: "758a7bb3-986e-67b9-8ff0-ff0000d15b77", cultureName: "zh" }),
          data: JSON.stringify({ bookId: _bookId, cultureName: _cultureName }),
          async: false,
          success: function (result) {
              var book = result.d;
              GenerateKinderBook(book);
          },
          error: function () { alert("error GetKinderBookById"); }
      });
    };
    //GENERATE KINDERBOOKS BY ID
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
                GenerateInfantBook(book);
            },
            error: function () { alert("error GetKinderBookById"); }
        }); 
    };
    
    //GENERATE KINDERBOOK DETAILS
    function GenerateKinderBook(kinderbook)
    {
      var BookViewModel = kendo.observable({
        Book: kinderbook,
        Chapters: kinderbook.Chapters,
        CurrentLesson: kinderbook.Lessons.First(),
        SlideToggle: function(e){
          $(e.currentTarget).siblings('ul').slideToggle();
          $(e.currentTarget).children(".glyphicon").toggleClass("glyphicon-triangle-bottom glyphicon-triangle-top");
        },
        BackToLibrary: function(e){
          GetAllBooks();
          window.location = "#views/mf-booklisting.html";
        },
      });
      kendo.bind($("#table-of-contents"), BookViewModel);
      kendo.bind($("#lesson-details"), BookViewModel);     
    }
    
    function GetLessonByNumber(lessons, lessonNumber)
    {
      return lessons.First(function(lesson){ return lesson.LessonNumber = lessonNumber });
    }
    
    function renderLessonsTemplate(chapter) 
    {
      return kendo.Template.compile($('#lessons-template').html())(chapter);
    }



