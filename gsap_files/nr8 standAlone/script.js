gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: '.box',
    start: 'top 80%',
    end: "top 50%",
    markers: true,
    toggleClass: 'box-red',
    onUpdate: (self) => console.log(self),
    // onEnter: () => console.log('enter'),
    // onLeave: () => console.log('leave'),
    // onEnterBack: () => console.log('enterBack'),
    // onLeaveBack: () => console.log('leaveBack')
})