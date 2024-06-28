import { useState } from "react";

import PromptStep from "./prompt-step";
import InsertStep from "./insert-step";

const Modal = ({
  onClose,
  onInsert,
}) => {
  const [promptInput, setPromptInput] = useState<string>("");
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [generatedText, setGeneratedText] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [isResponseLoading, setIsResponseLoading] = useState<boolean>(false);

  const handlePromptInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromptInput(e.target.value);
  }

  const handleGenerate = () => {
    try {
      setIsResponseLoading(true);
      if (!promptInput) {
        alert("Please enter a prompt.");
        setIsResponseLoading(false);
        return;
      }
      setPromptInput("");
      setPrompt(promptInput);
      setPrompt("Generate a follow-up message for your interview.");
      setGeneratedText("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
      setIsGenerated(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsResponseLoading(false);
    }
  }

  const handleInsert = () => {
    onInsert(generatedText);
    onClose();
  };

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center text-2xl"
    >
      <div className="absolute z-0 top-0 bottom-0 left-0 right-0 bg-black/30" onClick={onClose} />
      <div
        className="z-10 w-full md:w-1/2 lg:w-1/3 flex flex-col p-6 rounded-lg gap-4 bg-[#F9FAFB] shadow-lg pointer-events-auto"
      >
        {!isGenerated &&
          <PromptStep
            handleGenerate={handleGenerate}
            handlePromptInputChange={handlePromptInputChange}
            promptInput={promptInput}
          />
        }
        {
          isGenerated && !isResponseLoading &&
          <InsertStep
            generatedText={generatedText}
            handleInsert={handleInsert}
            handlePromptInputChange={handlePromptInputChange}
            prompt={prompt}
            promptInput={promptInput}
          />
        } 
      </div>
    </div>
  );
};

export default Modal;
