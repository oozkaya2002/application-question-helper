interface SubmitButtonProps {
  buttonText: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ buttonText }) => {
  return (
    <button
      type="submit"
      className="w-full inline-flex items-center justify-center px-4 py-2 border
        text-primary-foreground bg-primary text-sm font-medium rounded-md shadow-sm
        hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2
        focus:ring-offset-2 focus:ring-indigo-500"
    >
      {buttonText}
    </button>
  );
};

export default SubmitButton;
