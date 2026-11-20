import Display from '@/components/display';
import Hero from '@/components/hero';
import Map from '@/components/map';

export default function Home() {
  return (
    <div className='h-dvh flex flex-col'>
      <Hero />
      <main className='flex-1 relative'>
        <Display
          ip='146.75.146.41'
          location='Brea, CA'
          timezone='UTC -08:00'
          isp='Comcast'
        />
        <Map lat={34.0522} lng={-118.2437} />
      </main>
    </div>
  );
}
