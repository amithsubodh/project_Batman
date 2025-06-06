import { useContext } from 'react';
import {CharDataContext} from '../data/CharContextData';

const Characters = () => {
  // Correct variable name
  const { coreCharacters } = useContext(CharDataContext);
  if (!coreCharacters) {
    return <p>Loading...</p>; 
  }

  return (
<div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  text-white'>
  {coreCharacters.map((i, n) => (
    <div 
      key={n} 
      className='flex flex-col justify-around m-5 p-5 bg-black font-inter md:tracking-wider tracking-tight font-lighter border-[0.5px] border-gray-500 rounded-xl h-lvh'
    >
      <img src={i.image} className='mb-4 w-ful h-[50vh] border-[0.5px] border-gray-50' />
      <p className='mb-2 pb-2 border-b border-gray-500'>
        <span className='md:text-lg font-semibold'>Name</span>: {i.name}
      </p>
      <p className='mb-2 pb-2 border-b border-gray-500'>
        <span className='md:text-lg font-semibold'>Abilities</span>: {i.abilities.join(", ")}
      </p>
      <p className='mb-2 pb-2 border-b border-gray-500'>
        <span className='md:text-lg font-semibold'>Iconic Quotes</span>: {i.iconicQuotes.join(" / ")}
      </p>
      <p className='mb-2'>
        <span className='md:text-lg font-semibold'>Alias</span>: {i.alias}
      </p>
    </div>
  ))}
</div>

  );
};

export default Characters;


