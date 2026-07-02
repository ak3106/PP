// import { getFirestore, collection, addDoc } from "firebase/firestore";

// const db = getFirestore();

// export const triggerWelcomeEmail = async (
//   userEmail,
//   userDisplayName,
// ) => {
//   try {
//     await addDoc(collection(db, "mail"), {
//       to: userEmail,
//       message: {
//         subject: "Welcome to the PragyaPrint Family! 🎨📓",
//         html: `
//           <div style="font-family:sans-serif;color:#333;max-width:600px;margin:0 auto;line-height:1.6;">
//             <h2>Hey ${userDisplayName || "Print Lover"}, welcome aboard!</h2>
//             <p>Your official account for <strong>pragyaprint.com</strong> is active.</p>
//             <p>Get ready to elevate your creative workspace.</p>
//             <p>Use code <strong>FIRST10</strong> for 10% OFF your first order.</p>
//           </div>
//         `,
//       },
//     });

//     console.log("Welcome email queued successfully.");
//   } catch (err) {
//     console.error(err);
//   }
// };