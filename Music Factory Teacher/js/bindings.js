(function () {
    //var domain = "http://musicfactory.a8hosting.com/";
    var domain = "http://192.168.1.39:2580/";
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
                generateInfantBooks(books.InfantBooks);
                console.log(books);
            },
            error: function (error) { alert(error); }
        });
      });
      GetAllBooks();
    
      /*var GetBookById = (function(){
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
      GetBookById();*/
    
      function generateInfantBooks(infantBooks){ 
        var infantBooksViewModel = kendo.observable({InfantBooks: infantBooks});
        kendo.bind($(".tabcontent-infantbooks"), infantBooksViewModel);  
      };
      
      function generateBookDetails(book)
      {
        
      }
}());