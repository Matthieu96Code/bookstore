import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { removeBooks, getBooks } from '../redux/books/booksSlice';
// import Records from '../records.json';

const Book = ({ data, id }) => {
  const dispatch = useDispatch();
  const { category, title, author } = data;

  const handleRemoveBook = async () => {
    await dispatch(removeBooks(id));
    await dispatch(getBooks());
  };
  return (
    <section className="book-card">
      <div className="book-info">
        <h1>{category}</h1>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <div className="book-action-button">
          <button type="button">Comments</button>
          <div className="bar-verti" />
          <button
            type="button"
            onClick={handleRemoveBook}
          >
            Remove
          </button>
          <div className="bar-verti" />
          <button type="button">Edit</button>
        </div>
      </div>

      <div className="book-progress">
        <AiOutlineLoading3Quarters className="progress-bar" size="4rem" color="#0290ff" />
        {/* <img src="./img/progress.png" alt="circular progress" /> */}
        {/* <div className="inner">
          {
            Records && Records.map((record) => (
              <div className="box" key={record.id}>
                <img src={record.icon} alt={record.caption} />
              </div>
            ))
          }
        </div> */}
        <div className="progress-text">
          <p className="percent-complete">
            {Math.floor(Math.random(100) * 100)}
            %
          </p>
          <p className="complete">Completed</p>
        </div>
      </div>
      <div className="bar-verti2" />
      <div className="book-status">
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
    progress: PropTypes.number.isRequired,
  }).isRequired,
};

export default Book;
