import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBooks, getBooks } from '../redux/books/booksSlice';

const Book = ({ data, id }) => {
  const dispatch = useDispatch();
  const { category, title, author } = data;

  const handleRemoveBook = async () => {
    await dispatch(removeBooks(id));
    await dispatch(getBooks());
  };
  return (
    <section className="book-card">
      <div>
        <h1>{category}</h1>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div>
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>

      <div>
        <p>0%</p>
        <p>Completed</p>
      </div>

      <div>
        <h3>CURRENT CHAPTER</h3>
        <p>Chapter I</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </section>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
