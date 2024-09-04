"use client";

import { useState } from "react";
import ExperienceInput from "@/components/experience-input";
import JobPostingInformation from "@/components/job-posting-input";
import Questions from "@/components/questions-input";
import SubmitButton from "@/components/submit-button";
import { ThemeModeToggle } from "@/components/theme-mode-toggle";
import { ThemeColorToggle } from "@/components/theme-color-toggle";

const Home = () => {
  const [linkedinURL, setLinkedinURL] = useState("");
  const [jobPostingURL, setJobPostingURL] = useState("");
  const [aboutPageURL, setAboutPageURL] = useState("");
  const [additionalContext, setAdditionalContext] = useState("");
  const [questions, setQuestions] = useState([""]);
  const [resume, setResume] = useState<File | null>(null);
  const [resumeName, setResumeName] = useState("");
  const [buttonText, setButtonText] = useState("Generate Answers");

  const handleSubmit = async (e: React.FormEvent) => {
    setButtonText("Generating...");
    e.preventDefault();
    if (!linkedinURL && !resume) {
      alert(
        "Please provide at least one experience input: LinkedIn URL or resume/CV.",
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

    setButtonText("Generated");
  };

  return (
    <div className="container mx-auto p-4 px-40">
      <div className="flex justify-end mb-4">
        <ThemeColorToggle />
        <ThemeModeToggle />
      </div>
      <h1 className="text-3xl font-bold mb-6">
        Supplemental Questions Assistant
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <ExperienceInput
          linkedinURL={linkedinURL}
          setLinkedinURL={setLinkedinURL}
          resume={resume}
          setResume={setResume}
          resumeName={resumeName}
          setResumeName={setResumeName}
        />
        <JobPostingInformation
          jobPostingURL={jobPostingURL}
          setJobPostingURL={setJobPostingURL}
          aboutPageURL={aboutPageURL}
          setAboutPageURL={setAboutPageURL}
          additionalContext={additionalContext}
          setAdditionalContext={setAdditionalContext}
        />
        <Questions questions={questions} setQuestions={setQuestions} />
        <SubmitButton buttonText={buttonText} />
      </form>
    </div>
  );
};

export default Home;
