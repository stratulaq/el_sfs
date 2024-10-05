import { useState } from 'react';

function Type({item}) {

  return (
    <div className='flex flex-col mb-[0px]'>                
        <div className='flex items-center gap-1'>
            <img src={item.icon} alt='Logo' className='h-[10px] mt-3'/> 
            <span className=''>{item.title_ro} <small>{item.type_ro !== '' && item.type_ro}</small></span>
        </div>
        <div className='flex flex-col  leading-1 items-start'>
            <span className='text-[10px]'>{item.title_ru} <small>{item.type_ro !== '' && item.type_ro}</small></span>
        </div>
    </div>
  );
}

export default Type;
