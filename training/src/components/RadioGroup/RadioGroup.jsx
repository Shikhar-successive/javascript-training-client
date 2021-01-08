import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends Component {
  render() {
    const {
      onChange, options, value, onBlur, error,
    } = this.props;
    // console.log(options[0]);
    return (
      <>
        <div>
          {
            // eslint-disable-next-line max-len
            // <input type="radio" name="sportRole" id="role" value={options[0].value} onChange={onChange} />
            // <label htmlFor={options[0].label}>
            //   {' '}
            //   {options[0].value}
            // </label>
            options.map((item) => (
              <div key={item.value}>
                <input type="radio" name="sportRole" id={item.label} onChange={onChange} value={item.value} checked={value === item.value} onBlur={onBlur} />
                <label htmlFor={item.label}>{item.value}</label>
              </div>
            ))
          }
        </div>
        {
          error && (<div style={{ color: 'red' }}>{error}</div>)
        }
      </>
    );
  }
}
RadioGroup.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

RadioGroup.defaultProps = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.instanceOf(Array),
  onBlur: PropTypes.func,
  error: PropTypes.string,
};
export default RadioGroup;
