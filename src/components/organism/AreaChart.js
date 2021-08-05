import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';
import {AreaChart, XAxis, YAxis} from 'react-native-svg-charts';
import {G, Line} from 'react-native-svg';
import * as shape from 'd3-shape';

import {color, dimens, formatCurrency} from '../../utils';

const LineChart = ({}) => {
  const data = [2000, 20000, 90000, 200000];

  const CustomGrid = ({y, ticks}) => (
    <G>
      {
        // Horizontal grid
        ticks.map(tick => (
          <Line
            key={tick}
            x1={'0%'}
            x2={'100%'}
            y1={y(tick)}
            y2={y(tick)}
            stroke={'rgba(0,0,0,0.1)'}
            strokeDasharray="5, 5"
          />
        ))
      }
    </G>
  );

  return (
    <View style={styles.container}>
      <YAxis
        data={data}
        contentInset={{top: 20, bottom: 32}}
        svg={{
          fill: color.grey,
          fontSize: dimens.small,
        }}
        numberOfTicks={3}
        formatLabel={value => `  ${value / 1000}K  `}
      />
      <View style={styles.wrapper}>
        <AreaChart
          style={styles.chart}
          data={data}
          contentInset={{top: 30, bottom: 0}}
          curve={shape.curveNatural}
          svg={{fill: color.blue_2, stroke: color.primary, strokeWidth: 1}}>
          <CustomGrid />
        </AreaChart>
        <View style={{marginTop: dimens.small}}>
          <XAxis
            data={data}
            formatLabel={(value, index) => index}
            contentInset={{left: 25, right: 28}}
            svg={{
              fill: color.grey,
              fontSize: dimens.default_13,
              lineHeight: dimens.default_18,
            }}
            formatLabel={value =>
              value < 2 ? '' : value === 2 ? 'Today' : '2040'
            }
          />
        </View>
      </View>
    </View>
  );
};

LineChart.propTypes = {};

LineChart.defaultProps = {};

export default LineChart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: dimens.default_12,
    height: 200,
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    marginBottom: dimens.default,
  },
  wrapper: {
    width: '100%',
    flex: 1,
  },
  chart: {
    width: '100%',
    height: 185,
    flex: 1,
  },
});
