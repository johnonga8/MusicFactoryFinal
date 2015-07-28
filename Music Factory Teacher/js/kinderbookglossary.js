DropNav();

//BINDING STARTS
//Function for drawer
function beforeShowKinderglossary(e)
{
  BindKinderGlossaryDetails(currentBook);
  closeNav();
}
function afterShowKinderglossary(e)
{
  $(".preloader-mf").hide();
}
function beforeHideKinderglossary(e)
{
  //Do Something
}