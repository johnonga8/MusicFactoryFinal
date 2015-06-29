


/**$(".bookItem").click(function()
{
  currentBookId = selectedItem.BookId,
  currentCultureName = selectedItem.BookId,
  

});**/
//Function for drawer
function beforeShow(e)
{
  GetKinderBookById(currentBookId, currentCultureName);
}

function afterShow(e){
    setTimeout(function () {
        $("#table-of-contentss").data("kendoMobileDrawer").show();
    }, 1);
}

