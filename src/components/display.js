const Display = () => {
  return (
    <div className='display w-[80vw] h-48 absolute -top-24 left-1/2 -translate-x-1/2 z-1000 bg-white rounded-xl'>
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
