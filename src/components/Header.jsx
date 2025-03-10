import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const currentUser = null; // Replace with actual user state/context

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Search for:', searchTerm);
    // Implement search logic here
  };

  return (
    <header className='bg-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Urban</span>
            <span className='text-slate-700'>Roots</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className='bg-slate-100 p-3 rounded-lg flex items-center'
        >
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type='submit'>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          {currentUser ? (
            <Link to='/profile'>
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            </Link>
          ) : (
            <Link to='/sign-in'>
              <li className='text-slate-700 hover:underline'>Sign in</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
}
