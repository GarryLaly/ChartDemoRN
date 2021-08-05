import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens} from '../../utils';

const SectionTitle = ({
  title,
  subtitle,
  titleStyle,
  subTitleStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Text style={[styles.subtitle, subTitleStyle]}>{subtitle}</Text>
    </View>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  textColor: PropTypes.string,
  titleStyle: PropTypes.object,
  subTitleStyle: PropTypes.object,
  containerStyle: PropTypes.object,
};

SectionTitle.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  titleStyle: {},
  subTitleStyle: {},
  containerStyle: {},
};

export default SectionTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: dimens.default_16,
  },
  title: {
    fontSize: dimens.large,
    fontWeight: 'bold',
    color: color.btn_black,
    marginBottom: dimens.medium,
  },
  subtitle: {
    fontSize: dimens.default_16,
    fontWeight: 'bold',
    lineHeight: dimens.medium,
    color: color.grey,
  },
});
