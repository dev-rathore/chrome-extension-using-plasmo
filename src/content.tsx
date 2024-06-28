import cssText from "data-text:~style.css"
import type { PlasmoCSConfig } from "plasmo"
import { useEffect, useRef, useState } from "react"

import "~style.css"

import ExtensionIcon from "~assets/extension-icon.svg";
import Modal from "~modal/modal";

export const config: PlasmoCSConfig = {
  matches: ["https://*.linkedin.com/*"]
}

export const getStyle = () => {
  const style = document.createElement("style")
  style.textContent = cssText
  return style
}

const PlasmoOverlay = () => {
  const extensionButtonRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  let formContainer: HTMLElement | null;

  const onClose = () => {
    setIsModalOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const onInsert = (text: string) => {
    const placeholderElement = document.querySelector(".msg-form__placeholder");
    placeholderElement?.classList.remove("msg-form__placeholder");
    const inputElement = document.querySelector(".msg-form__contenteditable p");
    inputElement.removeChild(inputElement.firstChild!);
    inputElement.appendChild(document.createTextNode(text));
  }

  useEffect(() => {
    formContainer = document.querySelector(".msg-form__contenteditable");

    if (formContainer && extensionButtonRef?.current) {
      extensionButtonRef.current!.onclick = openModal;
      formContainer.parentElement?.appendChild(extensionButtonRef.current!);
    }

    // return () => {
    //   document.removeEventListener("click", handleInteraction);
    // };
  }, [extensionButtonRef?.current]);

  formContainer?.addEventListener("focus", () => {
    if (extensionButtonRef?.current) {
      extensionButtonRef.current.style.display = "none";
    }
  });

  formContainer?.addEventListener("blur", () => {
    if (extensionButtonRef?.current) {
      extensionButtonRef.current.style.display = "flex";
    }
  });

  return (
    <div className="w-full relative">
      <div
        className="hidden z-50 w-10 h-10 bg-white shadow-lg justify-center items-center absolute bottom-4 right-4 rounded-full cursor-pointer"
        onClick={openModal}
        ref={extensionButtonRef}
      >
        <img
          alt="extension-icon"
          className="text-blue-500 w-5 h-5"
          src={ExtensionIcon}
        />
      </div>
      {isModalOpen && <Modal onClose={onClose} onInsert={onInsert}/>}
    </div>
  )
}

export default PlasmoOverlay
