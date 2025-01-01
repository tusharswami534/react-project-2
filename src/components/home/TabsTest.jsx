import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

const TabsTest = () => {
    const TABS_LIST = [
        {
            name  : 'Tab One',
            content : 'This is tab 1 content',
            domain : 'tab-one'
        },
        {
            name  : 'Tab Two',
            content : 'This is tab 2 content',
            domain : 'tab-two'
        },
        {
            name  : 'Tab Three',
            content : 'This is tab 3 content',
            domain : 'tab-three'
        },
        {
            name  : 'Tab Four',
            content : 'This is tab 4 content',
            domain : 'tab-four'
        },
    ]

    const [searchParams, setSearchParams] = useSearchParams();
    const handleClick = (index ,domain) => {
        setSearchParams({domain})
    }
    const domain = searchParams.get('domain');

  return (
    <div className='min-h-screen flex items-center justify-center gap-6 flex-col'>
        <div className='flex gap-4'>
        {TABS_LIST.map((tab, i) => (
          <button className={`py-2 px-4 border rounded-md ${domain === tab.domain ? 'bg-red-500 text-white' : ''}`} onClick={() => handleClick(i , tab.domain)} key={i}>{tab.name}</button>
        ))} 
        </div>
        <div  className=''>
            <div className='flex gap-4'>
            {TABS_LIST.map((tab, i) => (
                <div key={i} className={`border border-solid border-black p-4 ${domain === tab.domain ? 'bg-red-500 text-white' : ''}`}>{tab.content}</div>
            ))}
            </div>
        </div>
        <div className='flex gap-4'>
            <h1 className='border border-solid border-black p-4'>{Tushar}</h1>
        </div>
    </div>
  )
}

export default TabsTest
