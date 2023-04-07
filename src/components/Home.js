import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getBooks } from '../redux/books/booksSlice';
import AddBook from './Addbook';
import Book from './Book';

const Home = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [bookList, setBookList] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getBooks());
      } catch (error) {
        throw new Error(`Error fetching books: ${error.message}`);
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (Array.isArray(books)) {
      setBookList(
        <div className="book-list">
          {books.map((data) => (
            <Book
              key={Object.keys(data)[0]}
              data={Object.values(data)[0][0]}
              id={Object.keys(data)[0]}
            />
          ))}
        </div>,
      );
    } else if (!isLoading) {
      setBookList(<p>No books found.</p>);
    }
  }, [books, isLoading]);

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
        <AddBook />
      </>
    );
  }

  return (
    <>
      {bookList}
      <h1>Book list empty</h1>
      <AddBook />
    </>
  );
};

export default Home;
