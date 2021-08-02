import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/report';
import { niceDate } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import exposure from '../../assets/exposure.png';
import hardening from '../../assets/hardening.png';
import patching from '../../assets/patching.png';
import { useState } from 'react';
import Accordion from '../components/Accordion';

const Report = ({route}) => {
    const [activeTab, setActiveTab] = useState('overview');

    const exclamationIcon =
        <FontAwesomeIcon
            style={styles.fontAwesome}
            icon={faExclamationTriangle}
            size={24}
        />;

    const categoryScoreContainer = (image, title, score) => {
        return (
            <View style={styles.categoryScoreContainer}>
                <Image source={image} style={styles.imageStyle} />
                <View style={styles.categoryTitleScoreContainer}>
                    <Text style={styles.categoryTitleText}>{ title }</Text>
                    <Text style={styles.categoryScoreText}>{ score }</Text>
                </View>
            </View>
        );
    };

    const overviewTab =
        <View style={[styles.card, styles.contentCard, styles.overviewContentCard]}>
            <View style={styles.hackabilityScoreContainer}>
                <Text style={styles.hackabilityScoreText}>Hackability Score: { route.params.hackability_score }</Text>
                {exclamationIcon}
            </View>
            { categoryScoreContainer(exposure, 'Exposure', route.params.exposure) }
            { categoryScoreContainer(hardening, 'Hardening', route.params.hardening) }
            { categoryScoreContainer(patching, 'Patching', route.params.patching) }
        </View>;
    
    const issueDetailsTab =
        <ScrollView style={[styles.card, styles.contentCard]}>
            {
                route.params.top_issues.map((issue, index) => {
                    return (
                        <Accordion
                            key={index}
                            issue={issue}
                        />
                    );
                })
            }
        </ScrollView>;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.scanLabel}>{ route.params.label }</Text>
                <Text style={styles.scanRevisionDate}>
                    Revision { route.params.scan_num } | { niceDate(route.params.started) }
                </Text>
            </View>
            { activeTab === 'overview' ? overviewTab : issueDetailsTab }
            <View style={styles.buttonsContainer}>
                <TouchableOpacity 
                    style={styles.button}
                    onPress= {()=> setActiveTab('overview')}
                >
                    <Text style={[
                        styles.buttonText,
                        activeTab === 'overview' ? styles.buttonTextActive : styles.buttonTextInactive,
                    ]}>
                        Overview
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.button}
                    onPress= {()=> setActiveTab('issueDetails')}
                >
                    <Text style={[
                        styles.buttonText,
                        activeTab === 'issueDetails' ? styles.buttonTextActive : styles.buttonTextInactive,
                    ]}>
                        Issue Details
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Report;