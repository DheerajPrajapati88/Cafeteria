

document.addEventListener('mousemove', mouseMoveFunc);
function mouseMoveFunc(e) {
  const depth = 10;
  const moveX = ((e.pageX)-(window.innerWidth/2))/depth;
  const moveY = ((e.pageY)-(window.innerHeight/2))/depth;
  gsap.to(".hero_right img", {
    duration: 1,
    x: moveX,
    y: moveY,
    ease: "slow",
    // stagger: 0.008,
    overwrite: true
  });
}


const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",(e)=>{


    gsap.to(cursor,{
        duration:0.4,
        x:e.clientX,
        y:e.clientY,
        ease:"power2.out"
    })

})
const links=document.querySelectorAll(".nav_links h4,button");
links.forEach((link)=>{
    link.addEventListener("mouseenter",()=>{
        cursor.classList.add("active");
    })
    link.addEventListener("mouseleave",()=>{
        cursor.classList.remove("active");
    })
})


const active2=document.querySelector(".page4_h1 #h1_1");
const active3=document.querySelector(".page4_h1 #h1_2");
const active4=document.querySelector(".page4_h1 #h1_3");
const active5=document.querySelector(".page4_h1 #h1_4");

active2.addEventListener("mouseenter",()=>{
    cursor.classList.add("active2");
})
active2.addEventListener("mouseleave",()=>{
    cursor.classList.remove("active2");
})
active3.addEventListener("mouseenter",()=>{
    cursor.classList.add("active3");
})
active3.addEventListener("mouseleave",()=>{
    cursor.classList.remove("active3");
})
active4.addEventListener("mouseenter",()=>{
    cursor.classList.add("active4");
})
active4.addEventListener("mouseleave",()=>{
    cursor.classList.remove("active4");
})
active5.addEventListener("mouseenter",()=>{
    cursor.classList.add("active5");
})
active5.addEventListener("mouseleave",()=>{
    cursor.classList.remove("active5");
})



const tl=gsap.timeline();
tl.from(".hero_leftc h1,h3,p,button",{
    opacity:0,
    duration:1,
    y:50,
    stagger:0.2

})
tl.from(".hero_leftc .border_top",{
    duration:1,
    scale:0,
    transformOrigin:"left",
    ease:"Power2.inOut"

},"a")

tl.from(".hero_leftc .border_bottom",{
    duration:1,
    scale:0,
    transformOrigin:"right",
    ease:"Power2.inOut"

},"a")

tl.from(".logo,.nav_links h4",{
    duration:1,
    opacity:0,
    y:50,
    stagger:0.2,
    ease:"Power2.inOut"

})
const tl2=gsap.timeline();
tl2.to(".page2 .move_text h1",{
    transform:"translateX(-120%)",
    ease:"power2",
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"bottom 100%",
        scrub:2,
        // pin:true,
    }

})
tl2.from(".illus .img1",{
    x:-100,
    opacity:0,
    ease:"power2.in",
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"bottom 100%",
        scrub:2,
        // pin:true,
    }
    
},"a")
tl2.from(".illus .img2",{
    x:100,
    opacity:0,
    ease:"power2.in",
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"bottom 100%",
        scrub:2,
        // pin:true,
    }
    
},"a")
tl2.from(".illus .illus_text ",{
    rotateX:"90deg",
    opacity:0,
    duration:1,
    stagger:0.5,
    ease:"power2.in",
    scrollTrigger:{
        trigger:".page2 ",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"bottom 100%",
        scrub:2,
        // pin:true,
    }
    
},"a")

const tl3=gsap.timeline();

tl3.to(".card",{
    top:"40%",
    stagger:0.2,
    width:"70%",
    height:"70%",
    ease:"power2.inOut",
    scrollTrigger:{
    trigger:".page3",
    // markers:true,
    start:"top 0",
    end:"100% 50%" ,//the value specify the bottom and center
    scrub:2,
    pin:true,
}
})


const tl4=gsap.timeline(
    {
        scrollTrigger:{
        trigger:".page4_h1",
        start:"0% 60%",
        end:"100% 50%",
        // markers:true,
        scrub:2,
}});
tl4.from(".page4_h1",{

    rotateY:"-90deg",
    ease:"power3.out",
    duration:2,
    opacity:0,
    // stagger:0.4
})


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


const tl5=gsap.timeline()
tl5.from(".container",{
    
        scrollTrigger:{
            scroller:"body",
            trigger:".container",
            start:"100% 100%",
            end:"100% 100%",
            // markers:true,
            scrub:2,
        },
    
    opacity:0,
    rotateX:"-90deg",
    ease:"power2.in",
    stagger:0.2
})


