import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomSnackBar from './SnackBar';

export const SnackbarContext = React.createContext(() => console.log('default'));

class SnackBarProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      message: '',
      variant: '',
    };
  }

  openSnackbar = (message, variant) => {
    // const { isOpen } = this.state;
    this.setState({
      isOpen: true,
      message,
      variant,
    });
    console.log('Snack open');
    console.log(variant);
  };

  closeSnackbar = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      message: '',
      isOpen: false,
    });
  };

  render() {
    const { children } = this.props;
    const { isOpen, message, variant } = this.state;

    return (
      <>
        <SnackbarContext.Provider value={this.openSnackbar}>
          {children}
        </SnackbarContext.Provider>
        <CustomSnackBar
          open={isOpen}
          onClose={this.closeSnackbar}
          message={message}
          status={variant}
        />
      </>
    );
  }
}
SnackBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SnackBarProvider;
