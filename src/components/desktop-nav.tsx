export function DesktopNav() {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex space-x-6'>
        <li>
          <a
            href='#jobs'
            className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
            Jobs
          </a>
        </li>
        <li>
          <a
            href='#how-it-works'
            className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
            How it Works
          </a>
        </li>
        <li>
          <a
            href='#employers'
            className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
            For Employers
          </a>
        </li>
        <li>
          <a
            href='#contribute'
            className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
            Contribute
          </a>
        </li>
        <li>
          <a
            href='#about'
            className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
            About
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className='text-gray-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-indigo-400'>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
