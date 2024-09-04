import { useRef } from "react";

interface ExperienceInputProps {
  linkedinURL: string;
  setLinkedinURL: (url: string) => void;
  resume: File | null;
  setResume: (file: File | null) => void;
  resumeName: string;
  setResumeName: (name: string) => void;
}

const ExperienceInput: React.FC<ExperienceInputProps> = ({
  linkedinURL,
  setLinkedinURL,
  resume,
  setResume,
  resumeName,
  setResumeName,
}) => {
  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResume(file);
    setResumeName(file ? file.name : "");
  };

  const removeResume = () => {
    setResume(null);
    setResumeName("");
    if (resumeInputRef.current) {
      resumeInputRef.current.value = ""; // Clear the file input
    }
  };

  return (
    <div>
      <h2 className="py-1.5">
        <span className="block text-lg font-medium">Experience Input</span>
        <span className="block text-sm">
          Please provide at least one experience input: LinkedIn URL or
          resume/CV.
        </span>
      </h2>
      <div>
        <label className="block text-sm font-medium">LinkedIn URL:</label>
        <input
          type="url"
          value={linkedinURL}
          onChange={(e) => setLinkedinURL(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Upload Resume/CV:</label>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => resumeInputRef.current?.click()}
            className="px-4 py-2 text-sm font-medium text-primary-foreground bg-primary rounded-md
              shadow-sm border hover:bg-primary-foreground hover:text-primary
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Choose File
          </button>
          <span className="text-sm">{resumeName || "No file chosen"}</span>
        </div>
        <input
          ref={resumeInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeUpload}
          className="sr-only" // Hide the actual input
        />
        {resume && (
          <div className="mt-2">
            <button
              type="button"
              onClick={removeResume}
              className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-md shadow-sm
                hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-red-500"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceInput;
