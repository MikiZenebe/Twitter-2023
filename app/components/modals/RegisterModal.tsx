"use client";

import { useCallback, useState } from "react";
import useLoginModel from "@/app/hooks/useLoginModal";
import Input from "../Input";
import Modal from "../Modal";
import useRegisterModel from "@/app/hooks/useRegisterModal";

const RegisterModal = () => {
  const loginModal = useLoginModel();
  const registerModal = useRegisterModel();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLodaing, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLodaing) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLodaing, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      //TODO ADD REGISTER AND LOGIN

      registerModal.onClose();
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
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLodaing}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
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
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline ml-1"
        >
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disabled={isLodaing}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
