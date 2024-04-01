const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

gsap.to("#page2 h1", {
  transform:"translateX(-210%)",
  ease:"power1",
  scrollTrigger: {
    trigger: "#page2",
    start: "top 0%",
    end: "top -100%",
    scrub: 1,
    pin: true,
    // invalidateOnRefresh: true,
    scroller: "#main"
  }
});
gsap.to("#page2 .slide", {
  transform:"translateX(-500%)",
  ease:"power1",
  scrollTrigger: {
    trigger: "#page2",
    start: "top 0%",
    end: "top -110%",
    scrub: 2,
    // invalidateOnRefresh: true,
    scroller: "#main"
  }
});











// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

// function locogo(){
//   gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
// el: document.querySelector("#main"),
// smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
// scrollTop(value) {
//   return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// }, // we don't have to define a scrollLeft because we're only scrolling vertically.
// getBoundingClientRect() {
//   return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// },
// // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
// pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });

// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// }
// locogo();

gsap.to(document.querySelector("#page1 #hello"), {
  x: -100,
  duration: 0.5,
  ease: "power3",
  scrollTrigger: {
    trigger: "#main #page1",
    start: "top 10%",
    // markers: true,
    scrub: 0.8,
    scroller: "#main"
  }
});
gsap.to(document.querySelector("#page1 #hi"), {
  x: 100,
  duration: 0.5,
  ease: "power3",
  scrollTrigger: {
    trigger: "#main #page1",
    start: "top 10%",
    // markers: true,
    scrub: 0.8,
    scroller: "#main"
  }
});

// gsap.to("#page2 h1", {
//   transform:'translateX(-210%)',
//   scrollTrigger: {
//     trigger: "#page2",
//     markers:true,
//     start: "top 0%",
//     end:"top -100%",
//     scroller: "#main",
//     scrub: 5,
//     pin :true,
//     // pinSpacing: false, 
//   }
// });

gsap.from("#page3 #head p",{
  y:70,
  opacity:0.8,
  scale:0.9,
 
  
   scrollTrigger:{
    trigger:"#page3",
    start:"top 30%",
    end:"top -100%",
    // markers:"true",
    // pin:true,
    scroller:"#main",
    scrub:1,
  
  }
 
 })
 gsap.from("#page3 #photoslider",{
  y:"100%",
  // opacity:0.5,
  
   scrollTrigger:{
    trigger:"#page3",
    start:"top 160%",
    end:"top -100%",
    // markers:"true",
    scroller:"#main",
    // pin:true,
    // pinSpacing:false,
    // endtrigger:"#div",
    scrub:2,
  }
 
 })
//  gsap.from("#page3 #photoslider img ",{
//   y:"100%",
  
//    scrollTrigger:{
//     trigger:"#page3",
//     start:"top 0%",
//     end:"top -100%",
//     // markers:"true",
//     scroller:"#main",
//     pin:true,
//     scrub:2,
//   }
//  })

 gsap.to("#page3 #photoslider img ",{
  
  y:"-300%",
   scrollTrigger:{
    trigger:"#page3 ",
    start:"top 0%",
    end:"top -100%",
    // markers:"true",
    scroller:"#main",
    pin:true,
    endtrigger:".div",
    scrub:1,
  }
 })

 function overlay(){
  var page4 =document.querySelector("#page4");

  document.querySelector("#overlay2 h1").addEventListener("mouseenter",function(){
    gsap.to("#overlay",{
       scaleY:0,
       ease:'power1.inOut',
       duration:0.8,
       transformOrigin: "top"
     })
  })
  
  var h1= document.querySelector("#overlay2 h1")
  h1.addEventListener("mouseleave",function(){
    gsap.to("#overlay",{
       scaleY:1,   ease:'power1.inOut',  duration:0.8,
       transformOrigin: "top"
     })
  })
  
  
  document.querySelector("#ho").addEventListener("mouseenter",function(){

    gsap.to("#overlay",{
       scaleY:0,   ease:'power1.inOut',  duration:0.8,
       transformOrigin: "top"
     })
  })
  
  var h1= document.querySelector("#ho")
  h1.addEventListener("mouseleave",function(){
    gsap.to("#overlay",{
       scaleY:1,   ease:'power1.inOut',  duration:0.8,
       transformOrigin: "top"
     })
  })
  
  
  document.querySelector("#ok").addEventListener("mouseenter",function(){
 
    gsap.to("#overlay",{
       scaleY:0,   ease:'power1.inOut',  duration:0.8,
       transformOrigin: "top"
     })
  })
  
  var h1= document.querySelector("#ok")
  h1.addEventListener("mouseleave",function(){
    gsap.to("#overlay",{
       scaleY:1,   ease:'power1.inOut',  duration:0.8,
       transformOrigin: "top"
     })
  })
  


 }
overlay();
 