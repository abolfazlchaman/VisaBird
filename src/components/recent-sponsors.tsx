export function RecentSponsors() {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
        Recent Visa Sponsors
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Germany - Celonis */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 transition hover:transform hover:scale-105">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3" role="img" aria-label="Germany">
              🇩🇪
            </span>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">Celonis</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Consulting, Munich</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">
              Visa Sponsor
            </span>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium ml-2">
              Germany
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Celonis is a global leader in process mining and consulting, headquartered in Munich,
            Germany. They frequently sponsor skilled professionals for work visas.
          </p>
          <a
            href="https://www.linkedin.com/company/celonis/jobs/"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Jobs
          </a>
        </div>

        {/* Netherlands - ING */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 transition hover:transform hover:scale-105">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3" role="img" aria-label="Netherlands">
              🇳🇱
            </span>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">ING</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Banking, Amsterdam</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">
              Visa Sponsor
            </span>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium ml-2">
              Netherlands
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            ING is a major international bank based in Amsterdam, offering a wide range of financial
            services and sponsoring international talent for various roles.
          </p>
          <a
            href="https://www.linkedin.com/company/ing/jobs"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Jobs
          </a>
        </div>

        {/* Sweden - Klarna */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 transition hover:transform hover:scale-105">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3" role="img" aria-label="Sweden">
              🇸🇪
            </span>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">Klarna</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Software Development, Stockholm
              </p>
            </div>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">
              Visa Sponsor
            </span>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium ml-2">
              Sweden
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Klarna is a leading fintech company from Stockholm, Sweden, known for its innovative
            payment solutions and international work environment.
          </p>
          <a
            href="https://www.linkedin.com/company/klarna/jobs"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Jobs
          </a>
        </div>

        {/* Ireland - Ryan Air */}
        <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 transition hover:transform hover:scale-105">
          <div className="flex items-center mb-4">
            <span className="text-2xl mr-3" role="img" aria-label="Ireland">
              🇮🇪
            </span>
            <div>
              <h4 className="font-bold text-gray-800 dark:text-white">Ryan Air</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Aviation, Dublin</p>
            </div>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium">
              Visa Sponsor
            </span>
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium ml-2">
              Ireland
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Ryan Air is Europe's largest airline group, headquartered in Dublin, Ireland, and
            regularly sponsors skilled professionals for aviation roles.
          </p>
          <a
            href="https://www.linkedin.com/company/ryan-air-inc/jobs"
            className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Jobs
          </a>
        </div>
      </div>

      <div className="text-center mt-10">
        <a
          href="/jobs"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition"
        >
          View All Sponsors
        </a>
      </div>
    </div>
  );
}
