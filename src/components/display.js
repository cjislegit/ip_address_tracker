const Display = () => {
  return (
    <div className='display w-[80vw] h-32 absolute -top-16 left-1/2 -translate-x-1/2 z-1000 bg-white'>
      <div className='displaySections'>
        <div className='displayTitles'></div>
        <div className='displayContent'></div>
      </div>
      <div className='displaySections'>
        <div className='displayTitles'></div>
        <div className='displayContent'></div>
      </div>
      <div className='displaySections'>
        <div className='displayTitles'></div>
        <div className='displayContent'></div>
      </div>
    </div>
  );
};

export default Display;
