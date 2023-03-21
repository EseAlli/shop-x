import Modal from "@components/Modal";
import React, { FC, ReactNode, useState } from "react";
import LoginForm from "./LoginForm";

type AuthProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Auth: FC<AuthProps> = ({ isOpen, onClose }) => {
  const [tabIndex, setTabIndex] = useState(1);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} title="Log In">
        <div>
          <div className="flex justify-center my-5">
            <p className="hover:cursor-pointer" onClick={() => setTabIndex(1)}>
              Register
            </p>
            <p className="hover:cursor-pointer" onClick={() => setTabIndex(2)}>
              Log in
            </p>
          </div>
          {tabIndex === 1 ? <LoginForm /> : <LoginForm />}
        </div>
      </Modal>
    </>
  );
};

export default Auth;
