function navAppear(){
    const burger = document.querySelector('.burger');
    const navlinks = document.querySelector('.nav-links');
    const navlink = document.querySelectorAll('.nav-links li');
    const navbar = document.querySelector('nav');

    burger.addEventListener('click', function(){
         navlinks.classList.toggle('open');

         burger.classList.toggle('toggle');

         navlink.forEach((link,index) =>{
              if(link.style.animation){
                    link.style.animation=""
              }
              else{
                  link.style.animation=`navlinkfade 1s ease forwards ${index/5+0.5}s`;
              }
         })
    });
    window.addEventListener('scroll', ()=> {
        navbar.classList.toggle('navscroll',window.scrollY > 70);
    })
}
navAppear();

