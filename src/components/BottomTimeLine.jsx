import React from 'react'
import { Timeline } from 'antd';

export default function BottomTimeLine() {
  return (
   <>
   <h2 className='font-semibold pb-5' >Activity Overview</h2>
     <Timeline
    items={[
      {
        children: <span className='text-gray-500'>Create a services site 2015-09-01</span>,
      },
      {
        children: <span className='text-gray-500'>Solve initial network problems 2015-09-01</span>,
      },
      {
        children: <span  className='text-gray-500'>Technical testing 2015-09-01</span>,
      },
      {
        children: <span className='text-gray-500'>Network problems being solved 2015-09-01</span>,
      },
    ]}
  />
   </>
  )
}
