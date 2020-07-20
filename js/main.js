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

var quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "Life is what happens when you're busy making other plans.",
];

//function newQoute() {
// var randomNumber = Math.floor(Math.random() * quotes.length());

//  document.getElementById("qoutedisplay").innerHTML = quotes//[randomNumber];
//}
