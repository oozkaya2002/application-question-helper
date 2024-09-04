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
            <button
              type="button"
              onClick={() => removeQuestion(index)}
              className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md shadow-sm
                hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-red-500"
            >
              Remove
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={addQuestion}
        className="mt-2 inline-flex items-center px-3 py-2 border text-sm leading-4 font-medium
          rounded-md shadow-sm text-primary-foreground bg-primary
          hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2
          focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Question
      </button>
    </div>
  );
};

export default QuestionsInput;
