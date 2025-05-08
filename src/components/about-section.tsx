export function AboutSection() {
  return (
    <section
      id='about'
      className='py-20 bg-white dark:bg-gray-800'>
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4'>
              About VisaBird
            </h2>
            <p className='text-xl text-gray-600 dark:text-gray-300'>
              Our mission is to make global career opportunities accessible to everyone.
            </p>
          </div>

          <div className='prose max-w-none text-gray-600 dark:text-gray-300 mb-10'>
            <p>
              VisaBird was created to solve a common problem faced by international job seekers:
              finding companies that are willing to sponsor work visas can be incredibly difficult
              and time-consuming.
            </p>
            <p>
              Our platform aggregates data from multiple sources, including government records,
              company reports, and community contributions, to provide the most comprehensive
              database of visa-sponsoring companies available.
            </p>
            <p>
              We believe that talent should be able to flow freely across borders, and we're
              committed to making that process as transparent and straightforward as possible.
            </p>
          </div>

          <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-xl'>
            <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-4'>
              Contribute to VisaBird
            </h3>
            <p className='text-gray-600 dark:text-gray-300 mb-4'>
              VisaBird is an open project that welcomes contributions from developers and data
              enthusiasts.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <a
                href='https://github.com/visabird/data'
                className='bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center'>
                <i className='fab fa-github mr-2'></i> Data Repository
              </a>
              <a
                href='https://github.com/visabird/website'
                className='bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center justify-center'>
                <i className='fab fa-github mr-2'></i> Website Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
