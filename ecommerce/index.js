 var menu= document.querySelector('.menu-bar');
 const list = document.querySelector('.second-bar-list');
 const acc =document.querySelector('.acc-cart')
const para =document.querySelector('.section-text')
const bg =document.querySelector('.first-page');
const sectiontwo = document.querySelector('.section-two');
const imgsection = document.querySelector('.img-sec');
const logo = document.querySelector('.logo');

menu.addEventListener('click',function(){
         list.classList.toggle('active');
      acc.classList.toggle('active');
      menu.classList.toggle('active');
      para.classList.toggle('active');
      bg.classList.toggle('active');
       console.log("clicked");
     
   
 });


 window.addEventListener('scroll', function(){

      const scrollPosition = window.scrollY;
      const elementPosition = imgsection.offsetTop;
      const windowHeight = window.innerHeight;
       if (scrollPosition > elementPosition - windowHeight) {
            sectiontwo.classList.add('slideup')
          console.log(scrollPosition > elementPosition - windowHeight)
          
}
})



// window.addEventListener('scroll', function(){

//       const scrollPosition = window.scrollY;
//       const elementPosition = imgsection.offsetTop;
//       const windowHeight = window.innerHeight;
//        if (scrollPosition > elementPosition - windowHeight) {
//             sectiontwo.classList.add('slideup')
//           console.log(scrollPosition > elementPosition - windowHeight)
          
// }
// })
  


