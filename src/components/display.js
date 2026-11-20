const Display = () => {
  return (
    <div className='display w-[80vw] h-40 absolute -top-24 left-1/2 -translate-x-1/2 z-1000 bg-white rounded-xl flex justify-between pt-7 pl-7'>
      <div className='displaySections flex-1'>
        <div className='displayTitles uppercase text-gray-400 text-sm'>
          Ip Address
        </div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2'>
          146.75.146.41
        </div>
      </div>
      <div className='displaySections flex-1 relative'>
        <div className='absolute left-0 top-13 h-18.75 w-px -translate-y-1/2 bg-gray-400/50' />
        <div className='displayTitles uppercase text-gray-400 text-sm pl-4'>
          Location
        </div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2 pl-4'>
          Buena Park, CA
        </div>
      </div>
      <div className='displaySections flex-1 relative'>
        <div className='absolute left-0 top-13 h-18.75 w-px -translate-y-1/2 bg-gray-400/50' />
        <div className='displayTitles uppercase text-gray-400 text-sm pl-4'>
          Timezone
        </div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2 pl-4'>
          UTC -08:00
        </div>
      </div>
      <div className='displaySections flex-1 relative'>
        <div className='absolute left-0 top-13 h-18.75 w-px -translate-y-1/2 bg-gray-400/50' />
        <div className='displayTitles uppercase text-gray-400 text-sm pl-4'>
          ISP
        </div>
        <div className='displayContent text-gray-950 text-2xl font-semibold pt-2 pl-4'>
          Comcast
        </div>
      </div>
    </div>
  );
};

export default Display;
