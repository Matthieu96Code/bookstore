import { useSelector } from 'react-redux';
import AddBook from './Addbook';
import Book from './Book';

const Home = () => {
  const { books } = useSelector((state) => state.books);

  return (
    <>
      <div className="book-list">
        {books.map((data) => (
          <Book key={data.item_id} data={data} />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default Home;
