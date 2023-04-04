import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
// import { checkStatus } from '../redux/categories/categoriesSlice';

const AddBook = () => {
  const [titleValue, setTitleValue] = useState();
  const [authorValue, setAuthorValue] = useState();
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({
      item_id: `item${uuidv4()}`,
      title: titleValue,
      author: authorValue,
    }));
    setTitleValue('');
    setAuthorValue('');
  };
  return (
    <div>
      <h2 className="addbook-title">
        ADD NEW BOOK
      </h2>
      <form onSubmit={onSubmit} className="addbook-fom">
        <input value={titleValue} onChange={(event) => setTitleValue(event.target.value)} type="text" placeholder="Book title" required />
        <input value={authorValue} onChange={(event) => setAuthorValue(event.target.value)} type="text" placeholder="Book author" required />
        <button type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
