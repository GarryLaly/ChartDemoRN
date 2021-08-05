import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image} from 'react-native';
import {color, dimens, formatCurrency} from '../../utils';

const HorizontalBox = ({label, amount}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.icon}
          source={require('../../assets/img/saving.png')}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{formatCurrency(amount)}/mo</Text>
      </View>
    </View>
  );
};

HorizontalBox.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.string,
};

HorizontalBox.defaultProps = {
  label: 'Label',
  amount: '0',
};

export default HorizontalBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: dimens.default_12,
    padding: dimens.default,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: color.white,
    padding: dimens.default,
    borderRadius: dimens.default_12,
  },
  icon: {
    width: dimens.default_20,
    height: dimens.default_20,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    marginLeft: dimens.default_12,
  },
  label: {
    fontSize: dimens.default_16,
    fontWeight: 'bold',
    lineHeight: dimens.medium,
    color: color.grey,
  },
  value: {
    fontSize: dimens.default_16,
    fontWeight: 'bold',
    lineHeight: dimens.medium,
    color: color.btn_black,
  },
});
