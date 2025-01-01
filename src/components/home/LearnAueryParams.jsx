import React from 'react';
import {  useSearchParams } from 'react-router-dom';
import TabsTest from './TabsTest';

const LearnAueryParams = () => {
  // const { id } = useParams();
  // const [data, setData] = useState();
  const [searchParams, setSearchParams] = useSearchParams(1);


  const LIST = [
    { id: 1, name: 'Tushar' },
    { id: 2, name: 'Ajay' },
    { id: 3, name: 'Deepak' },
    { id: 4, name: 'Swami' },
  ];

  const handleClick = (name) => {
    setSearchParams({ name });
  };

  const name = searchParams.get('name');
  return (
    <>
      <div>
        {LIST.map((obj, i) => (
          <div key={i}>
            <p className={` cursor-pointer  ${name === obj.name ? 'bg-red-500 text-white' : ''}`} onClick={() => handleClick(obj.name)}>{obj.name}</p>
          </div>
        ))}
      </div>
      {name && <p>You clicked: {name}</p>}
      <TabsTest/>
    </>
  );
};

export default LearnAueryParams;