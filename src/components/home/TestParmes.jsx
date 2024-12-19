import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DATA_TABS = [
  { Button: 'Tab 1', domain: 'tab-1' },
  { Button: 'Tab 2', domain: 'tab-2' },
  { Button: 'Tab 3', domain: 'tab-3' },
];

const TestParmes = () => {
  const navigate = useNavigate();
  const { domain } = useParams();

  const handleClick = (index) => {
    navigate(`/${DATA_TABS[index].domain}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <div className="flex gap-4">
        {DATA_TABS.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className="py-2 px-4 border rounded-md"
          >
            {item.Button}
          </button>
        ))}
      </div>
      <div>
         <h1>Current Tab: {domain}</h1>
      </div>
    </div>
  );
};

export default TestParmes;
