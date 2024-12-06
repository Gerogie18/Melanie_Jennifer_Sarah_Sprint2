import PropTypes from 'prop-types'

const Button = ({text, click}) => {
    return (
        <button
            className="btn"
            onClick={click}
        >
            {text}
      </button>
    )
  }
  
  Button.propTypes = {
    text: PropTypes.string.isRequired,  // Defines 'text' as a required string
    click: PropTypes.func.isRequired    // Defines 'click' as a required function
  };

  export default Button

