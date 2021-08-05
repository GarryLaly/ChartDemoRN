import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Loading} from '.';
import {color, dimens} from '../../utils';

const Button = ({
  onPress,
  btnStyle,
  iconStyle,
  titleStyle,
  title,
  iconLeft,
  iconRight,
  disabled,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.btn, btnStyle]}>
      {iconLeft && (
        <Image style={[styles.btn_icon, iconStyle]} source={iconLeft} />
      )}
      {isLoading ? (
        <Loading size="small" color="white" />
      ) : (
        <Text style={[styles.btn_title, titleStyle]}>{title}</Text>
      )}

      {iconRight && <Image source={iconRight} style={styles.iconRight} />}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  onPress: PropTypes.func,
  btnStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  title: PropTypes.string,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  disabled: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  onPress: null,
  btnStyle: {},
  iconStyle: {},
  titleStyle: {},
  title: 'Button',
  iconLeft: null,
  iconRight: null,
  disabled: false,
  isLoading: false,
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    borderRadius: dimens.large_50,
    height: dimens.large_48,
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_icon: {
    width: dimens.medium,
    height: dimens.medium,
    marginRight: dimens.small,
  },
  btn_title: {
    fontSize: dimens.default_18,
    color: color.white,
    fontWeight: 'bold',
  },
  leftIcon: {
    position: 'absolute',
    left: dimens.default_16,
  },
  iconRight: {
    position: 'absolute',
    right: dimens.default_16,
  },
});
