import React from 'react';
import PropTypes from 'prop-types';
import { NotificationParag } from './Notification.styles';

const Notification = ({ message }) => {
  return <NotificationParag>{message} </NotificationParag>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
