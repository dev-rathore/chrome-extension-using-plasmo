import Button, { Variant } from "~components/button"
import Input from "~components/input"

import InsertIcon from "~assets/insert-icon.svg"
import RegenerateIcon from "~assets/regenerate-icon.svg"

interface InsertStepProps {
  generatedText: string;
  handleInsert: () => void;
  handlePromptInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prompt: string;
  promptInput: string;
}

const InsertStep:React.FC<InsertStepProps> = ({
  generatedText,
  handleInsert,
  handlePromptInputChange,
  prompt,
  promptInput,
}) => {
  return (
    <>
      <div className="w-full flex flex-col gap-4">
        {
          prompt &&
          <div className="self-end w-9/12 bg-gray-200 text-gray-600 p-4 rounded-lg">
            {prompt}
          </div>
        }
        {
          generatedText &&
          <div className="self-start w-9/12 bg-[#DBEAFE] text-gray-600 p-4 rounded-lg">
            {generatedText}
          </div>
        }
      </div>
      <Input
        placeholder="Your prompt"
        value={promptInput}
        onChange={handlePromptInputChange}
      />
      <div className="w-full flex gap-4 justify-end">
        <Button onClick={handleInsert} variant={Variant.Secondary}>
          <img
            src={InsertIcon}
            alt="insert-icon"
            className="text-gray-500 w-5 h-5"
          />
          Insert
        </Button>
        <Button>
          <img
            src={RegenerateIcon}
            alt="regenerate-icon"
            className="text-white w-5 h-5"
          />
          Regenerate
        </Button>
      </div>
    </>
  )
};

export default InsertStep;
