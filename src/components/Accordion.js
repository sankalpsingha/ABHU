import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/accordion';

const Accordion = ({issue}) => {
    const arrowIcon = <FontAwesomeIcon icon={faAngleRight} />;

    const circularText = (severity) => {
        const circularColorStyleMapping = {
            '1': styles.greenColor,
            '2': styles.yellowColor,
            '3': styles.orangeColor,
            '4': styles.redColor,
        };

        return (
            <View style={[styles.circularTextContainer, circularColorStyleMapping[severity]]}>
                <Text style={styles.circularText}>
                    { severity }
                </Text>
            </View>
        );
    };
    return (
        <View style={styles.container}>
            { circularText(issue.severity) }
            <Text style={styles.issueNameText}>{ issue.name }</Text>
            { arrowIcon }
        </View>
    )
};

export default Accordion;