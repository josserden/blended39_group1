import React from 'react';
import PropTypes from 'prop-types';
import './Notification.css';

const Notification = ({ text }) => {
  return <h2 className="Notification">{text}</h2>;
};

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
