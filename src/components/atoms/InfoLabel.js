import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text} from 'react-native';
import {color, dimens} from '../../utils';

const InfoLabel = ({labelStyle, label}) => {
  return <Text style={[styles.label, labelStyle]}>{label}</Text>;
};

InfoLabel.propTypes = {
  labelStyle: PropTypes.object,
  label: PropTypes.string,
};

InfoLabel.defaultProps = {
  labelStyle: {},
  label: 'Label',
};

export default InfoLabel;

const styles = StyleSheet.create({
  label: {
    fontSize: dimens.default_16,
    color: color.form_label,
  },
});
