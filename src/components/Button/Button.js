import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, onClick, disabled = 'false' }) => {
    return (
        <button className="btnLoadMore" type="button" onClick={onClick}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onLoadClick: PropTypes.func,
};

export default Button;
