// Animation: first arm draws in, then second arm, forming the X
const barH  = Math.round(Math.max(document.documentElement.clientWidth * 0.085, window.innerHeight * 0.09));
const xSize = Math.round(barH * 1.5);

document.getElementById('xLogo').style.width  = xSize + 'px';
document.getElementById('xLogo').style.height = xSize + 'px';
document.querySelector('.logo-stage').style.height = Math.round(barH * 2.5) + 'px';

gsap.set("#xLogo", { opacity: 1 });
gsap.set("#xArm1", { scaleX: 0, transformOrigin: "50% 50%" });
gsap.set("#xArm2", { scaleY: 0, transformOrigin: "50% 50%" });

const tl = gsap.timeline();
tl.to("#xArm1", { scaleX: 1, duration: 0.35, ease: "power3.out" });
tl.to("#xArm2", { scaleY: 1, duration: 0.35, ease: "back.out(1.7)" }, "+=0.08");
