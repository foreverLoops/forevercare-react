import { clinicalSummary, documents, medications, notice, timeline } from "/scripts/portalData.js";

let rightSidebar = document.querySelector(".sidebar");
let rightSidebarLinks = rightSidebar.querySelectorAll("sideLink");
let display = document.querySelector(".display");

display.innerHTML = notice;

// rightSidebarLinks[0].addEventListener("click",function() {
//     display.innerHTML = appointments;
// });

rightSidebarLinks[1].addEventListener("click",function() {
    display.innerHTML = clinicalSummary;
});

rightSidebarLinks[2].addEventListener("click",function() {
    display.innerHTML = documents;
});

// rightSidebarLinks[3].addEventListener("click",function() {
//     display.innerHTML = library;
// });

rightSidebarLinks[4].addEventListener("click",function() {
    display.innerHTML = medications;
});

// rightSidebarLinks[5].addEventListener("click",function() {
//     display.innerHTML = messages;
// });

rightSidebarLinks[7].addEventListener("click",function() {
    display.innerHTML = timeline;
});

// rightSidebarLinks[8].addEventListener("click",function() {
//     display.innerHTML = visits;
// });

// rightSidebarLinks[9].addEventListener("click",function() {
//     display.innerHTML = wellness;
// });