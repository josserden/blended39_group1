import PropTypes from 'prop-types';

export const Text = ({ children }) => <h1 className="text">{children}</h1>;

Text.propTypes = {
  children: PropTypes.string.isRequired,
};
