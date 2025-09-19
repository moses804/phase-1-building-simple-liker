// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

// main.js

// Get all heart elements
const hearts = document.querySelectorAll(".like-glyph");

// Get the error modal
const errorModal = document.getElementById("modal");

// Initially hide the error modal
errorModal.classList.add("hidden");

// Add click event listener to each heart
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    // If the heart is currently empty, simulate a server call
    if (heart.textContent === EMPTY_HEART) {
      mimicServerCall()
        .then(() => {
          // On success, fill the heart and add the activated class
          heart.textContent = FULL_HEART;
          heart.classList.add("activated-heart");
        })
        .catch((error) => {
          // On failure, show the error modal with the message
          errorModal.classList.remove("hidden");
          errorModal.querySelector("#modal-message").textContent = error;

          // Hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add("hidden");
          }, 3000);
        });
    } else {
      // If heart is full, unfill it
      heart.textContent = EMPTY_HEART;
      heart.classList.remove("activated-heart");
    }
  });
});

/* Provided mimicServerCall function for reference (already in your file)
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 0.2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
*/

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
