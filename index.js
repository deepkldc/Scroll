const date=document.getElementById("date");
date.innerHTML = new Date().getFullYear();
const navCentre =document.querySelector(".nav-center");
const link=document.querySelector(".top-link");
window.addEventListener("scroll",function(){
const scrollHeight=window.pageYOffset;
const  navHeight=navCentre.getBoundingClientRect().height;
console.log(navHeight);
if(scrollHeight>navHeight)
{
navCentre.classList.add("fixed-nav");
}
else
{
navCentre.classList.remove("fixed-nav");
}
if(navHeight>50) 
{
link.classList.add("show-links");
}
}) 
const scrollLink =document.querySelectorAll(".scroll-link");
scrollLink.forEach(function(item){
    item.addEventListener("click",function(e){
       e.preventDefault();
       const id=e.currentTarget.getAttribute("href").slice(1);
      
       const  navHeight=navCentre.getBoundingClientRect().height;
     const element=document.getElementById(id);
    const fixedNav= navCentre.classList.contains("fixed-nav");
    console.log(fixedNav);
     let position=element.offsetTop-navHeight;
     console.log(position);
     if(!fixedNav)
     {
        position=position-navHeight;
        console.log(position);
     }
     window.scrollTo({
        left:0,
        top:position,
    })
    })

})