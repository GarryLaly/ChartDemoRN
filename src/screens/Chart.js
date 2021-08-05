import React, {useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, Image, StatusBar} from 'react-native';

// where local file imported
import {
  Button,
  BackButton,
  SectionTitle,
  InfoBox,
  HorizontalBox,
} from '../components';
import {color, dimens} from '../utils';

const Chart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton onPress={() => console.warn('back')} />
      <StatusBar
        animated={true}
        barStyle="dark-content"
        backgroundColor={color.white}
      />
      <View style={styles.wrapper}>
        <SectionTitle
          title="Goal Overview"
          subtitle={`Adding this goal will increase your total\nmonthly deposit target`}
        />
        <View style={styles.row}>
          <InfoBox
            label={`Total\nMonthly Deposit`}
            amount="1750"
            type="current"
          />
          <InfoBox label={`Total\nMonthly Deposit`} amount="2250" type="new" />
        </View>
        <HorizontalBox label="General Savings" amount="500" />
      </View>
      <View style={styles.footer}>
        <Button title="Create Goal" />
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
  wrapper: {
    flex: 1,
    paddingHorizontal: dimens.default_16,
  },
  row: {
    flexDirection: 'row',
    marginBottom: dimens.default,
    borderRadius: dimens.default_12,
    overflow: 'hidden',
    position: 'relative',
  },
  footer: {
    padding: dimens.default_16,
  },
});
