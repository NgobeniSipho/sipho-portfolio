import React from 'react'

function WorkItem({year,title,duration,details}) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 bordeer-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inlene-block px-2 py-1 font-semibold text-white bg-[#00749b] rounded-md' >{year}</span>
                <span className='text-lg font-semibold text-[#00749b]'>{title}</span>
                <span className='mu-1 text-sm font-normal leading-none text-stone-400'>{duration}</span>
                
                <p className='my-2 text-base font-normal text-stone-500'>{details}</p>
            </p>
        </li>
    </ol>
  )
}

export default WorkItem
