import { Button } from "@/components/ui/button";
interface QuestionsInputProps {
  questions: string[];
  setQuestions: (questions: string[]) => void;
}

const QuestionsInput: React.FC<QuestionsInputProps> = ({
  questions,
  setQuestions,
}) => {
  const handleQuestionChange = (index: number, value: string) => {
    const newQuestions = [...questions];
    newQuestions[index] = value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, ""]);
  };

  const removeQuestion = (index: number) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  return (
    <div>
      <label className="block text-sm font-medium">Questions:</label>
      {questions.map((question, index) => (
        <div key={index} className="flex space-x-2 items-center">
          <input
            type="text"
            value={question}
            onChange={(e) => handleQuestionChange(index, e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
          {questions.length > 1 && (
            <Button
              variant="destructive"
              onClick={() => removeQuestion(index)}
              className="px-3 py-2"
            >
              Remove
            </Button>
          )}
        </div>
      ))}
      <Button
        variant="default"
        onClick={addQuestion}
        className="px-3 py-2 mt-2"
      >
        Add Question
      </Button>
    </div>
  );
};

export default QuestionsInput;
