

function loco() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("main"),
        smooth: true
    });

    // Sync GSAP ScrollTrigger with Locomotive Scroll
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
    });



    // Keep in sync
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}

loco();



// custom cursor code here
function customCursor() {
    const cursor = document.querySelector(".cursor");
    const main = document.querySelector("main")
    main.addEventListener("mousemove", e => {
        gsap.to(cursor,
            {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: "power2.out"
            });
    });

}
customCursor()







// navbar animation
function navbarAnimation() {
    let main = document.querySelector("main");
    let navbar = document.querySelector(".navbar")
    let lastScroll = 0;
    main.addEventListener("wheel", (e) => {
        if (e.deltaY > 0) {
            gsap.to(navbar, {
                y: -100,
                opacity: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        } else {
            gsap.to(navbar, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out"
            });
        }
    });

}
navbarAnimation()

// let generateBtn = document.querySelector(".generate-btn");

// generateBtn.addEventListener("mouseenter", () => {
//     gsap.to(".generate-btn", {
//         scale: 1.05,
//         boxShadow: "0 0 10px #aa00ff",
//         duration: 0.3,
//     });
// });

// generateBtn.addEventListener("mouseleave", () => {
//     gsap.to(".generate-btn", {
//         scale: 1,
//         boxShadow: "none",
//         duration: 0.3,
//     });
// });

gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();
function heroSectionAnimation() {

    tl.from(".main-image", {
        scale: 0.11,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    }, "start");

    const split = new SplitText(".myText", { type: "chars, words" });

    tl.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
        duration: 1
    }, "start+=0.2");

    tl.from(".nav-links-text", {
        opacity: 0,
        y: -100,
        stagger: 0.6,

    }, "start+=0.2");

    tl.from(".sign-btn", {
        opacity: 0,
        y: -100,
        stagger: 0.6,

    }, "start+=0.8");

    tl.from(".logo", {
        opacity: 0,
        scale: 0.4,

    }, "start+=0.2");

    tl.from(".avter-img", {
        scale: 0.1,
        opacity: 0,
        stagger: 0.4
    }, "start+=0.4")

    tl.from(".avter-img-2", {
        scale: 0.1,
        opacity: 0,
        stagger: 0.4
    }, "start+=0.4")

    tl.from(".sm-text", {
        scale: 0.1,
        opacity: 0,

    }, "start+=0.5")
    tl.from(".botttom-text", {
        opacity: 0,
        y: 100,
        duration: 0.5
    }, "start+=0.7")


    tl.from(".search-bar", {
        opacity: 0,
        y: 100,

    }, "start+=0.8");

}
heroSectionAnimation();

// gallery section animation start here
function gallerySectionAnimation() {
    let tl = gsap.timeline({
        defaults: {
            duration: 0.5,
            ease: "power1.out"
        },
        scrollTrigger: {
            trigger: ".gallery-section",
            scroller: "main",
            start: "top 90%",
            end: "bottom 20%",
            scrub: 3,
            // markers: true,
        }
    });
    const split = new SplitText(".gallery-text", { type: "chars, words" });

    tl.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
        duration: 1
    }, "gallery");

    tl.from(".gallery-image-3", {
        scale: 0.7,
        stagger: 0.5,
        opacity: 0,
    }, "gallery")

    tl.from(".gallery-image-1", {
        x: -200,
        opacity: 0,
    }, "gallery")

    tl.from(".gallery-image-2", {
        x: 200,
        opacity: 0,
    }, "gallery")

}
gallerySectionAnimation();

//  Text to Video Section start here  
function textToVideoSectionAnimation() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".text-to-video-section",
            scroller: "main",
            start: "top 80%",
            end: "bottom 30%",
            scrub: 3,
            // markers: true,
        }
    });
    tl.from(".left-part", {
        scale: 0.7,
        opacity: 0.7,
    }, "text-to-video")
    tl.from(".generate", {
        y: 200,
        opacity: 0,
    }, "text-to-video")
    const split = new SplitText(".convert-text", { type: "chars, words" });

    tl.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
        duration: 0.4
    }, "text-to-video");
}
textToVideoSectionAnimation()

// Why Our AI Generator Stands Out section
function whyOurAIGeneratorStandsOutSectionAnimation() {
    let tl = gsap.timeline({
        defaults: {
            duration: 0.6,
            ease: "power1.out",
        },
        scrollTrigger: {
            trigger: ".why-our-ai-generator-stands-out-section",
            scroller: "main",
            start: "top 60%",
            end: "bottom 30%",
            scrub: 3,
            markers: true,
            // pin: true
        },
    });

    // tl.from(".card", {
    //     y: 100,
    //     opacity: 0.4,
    //     stagger: 0.9,
    // }, "aigen");
    const split = new SplitText(".ai-gen", { type: "chars, words" });

    tl.from(split.chars, {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        ease: "back.out(1.7)",
        duration: 0.4
    }, "aigen");
}
whyOurAIGeneratorStandsOutSectionAnimation();

