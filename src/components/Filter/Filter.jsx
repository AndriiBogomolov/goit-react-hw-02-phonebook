import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ value, onChange }) => (
  <div>
    <label className={css.filterLabel}>Find contacts by Name </label>
    <input type="text" value={value} onChange={onChange} placeholder=" " />
  </div>
);

Filter.propTypes = {
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;