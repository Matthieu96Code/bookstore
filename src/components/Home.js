import AddBook from './Addbook';
import Book from './Book';

const Home = () => {
  const data = {
    title: 'Hello',
    author: 'Matthieu',
    chapter: 'Chapitre 4',
    completed: 14,
  };

  console.log(data);

  return (
    <>
      <Book data={data} />
      <AddBook />
    </>
  );
};

export default Home;
