import PropTypes from 'prop-types';

import css from './Field.css';

export default function Field(props) {
  const { elem, type, value, name, text } = props;
  let boi;
  switch (elem) {
    case 'input':
      boi = (
        <input
          className={
            type === 'checkbox' ? css.field__checkbox : css.field__input
          }
          type={type}
          name={type}
          value={value}
        />
      );
      break;
    case 'label':
      boi = (
        <label className={css.field__due} name={name}>
          {value}
        </label>
      );
      break;
    default:
      break;
  }

  return (
    <div className={css.field}>
      <label className={css.field__label} htmlFor={type}>
        {text}
      </label>
      {boi}
    </div>
  );
}

Field.propTypes = {
  type: PropTypes.String,
  stuff: PropTypes.String
};

Field.defaultProps = {};
