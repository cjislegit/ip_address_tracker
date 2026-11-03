import heroImage from '@/assets/pattern-bg-desktop.png';

export default function Hero() {
  return (
    <section
      className='hero flex flex-col justify-center pt-8 text-2xl'
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      <h1 className='self-center text-(--light-background)'>
        IP Address Tracker
      </h1>
      <div className='self-center'>
        <input type='text' placeholder='Search for any IP address or domain' />
        <button>Search</button>
      </div>
    </section>
  );
}
