import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import 'typeface-open-sans';

import DismissIcon from './assets/dismiss.svg';
import './styles.css';

const alertBannerClasses = props =>
  cn('AlertBanner', {
    [`AlertBanner--${props.status}`]: props.status,
  });

const AlertBanner = props => (
  <div className={alertBannerClasses(props)} role="alert">
    <p className="AlertBanner-text">{props.text}</p>

    {props.dismissible && (
      <button
        className="AlertBanner-dismiss"
        type="button"
        data-dismiss="alert"
        aria-label="Close"
        onClick={props.onClick}
      >
        <svg className="AlertBanner-dismiss-icon">
          <use xlinkHref={`${DismissIcon}#dismiss`} />
        </svg>
      </button>
    )}
  </div>
);

AlertBanner.propTypes = {
  status: PropTypes.oneOf(['error', 'warning', 'success', 'info']),
  text: PropTypes.string.isRequired,
  dismissible: PropTypes.bool,
  onClick: PropTypes.func,
};

AlertBanner.defaultProps = {
  status: 'error',
  dismissible: false,
  onClick: () => {},
};

export default AlertBanner;
