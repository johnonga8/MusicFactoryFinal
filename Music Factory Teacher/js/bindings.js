    var currentBookId;
    var currentCultureName;
    var currentBookType;
    var currentChapterNumber;
    var currentLessonNumber;

   // $(".tabcontent-kinder a").click(function() {
   //   currentBookId = $(this).children('#currentBookId').val();
   // });
        
 

    function generateKinderBooks(kinderbooks){ 
      var KinderBooksViewModel = kendo.observable(
      {
        KinderBooks: kinderbooks,
        SelectBook:  function(e) {
            currentBookId = $('.js-book-selected').children().children('#currentBookId').val();
            currentCultureName = $('.js-book-selected').children().children('#currentCultureName').val();
            currentBookType = $('.js-book-selected').children().children('#currentBookType').val();
            //console.log(currentBookId);
            window.location = "#views/mf-bookdetails.html";
            //alert('BOOK SELECTED!');
        }
      });
      kendo.bind($(".tabcontent-kinder"), KinderBooksViewModel);  
      
    
    };
  
    var domain = "http://musicfactory.a8hosting.com/";
    //var domain = "http://192.168.1.39:2580/";
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
                generateKinderBooks(books.KinderBooks);
            },
            error: function () { alert("error GetAllBooks"); }
        });
      };
    
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
          },
          error: function () { alert("error GetKinderBookById"); }
      });
    };

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
            },
            error: function (error) { alert(error); }
        }); 
    };

