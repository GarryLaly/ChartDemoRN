import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from 'react-native';
import {color, dimens} from '../../utils';

const SectionTitle = ({
  title,
  subtitle,
  textColor,
  titleStyle,
  subTitleStyle,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.title, {color: textColor}, titleStyle]}>
        {title}
      </Text>
      <Text style={[styles.subtitle, {color: textColor}, subTitleStyle]}>
        {subtitle}
      </Text>
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
  textColor: color.btn_black,
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
    fontSize: dimens.default_22,
    color: color.btn_black,
  },
  subtitle: {
    fontSize: dimens.default_16,
    lineHeight: dimens.medium,
    color: color.btn_black,
  },
});
