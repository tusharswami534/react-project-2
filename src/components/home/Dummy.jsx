import React from 'react'
import { useSearchParams } from 'react-router'
import { CARDS_LIST } from '../../utils/helper'
const Cards = () => {

const [searchParams, setSearchParams] = useSearchParams()
const handleClick = (index, card) => {
setSearchParams({ card: card.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() });
}
  return (
    <>
    <div className='container row row-gap-4  mx-auto'>
      <h2 className='text-center fw-bold'>Cards</h2>
        {CARDS_LIST.map((card, i) => (
           <div className='col-lg-4 col-md-6 col-sm-12' key={i}>
 <div onClick={() => handleClick(i, card.heading)} className={`card px-2 ${searchParams.get('card') === card.heading.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() ? 'bg-black  ' : ''}`}>
                <h2 className={`text-center cursor-pointer ${searchParams.get('card') === card.heading.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() ? 'text-white' : ''}`}>{card.heading}</h2>
                <p className={`text-center cursor-pointer ${searchParams.get('card') === card.heading.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase() ? 'text-white' : ''}`}>{card.description}</p>
            </div>
           </div>
        ))}
    </div>
   </>
  )
}

export default Cards