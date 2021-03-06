import React from 'react';
import {
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Fraction = function Fraction({ children }) {
  const [numerator, denominator] = children.split('/');

  const FONT_WIDTH = 6;

  const widthStyle = {
    width: children.length * FONT_WIDTH,
  };

  return (
    <Text
      style={[styles.fraction, widthStyle]}
    >
      <Text
        style={styles.numerator}
      >
        {numerator}
      </Text>
      <Text>/</Text>
      <Text
        style={styles.denominator}
      >
        {denominator}
      </Text>
    </Text>
  );
};

const propTypes = {
  children: PropTypes.string.isRequired,
};

Fraction.propTypes = propTypes;

export default Fraction;
