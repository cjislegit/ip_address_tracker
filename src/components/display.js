const Display = () => {
  return (
    <div className='display w-[80vw] h-40 absolute -top-24 left-1/2 -translate-x-1/2 z-1000 bg-white rounded-xl flex justify-between pt-7 pl-7'>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase text-gray-400 text-sm'>
          Ip Address
        </div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2 border-r border-gray-400'>
          146.75.146.41
        </div>
      </div>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase text-gray-400 text-sm'>
          Location
        </div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2'>
          Buena Park, CA
        </div>
      </div>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase text-gray-400 text-sm'>
          Timezone
        </div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2'>
          UTC -08:00
        </div>
      </div>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase text-gray-400 text-sm'>ISP</div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2'>
          Comcast
        </div>
      </div>
    </div>
  );
};

export default Display;
