import './SVG.css';

import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  // url: PropTypes.any.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  tip: PropTypes.string,
  id: PropTypes.string,
};

const defaultProps = {
  className: '',
  onClick: null,
  onMouseOut: null,
  onMouseOver: null,
  tip: null,
  id: null,
};

/**
 *
 * @param {object} props
 * @param {any} props.url
 * @param {string} props.className
 * @param {any} props.onClick
 * @param {any} props.onMouseOut
 * @param {any} props.onMouseOver
 * @param {string} [props.tip]
 * @param {string} [pros.id]
 */
function SVG(props) {
  const { url, className, onClick, onMouseOut, onMouseOver, tip, id, dataFor, ...rest } = props;
  const SVGPath = url;
  return url ? (
    dataFor ? (
      <SVGPath
        title=""
        id={id}
        className={className}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        data-tip={tip}
        data-for={dataFor}
        {...rest}
      />
    ) : (
      <SVGPath
        title=""
        id={id}
        className={className}
        onClick={onClick}
        onMouseOut={onMouseOut}
        onMouseOver={onMouseOver}
        data-tip={tip}
        {...rest}
      />
    )
  ) : null;
}

SVG.propTypes = propTypes;
SVG.defaultProps = defaultProps;

export default SVG;
