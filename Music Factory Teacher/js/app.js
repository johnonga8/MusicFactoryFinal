/*(function () {

    var app = new kendo.mobile.Application(document.body);
   
    var domain = "http://musicfactory.a8hosting.com/";
    var GetAllBooks = (function(){
        $.ajax({
            type: "POST",
            async: false,
            url: domain + "Custom/Services/A8_MusicFactoryService.svc/GetAllBooks",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: null,
            success: function (result) {
                books = result.d;
                generateAllBooks(books);
                console.log(books);
            },
            error: function (error) { alert(error); }
        });
      });
      GetAllBooks();
    
      var GetBookById = (function(){
        $.ajax({
            type: "POST",
            url: domain + "Custom/Services/A8_MusicFactoryService.svc/GetBookById",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: JSON.stringify({ bookId: "c9847bb3-986e-67b9-8ff0-ff0000d15b77" }),
            success: function (result) {
                var book = result.d;
                generateBook(book);
                console.log(book);
            },
            error: function (error) { alert(error); }
          });
        });
      GetBookById();
    
      function generateAllBooks(books){ 
        /*window.bookmodel = kendo.observable({
        author: books.Author,
        chapters: books.Chapters,
        cover: books.CoverImageUrl,
        title: books.Title,
        type: books.Type
        //var infantBooksViewModel = kendo.observable( books );
        var infantBooksViewModel = kendo.observable({
          InfantBooks: [
              { Author: "Author1", CoverImageUrl: "Coffee" },
              { Author: "Author2", CoverImageUrl: "Tea" },
              { Author: "Author3", CoverImageUrl: "Juice" }
          ]
        });
        kendo.bind($("ul"), infantBooksViewModel);
      //});   
      }
      function generateBook(book){ 
        window.bookmodel = kendo.observable({
        
      });   
      }
}());

(function () {

    var app = new kendo.mobile.Application(document.body);
   
    var domain = "http://192.168.1.39:9999/";
    var ajaxbooks = (function(){
        $.ajax({
            type: "POST",
            async: false,
            url: domain + "Custom/Service/TestService.svc/GetTestBook",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: null,
            success: function (result) 
            {
             var data = result.d; 
             generateBooks(data[0]);
            },
            error: function () { alert("error"); }
        });
      });
      ajaxbooks();
    
      function generateBooks(data){ 
        window.bookdetails = kendo.observable({
        title: data.Author,
        title: data.Author,
      });   
      }
}());
***/

(function(){
  var app = new kendo.mobile.Application(document.body);

}());
