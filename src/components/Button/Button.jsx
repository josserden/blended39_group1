import PropTypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button type="button" className="button" onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  onClick: () => null,
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
