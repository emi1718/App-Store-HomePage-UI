var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



document.getElementById("btn_mobile_search").addEventListener("click", () => {

  let mobile_search_form = document.getElementById("mobile_search_form")

  if (mobile_search_form.style.top == "-80px") {
    mobile_search_form.style.top = "80px"
  } else {
    mobile_search_form.style.top = "-80px"
  }
})


document.getElementById("menu_bar").addEventListener("click",()=>{
let menu =document.getElementById("menu");
let main_content=document.getElementById("main_content");


if(menu.style.left=="-100px"){
  menu.style.left="0px";
  main_content.style.marginLeft="100px"
}else{
  menu.style.left="-100px";
  main_content.style.marginLeft="0px"
}

})