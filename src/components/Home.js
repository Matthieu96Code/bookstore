import AddBook from './Addbook';
import Book from './Book';

const Home = () => {
  const books = [
    {
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      completed: 64,
      chapter: 'Chapitre 17',
      id: 1,
    },
    {
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      completed: 8,
      chapter: 'Chapitre 3: "A Lesson Learned"',
      id: 2,
    },
    {
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      completed: 0,
      chapter: 'Introduction',
      id: 3,
    },
  ];

  return (
    <>
      <div className="book-list">
        {books.map((data) => (
          <Book key={data.id} data={data} />
        ))}
      </div>
      <AddBook />
    </>
  );
};

export default Home;
