import React from 'react'
import { useSearchParams } from 'react-router-dom'

const QueryParams = () => {
    const [, setParams] = useSearchParams();
    return (
        <div className='min-h-screen flex items-center justify-center gap-6'>
            <button onClick={() => setParams ({name:'one', id:'1'})} className='py-6 px-16 rounded-md text-3xl text-black border-black border-solid border'>One</button>
            <button onClick={() => setParams({ name: 'two', id: '2' })} className='py-6 px-16 rounded-md text-3xl text-black border-black border-solid border'>Two</button>
            <button onClick={() => setParams({ name: 'three', id: '3' })} className='py-6 px-16 rounded-md text-3xl text-black border-black border-solid border'>Three</button>
        </div>
    )
}

export default QueryParams