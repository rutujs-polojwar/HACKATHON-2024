// // this is a fade page 
// //the very page that will be seen when the window is loaded 
// //then it fades away and is removed from the container itself 
// //this has  been achieved using promises

// let faded = false;
// //accessing the intro page by class name
let introPage = document.getElementsByClassName("intro-page")[0];

//accessing the intro logo
let introLogo = document.getElementsByClassName("introLogo")[0];

//accessing the container in which the intro page is 
let container = document.getElementsByClassName("container")[0];

//accessing the intro page by id name
// let IntroPage = document.getElementById("introPage")[0];


let fadingPage = (delay) => {
    // if (localStorage.getItem("introPlayed")) {
    //     console.log("intro already played");
    //     return;
    // }
    // else {
        return new Promise((resolve) => {
            setTimeout(() => {
                introPage.classList.add("fade-out");
                introLogo.classList.add("zoom");
                // resolve("done");

                introPage.addEventListener("transitionend", () => {
                    introPage.remove();
                    resolve("transitioned and removed");
                    console.log();
                });

            }, delay);
        })
    }
// }

window.addEventListener("load", () => {
    fadingPage(500)
        .then((res) => { 
            localStorage.setItem("introPlayed" , "true") ;
            console.log(res) ; })
            // .then ((data) => if(data=="")
        .catch((err) => console.log(err));
});

/*TRIED TWO MORE WAYS TO MAKE THE FADE OUT PAGE  */
/*tried using the local storage to get intro page only once
but failed ;( */

// let fadedPage = () => {
//     return new Promise((resolve, reject) => {
//         if (localStorage.getItem("introFaded")) {
//             resolve("animation already played");
//             return;
//         }



//         window.addEventListener("load", (resolve, reject) => {
//             try {
//                 setTimeout(() => {

//                     introPage.classList.add("fade-out"); // Add the fade-out class
//                     introLogo.classList.add("zoom");

//                     // Wait for the CSS transition to complete before removing the element
//                     introPage.addEventListener("transitionend", () => {
//                         localStorage.setItem("introFaded", "true");
//                         resolve("done"); // Resolve the promise
//                     });
//                 }, 500);

//             }
//             catch (err) { reject(err); }
//         });
//     })
// }
// fadedPage()
//     .then((data) => {
//         console.log(data);
//         if (data == "done") {
//             introPage.remove();

//         }
//     })
//     .catch((err) => console.log(err));

   


// let container = document.getElementsByClassName("container")[0]; // Access the first element
// let introPage = document.getElementsByClassName("intro-page")[0];
// let introLogo = document.getElementsByClassName("introLogo")[0];

// // Function that returns a promise that fades out the element and then removes it
// function fadeOutAndRemoveElement(delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             introPage.classList.add("fade-out"); // Add the fade-out class
//             introLogo.classList.add("zoom");

//             // Wait for the CSS transition to complete before removing the element
//             introPage.addEventListener("transitionend", () => {
//                 introPage.remove(); // Remove the element from the DOM
//                 resolve(); // Resolve the promise
//             });
//         }, delay);
//     });
// }

// // Use the promise to handle the fade-out and removal
// window.addEventListener("load", () => {
//     fadeOutAndRemoveElement(3000).then(() => {
//         console.log("Fade-out completed and element removed");
//         // Further actions can be performed here
//     });
// });