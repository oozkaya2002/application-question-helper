import { Button } from "@/components/ui/button";
interface SubmitButtonProps {
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ buttonText }) => {
  return (
    <Button
      type="submit"
      className="w-full inline-flex items-center justify-center px-4 py-2"
    >
      {buttonText}
    </Button>
  );
};

export default SubmitButton;
