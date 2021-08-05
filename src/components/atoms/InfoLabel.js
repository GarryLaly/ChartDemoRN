import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens} from '../../utils';

const InfoLabel = ({label, containerStyle, labelStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </View>
  );
};

InfoLabel.propTypes = {
  label: PropTypes.string,
  containerStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

InfoLabel.defaultProps = {
  label: 'Label',
  containerStyle: {},
  labelStyle: {},
};

export default InfoLabel;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: dimens.default_12,
    top: dimens.default_14,
    paddingVertical: dimens.supersmall,
    paddingHorizontal: dimens.default_12,
    borderRadius: dimens.supersmall,
  },
  label: {
    fontSize: dimens.default_12,
    fontWeight: 'bold',
    color: color.btn_black,
  },
});
