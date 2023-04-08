import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getBooks, sendBooks } from '../redux/books/booksSlice';

const AddBook = () => {
  const [titleValue, setTitleValue] = useState();
  const [authorValue, setAuthorValue] = useState();
  const [bookCategory, setbookCategory] = useState();
  const dispatch = useDispatch();

  const onSubmit = async (event) => {
    event.preventDefault();
    await dispatch(sendBooks({
      item_id: `item${uuidv4()}`,
      title: titleValue,
      author: authorValue,
      category: bookCategory,
    }));
    await dispatch(getBooks());
    setTitleValue('');
    setAuthorValue('');
  };

  return (
    <div className="addbook-section">
      <h2 className="addbook-title">
        ADD NEW BOOK
      </h2>
      <form onSubmit={onSubmit} className="addbook-form">
        <input value={titleValue} onChange={(event) => setTitleValue(event.target.value)} type="text" placeholder="Book title" required />
        <input value={authorValue} onChange={(event) => setAuthorValue(event.target.value)} type="text" placeholder="Book author" required />
        <select
          value={bookCategory}
          onChange={(event) => setbookCategory(event.target.value)}
          required
        >
          <option className="select-title" value="" hidden>Category</option>
          <option className="select-choice" value="Action">Action</option>
          <option className="select-choice" value="Science Fiction">Science Fiction</option>
          <option className="select-choice" value="Economy">Economy</option>
          <option className="select-choice" value="Finance">Finance</option>
          <option className="select-choice" value="Other">Other</option>
        </select>
        <button type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default AddBook;
