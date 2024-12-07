import PropTypes from 'prop-types';
import { MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from 'react-icons/md';

const Checkbox = ({ text, checked, onClick }) => {
  return (
    <button 
        className="checkbox-button" 
        onClick={onClick}
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
  label: PropTypes.string.isRequired, // Defines 'label' as a required string
  checked: PropTypes.bool.isRequired, // Defines 'checked' as a required boolean
  onClick: PropTypes.func.isRequired, // Defines 'onClick' as a required function
};

export default Checkbox;