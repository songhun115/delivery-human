gsap.registerPlugin(ScrollTrigger);

setTimeout(function () {
      // gsap.from(".animation_img1", {
      //   scrollTrigger: {
      //     trigger: "ani1",
      //     toggleActions: 'play play play play',
      //     markers:true
      //   },
      //   x: 800,
      //   delay:1,
      //   duration: 0.5
      // });

      gsap.from(".animation_img1", {
        scrollTrigger: {
          trigger: ".ani1",
          toggleActions:'play play play play'
        },
        stagger: {
          each: 0.1
        },
        delay:1,
        x: 800
      });

        gsap.to(".animation_img2", {
      scrollTrigger: {
        trigger: ".section3 > div >.section_box > .content_box > .content_text > .content_main_text1",
        toggleActions: 'play play play play',
        markers:true
      },
      y: 70,
      x:70,
      delay:1,
      duration: 0.5
    });

    gsap.from(".animation_img4", {
      scrollTrigger: {
        trigger: ".gsap44",
        toggleActions: 'play play play play',
        markers:true
      },
      y: 400,
      delay:1,
      duration: 0.5
    });
    
   
}, 500);


