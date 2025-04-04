// import { createContext, useEffect, useState } from "react";
// import { app } from "../firebase-config/firebase";
// import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// import axios from "axios";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const googleProvider = new GoogleAuthProvider();

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const Login = (email, password) => {
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     const LogOut = () => {
//         return signOut(auth);
//     };

//     const GoogleLogin = () => {
//         return signInWithPopup(auth, googleProvider);
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             if (currentUser) {
//                 axios.post(`http://localhost:5000/authentication`, { email: currentUser.email }).then((data) => {
//                     if (data.data) {
//                         localStorage.setItem('access-token', data?.data?.token);
//                         setLoading(false);

//                     }
//                 });
//             }else {
//                 localStorage.removeItem('access-token');
//                 setLoading(false);
//             }

//         })
//         return (() => {
//             unsubscribe();
//         });
//     }, []);

//     const authInfo = {
//         createUser,
//         Login,
//         LogOut,
//         GoogleLogin,
//         loading,
//         setLoading,
//         user
//     };
//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;