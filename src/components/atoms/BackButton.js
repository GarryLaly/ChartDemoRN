import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import {color, dimens} from '../../utils';

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        style={styles.icon}
        source={require('../../assets/img/arrow-left.png')}
      />
    </TouchableOpacity>
  );
};

BackButton.propTypes = {
  onPress: PropTypes.func,
};

BackButton.defaultProps = {
  onPress: null,
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    margin: dimens.default_16,
    backgroundColor: color.grey_2,
    alignSelf: 'flex-start',
    borderRadius: dimens.large_50,
    padding: dimens.default_12,
  },
  icon: {
    width: dimens.medium,
    height: dimens.medium,
    resizeMode: 'contain',
  },
});
