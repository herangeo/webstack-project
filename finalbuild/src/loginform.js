// import React, { useEffect ,useState} from 'react';
// import { initializeApp } from 'firebase/app';
// import firebase from 'firebase';


// const LoginForm = () => {
//   const [uname, setUname] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [authenticated, setAuthenticated] = useState(false);

// //   useEffect(() => {
// //     firebase.initializeApp({
// //       apiKey: "AIzaSyAhs0g1RMoV3mBy9BpYMn-X3lq2dCOFT2M",
// //       authDomain: "video-streaming-platform-wsd.firebaseapp.com",
// //       projectId: "video-streaming-platform-wsd",
// //       storageBucket: "video-streaming-platform-wsd.appspot.com",
// //       messagingSenderId: "5217413066",
// //       appId: "1:5217413066:web:6948f726c5819edbf41133"
// //     });
// //   }, []);

//   const handleSubmit = async (e) => 
//     e.preventDefault();

//     try {
//       const database = firebase.database();
//       const credentialsRef = database.ref("user_credentials");

//       const snapshot = await credentialsRef.once("value");
//       let authenticated = false;

//       snapshot.forEach((childSnapshot) => {
//         const cred = childSnapshot.val();

//         if (uname === cred.uname && pwd === cred.pass) {
//           authenticated = true;
//           console.log(authenticated);
//           alert("Welcome Back, " + uname + "!");
//           window.location.href = "success.html";
//         }
//       });

//       if (!authenticated) {
//         alert("Invalid username or password. Please try again.");
//       }

//       setAuthenticated(authenticated);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="signin">
//       <div className="content">
//         <h2>Sign In</h2>
//         <div className="form">
//           <form onSubmit={handleSubmit}>
//             <div className="inputBox">
//               <input
//                 type="text"
//                 id="uname"
//                 name="username"
//                 value={uname}
//                 onChange={(e) => setUname(e.target.value)}
//                 required
//                 placeholder="Username"
//               />
//             </div>
//             <div className="inputBox">
//               <input
//                 type="password"
//                 id="pwd"
//                 name="password"
//                 value={pwd}
//                 onChange={(e) => setPwd(e.target.value)}
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="inputBox">
//               <button type="submit">Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;
