import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import PieChart from 'react-native-pie-chart';
import Images from '../../Styles/Images';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    margin: 10
  }
});

export default class test extends Component {
  render() {
    const chart_wh = 150
    const series = [789, 321, 223, 423, 123]
    const sliceColor = ['#50D166', '#5553CE', '#F13A30', '#F18F1C', '#1875F0']
    const series1 = [340, 321,]
    const sliceColor1 = ['#50D166', '#F13A30',]
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar
            hidden={true}
          />
          <PieChart
            chart_wh={chart_wh}
            series={series}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        </View>
        {/* /Start */}
        <View style={{
          flexDirection: "row", margin: 10, justifyContent: 'space-between',
          marginTop: 20, width: '70%', alignSelf: 'center'
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Images.circle} style={{ marginTop: 2, width: 10, height: 10, tintColor: '#42B856' }} />
            <Text style={{ marginLeft: 15, color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>Stocks</Text>
          </View>
          <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>85.7 % </Text>
        </View>
        {/* /Start */}
        <View style={{
          flexDirection: "row", margin: 10, justifyContent: 'space-between',
          marginTop: 20, width: '70%', alignSelf: 'center'
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Images.circle} style={{ marginTop: 2, width: 10, height: 10, tintColor: '#5553CE' }} />
            <Text style={{ marginLeft: 15, color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>Mutual Funds</Text>
          </View>
          <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>20.9 % </Text>
        </View>
        {/* /Start */}
        <View style={{
          flexDirection: "row", margin: 10, justifyContent: 'space-between',
          marginTop: 20, width: '70%', alignSelf: 'center'
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Images.circle} style={{ marginTop: 2, width: 10, height: 10, tintColor: '#F13A30' }} />
            <Text style={{ marginLeft: 15, color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>Insurance</Text>
          </View>
          <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>14.9 %  </Text>
        </View>
        {/* /Start */}
        <View style={{
          flexDirection: "row", margin: 10, justifyContent: 'space-between',
          marginTop: 20, width: '70%', alignSelf: 'center'
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Images.circle} style={{ marginTop: 2, width: 10, height: 10, tintColor: '#F18F1C' }} />
            <Text style={{ marginLeft: 15, color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>Tax Saving</Text>
          </View>
          <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>11.9 %  </Text>
        </View>
        {/* /Ends */}
        <View style={styles.container}>
          <View style={{ marginTop: 30, marginBottom: 20 }}>
            <PieChart
              chart_wh={chart_wh}
              series={series1}
              sliceColor={sliceColor1}
              doughnut={true}
              coverRadius={0.45}
              coverFill={'#FFF'}
            />
          </View>
        </View>
        {/* /Start */}
        <View style={{
          flexDirection: "row", margin: 10, justifyContent: 'space-between',
          marginTop: 20, width: '70%', alignSelf: 'center'
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Images.circle} style={{ marginTop: 2, width: 10, height: 10, tintColor: '#42B856' }} />
            <Text style={{ marginLeft: 15, color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>FMCG</Text>
          </View>
          <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>85.7 % </Text>
        </View>
        {/* /Start */}
        <View style={{
          flexDirection: "row", margin: 10, justifyContent: 'space-between',
          marginTop: 20, width: '70%', alignSelf: 'center'
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Images.circle} style={{ marginTop: 2, width: 10, height: 10, tintColor: '#5553CE' }} />
            <Text style={{ marginLeft: 15, color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>IT</Text>
          </View>
          <Text style={{ color: '#B3B3B3', fontSize: 12, fontWeight: "bold" }}>20.9 % </Text>
        </View>
      </ScrollView>
    );
  }
}