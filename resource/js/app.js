// $('.navTrigger').click(function () {
//     $(this).toggleClass('active');
//     console.log("Clicked menu");
//     $("#mainListDiv").toggleClass("show_list");
//     $("#mainListDiv").fadeIn();

// });
const navOption = document.querySelector(".navOption");
const menuIsActive= ()=>{
    navOption.classList.toggle('active');
};
navOption.addEventListener('click',menuIsActive)