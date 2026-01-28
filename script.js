function scrollerLocation() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
scrollerLocation()

function videoAnimation() {

  const videoContainer = document.querySelector("#videoContainer");
  const focusElement = document.querySelector("#focusElement");

  videoContainer.addEventListener("mousemove", (e) => {
    focusElement.style.top = `${e.pageY}` - 50 + 'px'
    focusElement.style.left = `${e.pageX}` - 50 + 'px'
    gsap.to('#focusElement', { scale: 1 })
  });
  videoContainer.addEventListener("mouseleave", (e) => {
    focusElement.style.top = `${e.pageY}px`;
    focusElement.style.left = `${e.pageX}px`;
    gsap.to('#focusElement', { scale: 0 })

  });

}
videoAnimation()

function logoAnimation() {
  gsap.to(".logo svg", {
    transform: " translateY(-100%)",
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page1",
      markers: false,
      start: "top 0",
      end: "top -5%",
      scrub: true
    }

  });
}
logoAnimation()

function linksAnimation() {

  gsap.to(".links ", {
    transform: " translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page1",
      markers: false,
      start: "top 0",
      end: "top -5%",
      scrub: true
    }

  });
}
linksAnimation()

function HeadingAnimation() {
  gsap.from(".page span h1", {
    opacity: 0,
    y: 30,
    stagger: 0.3,
    delay: 0.1,
    duration: 0.6
  })

  gsap.from(videoContainer, {
    opacity: 0,
    y: 20,
    stagger: 0.1
    , scale: 0.9,
    duration: 0.4
  })

}

HeadingAnimation()

function hoverElement() {
  const el = document.querySelector(".el");
  const page3 = document.querySelector('.product-section');

  window.addEventListener('mousemove', function (e) {
    page3.addEventListener('mousemove', function () {
      gsap.to(el, {
        x: e.x - 50,
        y: e.y - 50,
        duration:0.5,
        ease: "power4.out",
        delay: 0.1,
        opacity: 1,

      })
    })
  })
  window.addEventListener('mousemove', function () {
    page3.addEventListener('mouseleave', function () {

      gsap.to(el, {
        opacity: 0

      })
    })


  })
}

hoverElement()


function emailInput() {
  const selected = document.querySelector('.selected');
  const Notselected = document.querySelector('.not-selected');
  const textarea = document.querySelector('.email-input input')

  while (textarea.addEventListener('click')) {
    selected.style.display = `block`;
    Notselected.style.display = `none`;
  }
}
emailInput()

function footerSvgAnimation() {
  const footerSvg = document.querySelector(".svg svg ");

  gsap.from(footerSvg, {
    opacity: 0,
    position: "relative",
    y: 30,
    stagger: 0.3,
    delay: 0.1,
    duration: 0.6,
    scrollTrigger: {
      scroller: "#main",
      trigger: "#page6",
      markers: false,
      start: "top top",
      end: "top -5%",
      scrub: true
    }
  })

}
footerSvgAnimation()

function selectedItem() {
  const productSlider = document.querySelector('.Brand-Slider');
  const productIlement = document.querySelectorAll('.Product-slide');
  
  

}
selectedItem()