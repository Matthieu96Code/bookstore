import PropTypes from 'prop-types';

const Book = ({ data }) => (
  <section className="book-card">
    <div>
      <h1>{data.category}</h1>
      <h2>{data.title}</h2>
      <h3>{data.author}</h3>
      <div>
        <button type="button">Comments</button>
        <button type="button">Remove</button>
        <button type="button">Edit</button>
      </div>
    </div>

    <div>
      <p>
        {data.completed}
        %
      </p>
      <p>Completed</p>
    </div>

    <div>
      <h3>CURRENT CHAPTER</h3>
      <p>{data.chapter}</p>
      <button type="button">UPDATE PROGRESS</button>
    </div>
  </section>
);

Book.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    completed: PropTypes.number.isRequired,
    chapter: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
