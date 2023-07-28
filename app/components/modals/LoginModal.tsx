"use client";

import { useCallback, useState } from "react";
import useLoginModel from "@/app/hooks/useLoginModal";
import useRegisterModel from "@/app/hooks/useRegisterModal";
import Input from "../Input";
import Modal from "../Modal";

const LoginModal = () => {
  const loginModal = useLoginModel();
  const registerModal = useRegisterModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLodaing, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLodaing) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLodaing, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      //TODO ADD LOGIN

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [loginModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLodaing}
      />

      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLodaing}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Don't have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline ml-1"
        >
          Create an account
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLodaing}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in"
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
