import PropTypes from 'prop-types';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const Checkbox = ({ text, checked, click }) => {
  return (
    <button 
        className="checkbox-button" 
        onClick={() => {click}}
        style= {{
            alignItems: 'left',
            padding: '7px',
        }}>
      {checked ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
      <span className="checkbox-label" style={{ paddingLeft: '0.2em' }}>{text}</span>
    </button>
  );
};

Checkbox.propTypes = {
  text: PropTypes.string.isRequired, // Defines 'label' as a required string
  checked: PropTypes.bool, // Defines 'checked' as a required boolean
  click: PropTypes.func, // Defines 'click' as a required function
};

export default Checkbox;