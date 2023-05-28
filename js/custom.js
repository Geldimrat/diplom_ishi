// JQuery smooth scroll


// $(document).ready(function(){

//     $("a").on('click', function(event){

//         if(this.hash !== ""){
//             // if href="" is not empty come inside this condition
//             // In programming ! means NOT and == means equals 
//             // IF href is NOT EQUALS to ""

//             event.preventDefault();

//             var hash = this.hash;

//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function(){
//                 window.location.hash = hash;
//             });
//         }

//     });
// });

// //JavaScript page Navigation
// function goToweb(){
//     window.open("service.html#web", "_self");
// }

// function goTosoftware(){
//     window.open("service.html#software", "_self");
// }

// function goTodigital(){
//     window.open("service.html#digital", "_self");
// }

let menu = document.getElementById('navbarSupportedContent');
let toggle = false
function nav_menu() {
    toggle ^= true
    if (toggle) {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}
