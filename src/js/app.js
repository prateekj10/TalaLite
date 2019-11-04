window.addEventListener("load", function() {
  console.log("Hello World!");
});

function checkPermissions()
{
  var r = confirm("Allow TALA to access your Contacts.");
  if (r == true) {
    var s = confirm("Allow TALA to access your Location");
    if(s == true){
      return true;
    }
    return false;
  } 
  return false;
}

