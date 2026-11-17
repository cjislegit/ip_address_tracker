const Display = () => {
  return (
    <div className='display w-[80vw] h-48 absolute -top-24 left-1/2 -translate-x-1/2 z-1000 bg-white rounded-xl flex justify-between pt-7 pl-7'>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase'>Ip Address</div>
        <div className='displayContent'>146.75.146.41</div>
      </div>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase'>Location</div>
        <div className='displayContent'>Buena Park, CA</div>
      </div>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase'>Timezone</div>
        <div className='displayContent'>-08:00</div>
      </div>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase'>ISP</div>
        <div className='displayContent'>Comcast</div>
      </div>
    </div>
  );
};

export default Display;
