export function HowItWorks() {
  const steps = [
    {
      icon: 'fa-search',
      title: '1. Search',
      description:
        'Browse our extensive database of international job listings with visa sponsorship.',
    },
    {
      icon: 'fa-filter',
      title: '2. Filter',
      description:
        'Use our advanced filters to narrow down opportunities by country, visa status, industry, and more.',
    },
    {
      icon: 'fa-rocket',
      title: '3. Apply',
      description:
        'Easily access direct links to company career pages and apply for your desired positions.',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Your Path to a Global Career in 3 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Start your journey to an international career with our straightforward process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
            >
              <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <i className={`fas ${step.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#search"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <i className="fas fa-search-plus mr-2"></i>
            Start Your Global Career Search
          </a>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
            Join thousands of professionals who found their dream jobs abroad
          </p>
        </div>
      </div>
    </section>
  );
}
