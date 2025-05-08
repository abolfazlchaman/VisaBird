export function ForEmployers() {
  return (
    <section
      id='employers'
      className='py-20 bg-gray-50 dark:bg-gray-800'>
      <div className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8'>
          For Employers & Partners
        </h2>
        <p className='text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto'>
          Visabird offers a transparent and efficient way for companies to discover and connect with
          a global pool of skilled professionals. Highlight your commitment to international talent
          and streamline your hiring process.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12'>
          <div className='bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600'>
            <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center mb-6 mx-auto'>
              <i className='fas fa-users text-2xl'></i>
            </div>
            <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-3'>
              Global Talent Pool
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Access a diverse network of qualified professionals from around the world who are
              ready to contribute to your organization.
            </p>
          </div>
          <div className='bg-white dark:bg-gray-700 p-8 rounded-xl shadow-sm border border-gray-100 dark:border-gray-600'>
            <div className='w-16 h-16 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center mb-6 mx-auto'>
              <i className='fas fa-handshake text-2xl'></i>
            </div>
            <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-3'>
              Partnership Opportunities
            </h3>
            <p className='text-gray-600 dark:text-gray-300'>
              Join our network of employers and benefit from our platform's visibility and
              streamlined hiring process.
            </p>
          </div>
        </div>
        <a
          href='#contact'
          className='inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition'>
          Inquire About Partnership
        </a>
      </div>
    </section>
  );
}
