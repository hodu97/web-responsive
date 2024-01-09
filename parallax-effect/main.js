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