import React from 'react';
import { useSearchParams } from 'react-router-dom';

const TabTestTwo = () => {
  const CARD_LIST = [
    { heading: 'Card One', content: 'This is card one content', button: 'Click me' },
    { heading: 'Card Two', content: 'This is card Two content', button: 'Click me' },
    { heading: 'Card Three', content: 'This is card Three content', button: 'Click me' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (_, card) => {
    setSearchParams({ card: card.toLowerCase().replace(/ /g, '-') });
  }
  const card = searchParams.get('card');

  return (
    <div className='min-h-screen flex items-center justify-center gap-6 flex-col'>
        <div className='max-w-[1440px] w-full flex '>
            {CARD_LIST.map((card, i) => (
                <div className='w-4/12 px-3' key={i}>
                    <div className='card flex justify-center items-center flex-col py-10 rounded-md bg-black'>
                        <h2 className='text-center cursor-pointer text-white'>{card.heading}</h2>
                        <p className='text-center cursor-pointer my-5 text-white'>{card.content}</p>
                        <button onClick={() => handleClick(i, card.heading)} className={`py-2 px-3 rounded-md bg-white ${card.button === card ? 'text-black bg-white' : ''}`}>{card.button}</button>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default TabTestTwo;
