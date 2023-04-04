import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <section className="book-card">
      <div>
        <h1>{data.category}</h1>
        <h2>{data.title}</h2>
        <h3>{data.author}</h3>
        <div>
          <button type="button">Comments</button>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(data.item_id));
            }}
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
  data: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
