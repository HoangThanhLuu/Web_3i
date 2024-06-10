"use client";
import { useState, useEffect, useCallback } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Common/Button";

interface ModalProps {
    id?: string;
    className?: string;
    isOpen?: boolean;
    onClose: () => void;
    onSubmit?: () => void;
    title?: string;
    body?: React.ReactElement;
    attachments?: React.ReactElement;
    footer?: React.ReactElement;
    actionLabel?: string;
    disabled?: boolean;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
    modalWidth?: string;
}

const Modal: React.FC<ModalProps> = ({
    id,
    className,
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    attachments,
    footer,
    actionLabel,
    disabled,
    secondaryAction,
    secondaryActionLabel,
    modalWidth
}) => {
    const [showModal, setShowModal] = useState(isOpen);
    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    if (showModal === true) {
        document.querySelector('body').classList.add('ModalOpen');
    }

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        setShowModal(false);
        document.querySelector('body').classList.remove('ModalOpen');
        setTimeout(() => {
            onClose();
        }, 300)
    }, [disabled, onClose]);

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return;
        }

        onSubmit();
    }, [disabled, onSubmit]);

    const handleSecondaryAction = useCallback(() => {
        if (disabled || !secondaryAction) {
            return;
        }

        secondaryAction();
    }, [disabled, secondaryAction]);

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div id={`modal-${id}`}
                className={`${className ? className + ' ' : ''} modal justify-center items-center flex fixed inset-0 outline-none focus:outline-none bg-black bg-opacity-50 !z-[9999]
                ${showModal ? "opacity-100 visible" : "opacity-0 hidden"}
            `}>
                <div className={`relative w-5/6 my-6 mx-auto h-auto lg:h-auto md:h-auto
                    ${modalWidth ? modalWidth : "md:w-4/6 lg:w-3/6 xl:w-2/5"} 
                `}>
                    <button
                        title="Close"
                        onClick={handleClose}
                        className="p-1 hover:opacity-70 transition-all absolute top-[-10px] right-[-10px] bg-[green] text-white rounded-full z-10 border-[1px] border-white"
                    >
                        <IoMdClose size={16} />
                    </button>
                    <div
                        className={`transition-all duration-300 ease-in w-full h-full animate-fadeInDown rounded-[10px] overflow-hidden
                            ${showModal ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
                        `}>
                        <div className="translate w-full h-full lg:h-auto md:h-auto border-0 shadow-lg relative flex flex-col bg-white outline-none focus:outline-none max-h-[95vh] overflow-y-auto">
                            <div className="flex items-center p-6 justify-center border-b-[1px] border-b-[#f5f5f5]">
                                <h2 className="text-lg font-medium text-[24px]">{title}</h2>
                            </div>
                            <div className="relative p-6 flex-auto">{body}</div>
                            {attachments}
                            {actionLabel || (secondaryActionLabel && secondaryActionLabel) &&
                                <div className="flex flex-col gap-2 p-6">
                                    <div className="flex flex-row items-center gap-4 w-full">
                                        {handleSecondaryAction && secondaryActionLabel && (
                                            <Button
                                                disabled={disabled}
                                                label={secondaryActionLabel}
                                                onClick={handleSecondaryAction}
                                            />
                                        )}
                                        <Button
                                            disabled={disabled}
                                            label={actionLabel}
                                            onClick={handleSubmit}
                                        />
                                    </div>
                                </div>
                            }
                            {footer}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Modal;