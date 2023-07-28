"use client";

import React, { useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Button from "./Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm bg-white/10">
        <div className=" relative w-[400px] sm:w-[600px] lg:w-3/6 my-6 mx-auto lg:max-w-3xl lg:h-auto">
          {/* Content */}
          <div className="h-full lg:h-auto border-0 rounded-lg shadow-2xl relative flex flex-col w-full bg-[#0e1b25] outline-none focus:outline-none pb-8 sm:px-6">
            {/* Header */}
            <div className="flex items-center justify-between p-6 rounded-t">
              <h3 className="text-white text-3xl font-semibold">{title}</h3>

              <button
                onClick={handleClose}
                className="p-1 ml-auto border-0 text-white hover:opacity-70 transition"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="relative p-6 flex-auto">{body}</div>

            {/* Footer */}
            <div className="px-8">
              <Button
                disabled={disabled}
                label={actionLabel}
                secondary
                fullWidth
                large
                onClick={handleSubmit}
              />
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
