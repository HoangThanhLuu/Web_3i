import React, { useLayoutEffect, useState, useEffect } from 'react'




const BnTest = () => {


  const [width, setWidth] = useState(3);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 994) {
        setWidth(3);
      } else if (window.innerWidth >= 575) {
        setWidth(2);
      } else {
        setWidth(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const renderItems = () => {
    const items = [1, 2, 3, 4, 5, 6, 5, 6]; // Tạo mảng với 6 phần tử
    const result = [];
    for (let i = 0; i < items.length; i += width) {
      const group = items.slice(i, i + width); // Lấy group phần tử theo width
      result.push(
        <div key={i} className='text-red-600 flex flex-col'>
          <div>
            {group.map((item, index) => (
              <React.Fragment key={index}>
                {item}
              </React.Fragment>
            ))}
          </div>
          <div>££</div>
        </div>
      );
    }
    return result;
  };
  return (
    <div className='w-full'>
      <div className='container'>{renderItems()}</div>
    </div>
  )
}

export default BnTest