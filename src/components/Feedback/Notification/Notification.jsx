import React from 'react';
import css from 'components/Feedback/feedback.module.css';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className={css.text}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
