const AddBook = () => (
  <div>
    <h2 className="addbook-title">
      ADD NEW BOOK
    </h2>
    <form className="addbook-fom">
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Book author" required />
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default AddBook;
