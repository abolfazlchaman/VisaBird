import Main from '@/components/Main/Main';

import passportIMG from '../images/icons8-passport-100.png';
import passportWithVisaIMG from '../images/icons8-passport-with-visa-100.png';
import visaStampIMG from '../images/icons8-visa-stamp-100.png';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900"'>
      <Main className='flex-grow' />

      <footer className='w-full bg-gray-900 text-white py-6 mt-auto'>
        <div className='container mx-auto px-4 text-center text-sm font-mono'>
          <p className='mb-2'>
            Made by&nbsp;
            <a
              href='https://github.com/abolfazlchaman/visasponsors'
              className='font-bold text-blue-400 hover:underline'>
              Abolfazl Chaman
            </a>
            . Data provided by&nbsp;
            <a
              href='https://github.com/SiaExplains/visa-sponsorship-companies'
              className='font-bold text-blue-400 hover:underline'>
              Siavash Ghanbari
            </a>
            &nbsp;&&nbsp;
            <a
              href='https://github.com/SiaExplains/visa-sponsorship-companies#contributors'
              className='font-bold text-blue-400 hover:underline'>
              contributors
            </a>
          </p>
          <p className='mb-2'>
            Please feel free to contribute to the&nbsp;
            <a
              href='https://github.com/SiaExplains/visa-sponsorship-companies'
              className='font-bold text-blue-400 hover:underline'>
              Data
            </a>
            &nbsp;or&nbsp;
            <a
              href='https://github.com/abolfazlchaman/visasponsors'
              className='font-bold text-blue-400 hover:underline'>
              Website
            </a>
          </p>
          <p className='mb-2'>
            Icons by{' '}
            <a
              href='https://icons8.com'
              className='text-blue-400 hover:underline'>
              Icons8
            </a>
          </p>
          <p className='mt-4 text-xs text-gray-400'>
            © {new Date().getFullYear()} Visabird — All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
