
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function circlemousefollower (){
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
        
    })

}
function firstpageanimation (){
    var tl = gsap.timeline();
    
    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:2,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        duration:2,
        ease: Expo.easeInOut,
        delay:-1,
        stagger:.2,
        
    })
    .from(".homefooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut,        
    })
}
circlemousefollower ();
firstpageanimation();

document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrotate = 0;
    elem.addEventListener("mouseleave",function(dets){

        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
            duration: 0.5

        });
    });
    elem.addEventListener("mousemove",function(dets){
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20,20, diffrotate* 0.5)
        });
    });
    
})