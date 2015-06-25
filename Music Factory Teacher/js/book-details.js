$(document).ready(function() {
  if(currentBookType === "Kinder"){
    //alert('Get Kinder Book: ' + currentBookId + '|| ' + currentCultureName);
    var kinderBook = GetKinderBookById(currentBookId, currentCultureName);
  }else{
    //GetInfantBookById(currentBookId, currentCultureName);
  };
});


/**$(".bookItem").click(function()
{
  currentBookId = selectedItem.BookId,
  currentCultureName = selectedItem.BookId,
  

});**/
//Function for drawer
function afterShow(e){
    setTimeout(function () {
        $("#book-chapters").data("kendoMobileDrawer").show();
    }, 1);
}

