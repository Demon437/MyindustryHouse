// import React, { useState } from "react";

// function WaitlistForm() {
//     const [form, setForm] = useState({ email: "", company: "" });
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const [submitted, setSubmitted] = useState(false);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         if (!form.email || !form.company) {
//             alert("Please fill all fields.");
//             return;
//         }

//         setIsSubmitting(true);

//         // yaha baad me real API call laga sakte ho
//         setTimeout(() => {
//             setIsSubmitting(false);
//             setSubmitted(true);
//             setForm({ email: "", company: "" });
//         }, 1200);
//     };

//     if (submitted) {
//         return (
//             <div className="lp-form-card lp-success-state">
//                 <div className="lp-confetti">🎉</div>
//                 <h2>You're in! 🚀</h2>
//                 <p>
//                     Welcome aboard! You’re officially on the early access list.
//                     <br />
//                     We’ll email you as soon as your invite is ready.
//                 </p>
//                 <button
//                     type="button"
//                     className="lp-secondary-btn"
//                     onClick={() => setSubmitted(false)}
//                 >
//                     Add another company
//                 </button>
//             </div>
//         );
//     }

//     return (
//         <div className="lp-form-card">
//             <h2 className="lp-form-title">Join the Founding Users list</h2>
//             <p className="lp-form-subtitle">
//                 Get VIP access before the public launch. No spam, ever.
//             </p>

//             <form onSubmit={handleSubmit} className="lp-form">
//                 <div className="lp-input-group">
//                     <label htmlFor="email">Work email</label>
//                     <input
//                         id="email"
//                         name="email"
//                         type="email"
//                         placeholder="you@company.com"
//                         value={form.email}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <div className="lp-input-group">
//                     <label htmlFor="company">Company name</label>
//                     <input
//                         id="company"
//                         name="company"
//                         type="text"
//                         placeholder="Your company"
//                         value={form.company}
//                         onChange={handleChange}
//                     />
//                 </div>

//                 <button
//                     type="submit"
//                     className="lp-submit-btn"
//                     disabled={isSubmitting}
//                 >
//                     {isSubmitting ? "Requesting access..." : "Request Early Access"}
//                 </button>

//                 <p className="lp-form-footnote">
//                     You’ll wish you got in earlier. We’ll notify you before anyone else.
//                 </p>
//             </form>
//         </div>
//     );
// }

// export default WaitlistForm;
