// "use client";

// import { useEffect, useRef } from "react";

// interface Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   radius: number;
//   alpha: number;
// }

// const PARTICLE_COUNT = 120;
// const MAX_DISTANCE = 120;

// export default function FloatingParticles() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;

//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");

//     if (!ctx) return;

//     let width = window.innerWidth;
//     let height = window.innerHeight;

//     canvas.width = width;
//     canvas.height = height;

//     const mouse = {
//       x: width / 2,
//       y: height / 2,
//     };

//     const particles: Particle[] = [];

//     for (let i = 0; i < PARTICLE_COUNT; i++) {
//       particles.push({
//         x: Math.random() * width,
//         y: Math.random() * height,
//         vx: (Math.random() - 0.5) * 0.4,
//         vy: (Math.random() - 0.5) * 0.4,
//         radius: Math.random() * 2 + 1,
//         alpha: Math.random() * 0.5 + 0.2,
//       });
//     }

//     function drawParticle(p: Particle) {
//       ctx.beginPath();

//       ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

//       ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;

//       ctx.fill();
//     }

//     function drawConnections() {
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;

//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < MAX_DISTANCE) {
//             ctx.beginPath();

//             ctx.moveTo(particles[i].x, particles[i].y);

//             ctx.lineTo(particles[j].x, particles[j].y);

//             ctx.strokeStyle = `rgba(255,255,255,${
//               (1 - dist / MAX_DISTANCE) * 0.08
//             })`;

//             ctx.lineWidth = 1;

//             ctx.stroke();
//           }
//         }
//       }
//     }

//     function animate() {
//       ctx.clearRect(0, 0, width, height);

//       particles.forEach((p) => {
//         p.x += p.vx;
//         p.y += p.vy;

//         if (p.x < 0 || p.x > width) p.vx *= -1;

//         if (p.y < 0 || p.y > height) p.vy *= -1;

//         const dx = mouse.x - p.x;
//         const dy = mouse.y - p.y;

//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 150) {
//           p.x -= dx * 0.002;
//           p.y -= dy * 0.002;
//         }

//         drawParticle(p);
//       });

//       drawConnections();

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const resize = () => {
//       width = window.innerWidth;
//       height = window.innerHeight;

//       canvas.width = width;
//       canvas.height = height;
//     };

//     const moveMouse = (e: MouseEvent) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//     };

//     window.addEventListener("resize", resize);
//     window.addEventListener("mousemove", moveMouse);

//     return () => {
//       window.removeEventListener("resize", resize);
//       window.removeEventListener("mousemove", moveMouse);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="
//       pointer-events-none
//       absolute
//       inset-0
//       z-[1]
//       h-full
//       w-full
//       opacity-70
//       "
//     />
//   );
// }