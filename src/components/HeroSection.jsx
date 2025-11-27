// import React, { useEffect, useState } from "react";
// import WaitlistForm from "./WaitlistForm";

// function HeroSection() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: "00",
//     hours: "00",
//     minutes: "00",
//     seconds: "00",
//   });

//   useEffect(() => {
//     const targetDate = new Date("2025-12-31T23:59:59");

//     const timer = setInterval(() => {
//       const now = new Date();
//       const diff = targetDate - now;

//       if (diff <= 0) {
//         clearInterval(timer);
//         setTimeLeft({
//           days: "00",
//           hours: "00",
//           minutes: "00",
//           seconds: "00",
//         });
//         return;
//       }

//       const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(
//         2,
//         "0"
//       );
//       const hours = String(
//         Math.floor((diff / (1000 * 60 * 60)) % 24)
//       ).padStart(2, "0");
//       const minutes = String(
//         Math.floor((diff / (1000 * 60)) % 60)
//       ).padStart(2, "0");
//       const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

//       setTimeLeft({ days, hours, minutes, seconds });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <section id="hero" className="lp2-hero">
//       <div className="lp2-hero-inner">
//         {/* LEFT SIDE */}
//         <div className="lp2-hero-left">
//           <div className="lp2-pill-row">
//             <span className="lp2-pill lp2-pill-green">
//               Early access · Invite only
//             </span>
//             <span className="lp2-pill">B2B app · Coming soon</span>
//           </div>

//           <h1 className="lp2-hero-title">
//             The operating system
//             <br />
//             for modern{" "}
//             <span className="lp2-hero-highlight">
//               B2B teams<span className="lp2-dot">.</span>
//             </span>
//           </h1>

//           <p className="lp2-hero-subtitle">
//             Stop stitching tools together. FlowB2B connects your CRM, billing,
//             support and ops into one clean view so work actually moves.
//           </p>

//           <ul className="lp2-hero-points">
//             <li>Automate handoffs between teams, no custom scripts.</li>
//             <li>See every deal, ticket and task in one shared timeline.</li>
//             <li>Join as a founding user and shape what we ship.</li>
//           </ul>

//           <div className="lp2-countdown-strip">
//             <span className="lp2-countdown-label">Beta invites closing in</span>
//             <div className="lp2-countdown-values">
//               <TimeBox label="Days" value={timeLeft.days} />
//               <TimeBox label="Hours" value={timeLeft.hours} />
//               <TimeBox label="Min" value={timeLeft.minutes} />
//               <TimeBox label="Sec" value={timeLeft.seconds} />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE – FORM */}
//         <div className="lp2-hero-right">
//           <WaitlistForm />
//         </div>
//       </div>
//     </section>
//   );
// }


// function TimeBox({ label, value }) {
//     return (
//         <div className="lp-timebox">
//             <div className="lp-timebox-value">{value}</div>
//             <div className="lp-timebox-label">{label}</div>
//         </div>
//     );
// }

// export default HeroSection;
