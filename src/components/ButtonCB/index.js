import React from 'react';
import {
  TouchableOpacity,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ButtonCB = function ButtonCB({
  onPress,
  disabled = false,
  children,
  white = false,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        white ? styles.whiteButton : {},
        disabled ? styles.disabledButton : {},
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          styles.buttonText,
          white ? styles.darkText : {},
          disabled ? styles.disabledText : {},
        ]}
      >
        {children.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

const propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.string.isRequired,
  white: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  white: false,
};

ButtonCB.propTypes = propTypes;
ButtonCB.defaultProps = defaultProps;

export default ButtonCB;

