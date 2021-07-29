import React from 'react';
import {View, Text} from 'react-native';
import ScanData from '../mock/scans.json';
import Card from '../components/Card';

const Home = () => {
    return (
        <View>
            {
              ScanData.map((val) => {
                  return (
                      <Card key={val.scan_name} val={val}/>
                  )
              })  
            }
        </View>
    );
};

export default Home;