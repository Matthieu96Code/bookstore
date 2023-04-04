import { useState } from 'react';

const AddBook = () => {
  const [titleValue, setTitleValue] = useState();
  const [authorValue, setAuthorValue] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
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
