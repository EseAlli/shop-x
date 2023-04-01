import Modal from "@components/Modal";
import React, { FC, ReactNode, useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

type AuthProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Auth: FC<AuthProps> = ({ isOpen, onClose }) => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Log in">
        <div>
          <div className="flex my-5  w-2/3 mx-auto">
            <p
              className={
                tabIndex === 1
                  ? "hover:cursor-pointer w-1/2 text-center  text-xs py-2 px-4 font-bold border-2 border-black text-black"
                  : "hover:cursor-pointer w-1/2 text-center text-xs py-2 px-4 border-2 border-gray-400 border-r-0 rounded- text-gray-400"
              }
              onClick={() => setTabIndex(1)}
            >
              Register
            </p>
            <p
              className={
                tabIndex === 2
                  ? "hover:cursor-pointer w-1/2 text-center  text-xs py-2 px-4 font-bold border-2 border-black text-black"
                  : "hover:cursor-pointer w-1/2 text-center text-xs py-2 px-4 border-2 border-l-0 border-zinc-400 text-gray-400"
              }
              onClick={() => setTabIndex(2)}
            >
              Log in
            </p>
          </div>
          {tabIndex === 1 ? <SignupForm /> : <LoginForm />}
        </div>
      </Modal>
    </>
  );
};

export default Auth;
