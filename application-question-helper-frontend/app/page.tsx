const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <header className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4 dark:text-white">
          Welcome to JobAssist
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Simplifying your job application process.
        </p>
        <button
          className="mt-6 px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-md shadow-md
            hover:bg-indigo-700"
        >
          Get Started
        </button>
      </header>
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-6 dark:text-white text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">
              Cover Letter Generator
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Create personalized cover letters effortlessly.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">
              Supplemental Questions Assistant
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Answer supplemental questions with ease.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4 dark:text-white">
              Resume Analyzer
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Optimize your resume for each job application.
            </p>
          </div>
        </div>
      </section>
      <footer className="py-6 text-center text-gray-600 dark:text-gray-300">
        <p>&copy; 2024 JobAssist. All rights reserved.</p>
        <div className="mt-4">
          <a
            href="#"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Privacy Policy
          </a>
          <span className="mx-2">|</span>
          <a
            href="#"
            className="text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
