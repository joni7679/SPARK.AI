
let generateBtn = document.querySelector(".generate-btn");

generateBtn.addEventListener("mouseenter", () => {
    gsap.to(".generate-btn", {
        scale: 1.05,
        boxShadow: "0 0 10px #aa00ff",
        duration: 0.3,
    });
});

generateBtn.addEventListener("mouseleave", () => {
    gsap.to(".generate-btn", {
        scale: 1,
        boxShadow: "none",
        duration: 0.3,
    });
});

gsap.from(".main-image", {
    scale: 0.11,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.registerPlugin(ScrollTrigger);

gsap.from(".ccard", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.3,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".ccard",
        start: "top 85%",
    },
});

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });



    tl.from(".purple p", { scale: 0.3, rotation: 45, autoAlpha: 0, ease: "power2" })
        .from(".line-3", { scaleX: 0, transformOrigin: "left center", ease: "none" }, 0)
        .to(".purple", { backgroundColor: "#28a92b" }, 0);



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
loco()