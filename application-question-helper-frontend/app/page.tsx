"use client";

import { useState, useEffect, useRef } from "react";

const Home = () => {
  const [linkedinURL, setLinkedinURL] = useState("");
  const [jobPostingURL, setJobPostingURL] = useState("");
  const [aboutPageURL, setAboutPageURL] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");
  const [questions, setQuestions] = useState([""]);
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);
  const [resume, setResume] = useState<File | null>(null);

  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDarkMode(storedTheme === "dark");
    } else {
      const systemDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(systemDarkMode);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode !== null) {
      // Only apply if isDarkMode has been set
      const root = window.document.documentElement;
      if (isDarkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  if (isDarkMode === null) {
    // Center the loading text
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium dark:text-white">Loading...</p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkedinURL && !resume) {
      alert(
        "Please provide at least one experience input: LinkedIn URL or resume/CV."
      );
      return;
    }

    if (!jobPostingURL || !aboutPageURL) {
      alert("Please provide job posting URL and company about page URL.");
      return;
    }

    if (resume && resume.size > 1024 * 1024) {
      alert("File size must be less than 5MB.");
      return;
    }

    if (
      resume &&
      !["application/pdf", "application/msword"].includes(resume.type)
    ) {
      alert("Invalid file type. Please upload a PDF or Word document.");
      return;
    }

    const payload = {
      linkedinURL,
      jobPostingURL,
      aboutPageURL,
      questions,
    };
    // Send payload to backend API (will be implemented later)
    // const response = await fetch('/api/submit', { method: 'POST', body: JSON.stringify(payload) });
    // Handle response
  };

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

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setResume(file);
  };

  const removeResume = () => {
    setResume(null);
    if (resumeInputRef.current) {
      resumeInputRef.current.value = ""; // Clear the file input
    }
  };

  return (
    <div className="container mx-auto p-4 px-40">
      <button
        onClick={toggleDarkMode}
        className="mb-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Toggle {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Supplemental Questions Assistant
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Experience Inputs */}
        <div>
          <h2 className="py-1.5">
            <span className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Experience Input
            </span>
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              Please provide at least one experience input: LinkedIn URL or
              resume/CV.
            </span>
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              LinkedIn URL:
            </label>
            <input
              type="url"
              value={linkedinURL}
              onChange={(e) => setLinkedinURL(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Upload Resume/CV:
            </label>
            <input
              ref={resumeInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleResumeUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            />
            {resume && (
              <div className="mt-2 flex items-center space-x-2">
                <button
                  type="button"
                  onClick={removeResume}
                  className="px-2 py-1 text-xs font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <h2 className="py-1.5">
            <span className="block text-lg font-medium text-gray-700 dark:text-gray-300">
              Job Posting Information
            </span>
            <span className="block text-sm text-gray-500 dark:text-gray-400">
              Provide information about the job posting and company.
            </span>
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Job Posting URL:
            </label>
            <input
              type="url"
              value={jobPostingURL}
              onChange={(e) => setJobPostingURL(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Company About Page URL:
            </label>
            <input
              type="url"
              value={aboutPageURL}
              onChange={(e) => setAboutPageURL(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Additional Context (optional):
            </label>
            <textarea
              value={additionalContext}
              onChange={(e) => setAdditionalContext(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
              rows={4}
              placeholder="Provide any additional context or information that might help..."
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Questions:
            </label>
            {questions.map((question, index) => (
              <div key={index} className="flex space-x-2 items-center">
                <input
                  type="text"
                  value={question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  required
                />
                {questions.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeQuestion(index)}
                    className="px-3 py-2 text-sm font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addQuestion}
              className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add Question
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Answers
        </button>
      </form>
    </div>
  );
};

export default Home;
