import React from 'react';
import {ScrollView, Text} from 'react-native';
import styles from '../styles/home';
import ScanData from '../mock/scans.json';
import Card from '../components/Card';

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            {
              ScanData.map((scansByLabel) => {
                  return (
                      <Card key={scansByLabel.label} scansByLabel={scansByLabel}/>
                  )
              })  
            }
        </ScrollView>
    );
};

export default Home;