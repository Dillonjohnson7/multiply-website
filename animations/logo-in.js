// Animation: Sable logo fades up, then the scroll arrow appears
const tl = gsap.timeline();

tl.fromTo("#heroLogo", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" });

// scroll arrow fades in after logo animation completes
tl.to("#scrollArrow", { opacity: 1, duration: 0.6, ease: "power1.out", onComplete: function() {
  document.getElementById('scrollArrow').classList.add('visible');
}}, "+=0.5");

// click arrow to scroll to next section
document.getElementById('scrollArrow').addEventListener('click', function() {
  document.querySelector('.story').scrollIntoView({ behavior: 'smooth' });
});
