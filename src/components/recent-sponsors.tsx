export function RecentSponsors() {
  return (
    <div className='mt-16'>
      <h3 className='text-2xl font-semibold text-gray-800 dark:text-white mb-6'>
        Recent Visa Sponsors
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Job Card 1 */}
        <div className='bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 transition hover:transform hover:scale-105'>
          <div className='flex items-center mb-4'>
            <div className='w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4'>
              <i className='fas fa-building text-blue-600 dark:text-blue-400 text-xl'></i>
            </div>
            <div>
              <h4 className='font-bold text-gray-800 dark:text-white'>Google</h4>
              <p className='text-gray-600 dark:text-gray-300 text-sm'>Technology</p>
            </div>
          </div>
          <div className='mb-4'>
            <span className='inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium'>
              Visa Sponsor
            </span>
            <span className='inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium ml-2'>
              UK, USA, Canada
            </span>
          </div>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            Google frequently sponsors work visas for software engineers, product managers, and data
            scientists across multiple countries.
          </p>
          <a
            href='#'
            className='text-indigo-600 dark:text-indigo-400 font-medium hover:underline'>
            View Details
          </a>
        </div>

        {/* Job Card 2 */}
        <div className='bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 transition hover:transform hover:scale-105'>
          <div className='flex items-center mb-4'>
            <div className='w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4'>
              <i className='fas fa-hospital text-blue-600 dark:text-blue-400 text-xl'></i>
            </div>
            <div>
              <h4 className='font-bold text-gray-800 dark:text-white'>NHS</h4>
              <p className='text-gray-600 dark:text-gray-300 text-sm'>Healthcare</p>
            </div>
          </div>
          <div className='mb-4'>
            <span className='inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium'>
              Visa Sponsor
            </span>
            <span className='inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium ml-2'>
              UK
            </span>
          </div>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            The UK National Health Service sponsors visas for doctors, nurses, and healthcare
            professionals through their shortage occupation list.
          </p>
          <a
            href='#'
            className='text-indigo-600 dark:text-indigo-400 font-medium hover:underline'>
            View Details
          </a>
        </div>

        {/* Job Card 3 */}
        <div className='bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 transition hover:transform hover:scale-105'>
          <div className='flex items-center mb-4'>
            <div className='w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4'>
              <i className='fas fa-university text-blue-600 dark:text-blue-400 text-xl'></i>
            </div>
            <div>
              <h4 className='font-bold text-gray-800 dark:text-white'>University of Toronto</h4>
              <p className='text-gray-600 dark:text-gray-300 text-sm'>Education</p>
            </div>
          </div>
          <div className='mb-4'>
            <span className='inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs px-2 py-1 rounded-full font-medium'>
              Visa Sponsor
            </span>
            <span className='inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-full font-medium ml-2'>
              Canada
            </span>
          </div>
          <p className='text-gray-600 dark:text-gray-300 mb-4'>
            This leading Canadian university sponsors visas for academic staff, researchers, and
            postdoctoral fellows in various disciplines.
          </p>
          <a
            href='#'
            className='text-indigo-600 dark:text-indigo-400 font-medium hover:underline'>
            View Details
          </a>
        </div>
      </div>

      <div className='text-center mt-10'>
        <a
          href='https://jobs.visabird.ir'
          className='inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition'>
          View All Sponsors
        </a>
      </div>
    </div>
  );
}
