import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../SharedPage/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  // if (!user.emailVerified) {
  //   return (
  //     <div className="text-center flex justify-center items-center h-[70vh]">
  //       <div>
  //         <h3 className="text-2xl font-semibold">
  //           Your Email is not verified!!
  //         </h3>
  //         <h5 className="text-2xl mb-5 font-semibold">
  //           Please Verify your email address
  //         </h5>
  //         <span className="text-xl font-semibold text-gray-600">
  //           Clik here{" "}
  //           <button
  //             className="text-blue-500"
  //             onClick={async () => {
  //               await sendEmailVerification();
  //               if (sending) {
  //                 toast("We Sent a email");
  //               }
  //               if (error) {
  //                 console.log(error);
  //                 toast("maybe try many time or Something went wrong");
  //               }
  //             }}
  //           >
  //             Send a verification email again
  //           </button>
  //         </span>
  //       </div>
  //       <ToastContainer />
  //     </div>
  //   );
  // }

  return children;
};

export default RequireAuth;
