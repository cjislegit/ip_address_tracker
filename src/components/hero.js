import heroImage from '@/assets/pattern-bg-desktop.png';
import arrowIcon from '@/assets/icon-arrow.svg';

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className='hero flex flex-col pt-10
       text-2xl bg-cover h-[30vh]'
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1 className='self-center text-white font-medium text-4xl'>
        IP Address Tracker
      </h1>
      <div className='self-center bg-white rounded-md w-140 h-14 flex items-center justify-between'>
        <input type='text' placeholder='Search for any IP address or domain' />
        <button className='bg-black text-white h-full rounded-r-md px-6'>
          <Image src={arrowIcon.src} alt='arrow icon' width={11} height={14} />
        </button>
      </div>
    </section>
  );
}
