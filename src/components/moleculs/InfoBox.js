import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens, formatCurrency} from '../../utils';

import {InfoLabel} from '../../components';

const InfoBox = ({label, amount, type}) => {
  return (
    <View
      style={[
        styles.container,
        type === 'new'
          ? {backgroundColor: 'white'}
          : {backgroundColor: color.blue},
      ]}>
      <InfoLabel
        label={type === 'new' ? 'New' : 'Current'}
        containerStyle={
          type === 'new' ? styles.status_new : styles.status_current
        }
        labelStyle={type === 'new' ? {color: 'white'} : {}}
      />
      <Text style={styles.label}>{label}</Text>
      <Text
        style={[styles.value, type === 'new' ? {color: color.btn_black} : {}]}>
        {formatCurrency(amount)}/mo
      </Text>
    </View>
  );
};

InfoBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.string,
  type: PropTypes.string,
};

InfoBox.defaultProps = {
  label: 'Label',
  amount: '0',
  type: 'current',
};

export default InfoBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: dimens.default,
  },
  status_new: {
    backgroundColor: color.primary,
  },
  status_current: {
    backgroundColor: color.grey_3,
  },
  label: {
    fontSize: dimens.default_16,
    fontWeight: 'bold',
    lineHeight: dimens.medium,
    color: color.grey,
    marginTop: dimens.default_12,
    marginBottom: dimens.small,
  },
  value: {
    fontSize: dimens.default_16,
    fontWeight: 'bold',
    lineHeight: dimens.medium,
    color: color.grey,
  },
});
