import heroImage from '@/assets/pattern-bg-desktop.png';

export default function Hero() {
  return (
    <section
      className='hero flex flex-col pt-10 text-2xl bg-cover h-[30vh]'
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1 className='self-center text-(--light-background) font-medium text-4xl'>
        IP Address Tracker
      </h1>
      <div className='self-center'>
        <input type='text' placeholder='Search for any IP address or domain' />
        <button>Search</button>
      </div>
    </section>
  );
}
