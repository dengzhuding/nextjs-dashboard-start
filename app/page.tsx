import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon, ArrowDownRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from './ui/fonts';
import Image from 'next/image'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-center md:items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
        <div className="flex-grow flex flex-row items-center justify-start text-2xl md:text-[44px]">
          <Link
            className={`${lusitana.className} rounded-md  ml-4 px-2 text-white leading-none hover:text-blue-500 hover:bg-white`}
            href="/dashboard"
          >
            <div className="flex flex-row items-center ">
              <span>Dashboard</span>
              <ArrowDownRightIcon className="ml-3 h-8 w-8 md:h-12 md:w-12" />
            </div>
          </Link>
          <Link
            className={ `${lusitana.className} rounded-md  ml-4 px-2 text-white leading-none hover:text-blue-500 hover:bg-white`}
            href="/other"
          >
            <div className="flex flex-row items-center ">
              <span>Other</span>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className={styles.shape}></div> */}
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}

          </p>
          <p className={lusitana.className}>
            Acme is a fictional company created for demonstration purposes. This
            dashboard template is designed to showcase the capabilities of Next.js
            and Tailwind CSS in building modern web applications.
          </p>
          
           <input type="text" name="email" autoComplete="email" className="" placeholder="Enter your email" />
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
            loading="eager"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
