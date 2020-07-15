$(document).ready(function () {
  $(".carousel").carousel();
});
// Init sidenav
$(document).ready(function () {
  $(".sidenav").sidenav();
});

// activate slider
$(".slider").slider();

// fire off toast on reload
M.toast({ html: "Welcome!" });

// init material boxed
$(document).ready(function () {
  $(".materialboxed").materialbox();
});

// Init Modal
$(document).ready(function () {
  $(".modal").modal();
});

// init taptarget
$(document).ready(function () {
  $(".tap-target").tapTarget();
});

//smooth scroll effect
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

function validateForm() {
  var name = document.forms["contact"]["name"].value;
  var email = document.forms["contact"]["email"].value;
  var subject = document.forms["contact"]["subject"].value;

  if (name == null || name == "") {
    alert("Name is required");
    return false;
  }
  if (email == null || email == "") {
    alert("Email is required");
    return false;
  }
  if (message == null || message == "") {
    alert("Message is required");
    return false;
  }
}
