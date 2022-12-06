import React, { useState, useEffect } from 'react';

// import data
import { booksData } from '../../data';
import { booksNav } from '../../data';

// import components
import Book from './Book';

const Books = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [books, setBooks] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    // get projects based on item
    if (item.name === 'all') {
      setBooks(booksData);
    } else {
      const newBooks = booksData.filter((book) => {
        return book.category.toLowerCase() === item.name;
      });
      setBooks(newBooks);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* books nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {booksNav.map((item, index) => {
            return (
              <li
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${
                  active === index ? 'active' : ''
                } cursor-pointer capitalize m-4`}
                key={index}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Books */}
      <section className='grid gap-y-12 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8 '>
        {books.map((item) => {
          return <Book item={item} key={item.id} />;
        })}
      </section>
    </div>
  );
};

export default Books;
