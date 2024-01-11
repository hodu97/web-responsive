//🤍 lenis 연결 🤍

const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

//🤍 text ani  🤍

Splitting();

//🤍 gsap 연결  🤍

gsap.registerPlugin(ScrollTrigger);

//=======================================
//🤍 main title 🤍

let tl = gsap.timeline();
tl.from('.char', {
    opacitiy: 0,
    yPercent: 130,
    stagger: 0.06,
    duration: 1,
    ease: "expo.out",
});

tl.to(".header__img",{duration:2,
    clipPath: `polygon(100% 0, 0 0, 0 100%, 100% 100%)`,
    ease: "expo.out",
},"-=1")

tl.from(".header__marq",{
    duration:2, 
    opacity:0, 
    yPercent:100,
    ease: "expo.out"},"-=1.5")


let gsapSq=document.querySelectorAll('.section-title__square')


gsapSq.forEach((gSq,i)=>{
    let rotate=gsap.from(gSq,{duration:3,rotation:720})

    ScrollTrigger.create({
        trigger:gSq,
        animation:rotate,
        start:'top bottom',
        scrub:1.9
    })
})


//header
function header(){
gsap.to(".title_paralax",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    yPercent:-150

})

gsap.to(".header .stroke",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    yPercent:50

})

gsap.to(".header__img",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    xPercent:-70

})

gsap.to(".header__img img",{
    scrollTrigger:{
        trigger:".header",
        start:'top top',
        scrub:1.9
    },
    scale:1.3

})



}

header();