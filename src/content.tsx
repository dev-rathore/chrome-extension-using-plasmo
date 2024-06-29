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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const extensionButtonRef = useRef<HTMLDivElement>(null);
  const inputElementRef = useRef<HTMLDivElement | null>(null);

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
    const intervalId = setInterval(() => {
      if (!inputElementRef?.current) {
        const inputElement = document.querySelector(".msg-form__contenteditable");
        inputElementRef.current = inputElement as HTMLDivElement;
        extensionButtonRef.current!.onclick = openModal;
        inputElementRef?.current?.parentElement.appendChild(extensionButtonRef.current!);
      } else {
        clearInterval(intervalId);
      }
    }, 500);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="w-full relative">
      <div
        className={"flex z-50 w-10 h-10 bg-white shadow-lg justify-center items-center absolute bottom-4 right-4 rounded-full cursor-pointer"}
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
