import React, { useState, useEffect } from "react";
import { Logo } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

import { UserAuthInput } from "../components";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { signInWithGithub, signInWithGoogle } from "../utils/helpers";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";
import { FadeInOut } from "../animation";


const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [getEmailValidation, setGetEmailValidation] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertMess, setAlertMess] = useState("");

  useEffect(() => {
    if (alert) {
      const timeoutId = setTimeout(() => {
        setAlert(false);
      }, 4000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [alert]);

  const createNewUser = async() => {
    if (getEmailValidation) {
      try {
        const userCred = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCred);
      } catch (err) {
        console.error(err);
      }
    }  
  }

  const loginWithEmailPassword = async() => {
    if(getEmailValidation) {
      try {
        const userCred = await signInWithEmailAndPassword(auth, email, password);
        console.log(userCred);
      } 
      catch(err) {
        console.log(err.message);
        if(err.message.includes("user-not-found")){
          setAlert(true);
          setAlertMess("Invalid Id: User Not Found :(");
        }

        else if(err.message.includes("wrong-password")) {
          setAlert(true);
          setAlertMess("Password Mismatch :(")
        }
        else {
          setAlert(true);
          setAlertMess("Temporarily disabled due to many login failed 🫤")
        }

      }
    }
  }
 



  return (
    <div className="w-full py-8">
      <img
        src={Logo}
        className="object-contain w-32 opacity-50 h-auto"
        alt="logo"
      />

      <div className="w-full flex flex-col items-center justify-center py-8">
        <p className="py-12 text-2xl text-gray-400">Join With Us! 🤩</p>

        <div
          style={{ backgroundColor: "#1E1F26" }}
          className="px-8 w-full md:w-auto py-4 rounded-xl shadow-md flex flex-col items-center justify-center gap-8"
        >
          {/* email */}
          <UserAuthInput
            label="Email"
            placeHolder="Email"
            isPass={false}
            setStateFunction={setEmail}
            Icon={FaEnvelope}
            setGetEmailValidation={setGetEmailValidation}
          />

          {/* password */}
          <UserAuthInput
            label="Password"
            placeHolder="Password"
            isPass={true}
            setStateFunction={setPassword}
            Icon={MdPassword}
          />

          {/* alert section */}
          <AnimatePresence >
            {alert && (
              <motion.p
              key={"AlertMessage"}
              {...FadeInOut}
              className="text-red-500"
              >
                {alertMess}
              </motion.p>
            )}
          </AnimatePresence>

          {/* login button */}
          {!isLogin ? (
            <motion.div
              onClick={createNewUser}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 
                     rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-xl text-white">Sign Up</p>
            </motion.div>
          ) : (
            <motion.div
              onClick={loginWithEmailPassword}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-full py-3 
                    rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500"
            >
              <p className="text-xl text-white">Login</p>
            </motion.div>
          )}

          {/* account text section */}
          {!isLogin ? (
            <p className="text-sm text-gray-400 flex items-center justify-center gap-3">
              Alreay Have an account !{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer"
              >
                Login Here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-400 flex items-center justify-center gap-3">
              Doesn't Have an account !{" "}
              <span
                onClick={() => setIsLogin(!isLogin)}
                className="text-emerald-500 cursor-pointer"
              >
                Create Here
              </span>
            </p>
          )}

          {/* or section */}
          <div className="flex items-center justify-center gap-12">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
            <p className="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          </div>

          {/* sign in with google */}
          <motion.div
            onClick={signInWithGoogle}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl
                hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
          >
            <FcGoogle className="text-3xl" />
            <p className="text-xl text-white">Sign in with Google</p>
          </motion.div>

          {/* or section */}
          <div className="flex items-center justify-center gap-12">
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
            <p className="text-sm text-[rgba(256,256,256,0.2)]">OR</p>
            <div className="h-[1px] bg-[rgba(256,256,256,0.2)] rounded-md w-24"></div>
          </div>

          {/* sign in with github */}
          <motion.div
            onClick={signInWithGithub}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center gap-3 bg-[rgba(256,256,256,0.2)] backdrop-blur-md w-full py-3 rounded-xl
                hover:bg-[rgba(256,256,256,0.4)] cursor-pointer"
          >
            <FaGithub className="text-3xl text-white" />
            <p className="text-xl text-white">Sign in with Github</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
