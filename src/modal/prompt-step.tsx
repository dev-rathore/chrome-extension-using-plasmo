import Button from "~components/button"
import Input from "~components/input"

import GenerateIcon from "~assets/generate-icon.svg"

interface PromptStepProps {
  handleGenerate: () => void;
  handlePromptInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  promptInput: string;
}

const PromptStep:React.FC<PromptStepProps> = ({
  handleGenerate,
  handlePromptInputChange,
  promptInput,
}) => {
  return (
    <>
      <Input
        placeholder="Your prompt"
        value={promptInput}
        onChange={handlePromptInputChange}
      />
      <div className="w-full flex justify-end">
        <Button
          onClick={handleGenerate}
        >
          <img
            src={GenerateIcon}
            alt="generate-icon"
            className="text-white w-5 h-5"
          />
          Generate
        </Button>
      </div>
    </>
  )
}

export default PromptStep;
