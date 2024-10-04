import { useRef } from "react";
import { Button } from "@/components/ui/button"; // Assuming this is the path to the ShadcnUI Button component

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
          <Button
            onClick={() => resumeInputRef.current?.click()}
            className="px-4 py-2 text-sm"
          >
            Choose File
          </Button>
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
            <Button
              onClick={removeResume}
              variant="destructive"
              className="px-2 py-1 text-xs"
            >
              Remove
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceInput;
