import Display from '@/components/display';
import Hero from '@/components/hero';
import Map from '@/components/map';

export default function Home() {
  return (
    <div className='h-dvh flex flex-col'>
      <Hero />
      <main className='flex-1'>
        <Display />
        <Map />
      </main>
    </div>
  );
}
