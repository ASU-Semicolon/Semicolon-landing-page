
function removeClass(elems, className) {
    [].forEach.call(document.querySelectorAll(elems), function(el) {
      el.classList.remove(className);
    });
  }


var navItems = document.querySelectorAll("#myTab");
for (var i = 0; i < navItems.length; i++) {
   navItems[i].addEventListener("click", function() { 
    removeClass('#myTab', 'tab')
      this.classList.add("tab");
   });
}