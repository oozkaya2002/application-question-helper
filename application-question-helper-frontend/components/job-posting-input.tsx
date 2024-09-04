interface JobPostingInformationInputProps {
  jobPostingURL: string;
  setJobPostingURL: (url: string) => void;
  aboutPageURL: string;
  setAboutPageURL: (url: string) => void;
  additionalContext: string;
  setAdditionalContext: (context: string) => void;
}

const JobPostingInformationInput: React.FC<JobPostingInformationInputProps> = ({
  jobPostingURL,
  setJobPostingURL,
  aboutPageURL,
  setAboutPageURL,
  additionalContext,
  setAdditionalContext,
}) => {
  return (
    <div>
      <h2 className="py-1.5">
        <span className="block text-lg font-medium">
          Job Posting Information
        </span>
        <span className="block text-sm">
          Provide information about the job posting and company.
        </span>
      </h2>
      <div>
        <label className="block text-sm font-medium">Job Posting URL:</label>
        <input
          type="url"
          value={jobPostingURL}
          onChange={(e) => setJobPostingURL(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">
          Company About Page URL:
        </label>
        <input
          type="url"
          value={aboutPageURL}
          onChange={(e) => setAboutPageURL(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">
          Additional Context (optional):
        </label>
        <textarea
          value={additionalContext}
          onChange={(e) => setAdditionalContext(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-primary rounded-md shadow-sm
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          rows={4}
          placeholder="Provide any additional context or information that might help..."
        />
      </div>
    </div>
  );
};

export default JobPostingInformationInput;
