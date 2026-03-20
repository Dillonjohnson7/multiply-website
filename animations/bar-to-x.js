// Animation: full-width bar (arm height) shrinks → bar spins 240° → second arm appears
const barW  = document.documentElement.clientWidth;
const barH  = Math.round(Math.max(barW * 0.085, window.innerHeight * 0.09));
const xSize = Math.round(barH * 1.5);
const armW  = Math.round(xSize * 0.85);
const armH  = Math.round(xSize * 0.30);   // same height as the X arms

document.getElementById('xLogo').style.width  = xSize + 'px';
document.getElementById('xLogo').style.height = xSize + 'px';
document.querySelector('.logo-stage').style.height = Math.round(barH * 2.5) + 'px';

// bar at full width, armH height — same thickness as one X arm
gsap.set("#xSquare", { opacity: 1, width: barW, height: armH, borderRadius: 2, transformOrigin: "center center" });
// xLogo: arm1 visible, arm2 hidden, whole logo starts at -240° for the spin
// arm1 starts horizontal (xLogo at -45° cancels the SVG g's rotate(45))
gsap.set("#xLogo",  { opacity: 0, rotate: -45, transformOrigin: "center center" });
gsap.set("#xArm1",  { scaleX: 1, transformOrigin: "50% 50%" });
gsap.set("#xArm2",  { scaleY: 0, transformOrigin: "50% 50%" });

const tl = gsap.timeline();

// bar shrinks width only — height stays armH
tl.to("#xSquare", { width: armW, duration: 0.8, ease: "expo.out" });

// instant swap: xSquare off, xLogo on — same position, feels like the same element
tl.set("#xSquare", { opacity: 0 }, "+=0.05");
tl.set("#xLogo",   { opacity: 1 });
// now spin 270° from where the bar was
tl.to("#xLogo",   { rotation: "+=315", duration: 0.78, ease: "power2.out" });

// second arm draws in during the spin
tl.to("#xArm2",   { scaleY: 1, duration: 0.32, ease: "back.out(1.7)" }, "-=0.4");
