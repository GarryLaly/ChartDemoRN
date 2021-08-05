import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Image, StatusBar} from 'react-native';

// where local file imported
import {Button, SectionTitle} from '../components';
import {color, dimens} from '../utils';

const Chart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={color.white}
      />
      <View style={styles.center_container}>
        <View style={styles.center_content}>
          <SectionTitle
            title="Goal Overview"
            titleStyle={{fontSize: dimens.large_40}}
            subtitle={`Adding this goal will increase your total\nmonthly deposit target`}
          />
          <Button title="Create Goal" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  inner_container: {
    backgroundColor: color.primary,
    marginTop: -50,
    paddingTop: 50,
  },
  center_container: {
    flex: 1,
    paddingTop: dimens.very_large,
  },
  center_content: {
    paddingHorizontal: dimens.default_16,
  },
  bg_top: {
    backgroundColor: color.primary,
    position: 'absolute',
    width: '100%',
    height: 400,
    top: 0,
  },
  image_bg_wave: {
    position: 'absolute',
    resizeMode: 'cover',
    width: '100%',
    height: 500,
    top: 20,
  },
  footer_container: {
    padding: dimens.large,
  },
  wave: {
    zIndex: -1,
  },
  greet: {
    fontSize: dimens.large_40,
    color: 'white',
  },
});
