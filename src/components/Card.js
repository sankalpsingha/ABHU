import React from 'react';
import { Text, View } from 'react-native';
import { Row, Table } from 'react-native-table-component';
import styles from '../styles/card';
import { niceNumber } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDownload, faRedo, faTrash } from '@fortawesome/free-solid-svg-icons';

const Card = ({scansByLabel}) => {
    const tableHead = ['Rev.', 'Issues', 'Actions'];
    const headWidthArr = [46.8, 140.4, 140.4];
    const bodyWidthArr = [46.8, 46.8, 46.8, 46.8, 46.8, 46.8, 46.8];

    const downloadIcon =
        <View style={styles.fontAwesomeContainerStyle}>
            <Text>
                <FontAwesomeIcon icon={faDownload} />
            </Text>
        </View>;
    const refreshIcon =
        <View style={styles.fontAwesomeContainerStyle}>
            <Text>
                <FontAwesomeIcon icon={faRedo} />
            </Text>
        </View>;
    const deleteIcon =
        <View style={styles.fontAwesomeContainerStyle}>
            <Text>
                <FontAwesomeIcon icon={faTrash} />
            </Text>
        </View>;

    return (
        <View style={styles.container}>
            <Text style={styles.scanLabelStyle}>{scansByLabel.label}</Text>
            <Table borderStyle={styles.tableStyle.headBorderStyle}>
                <Row 
                    data={tableHead}
                    widthArr={headWidthArr}
                    style={styles.tableStyle.rowHeadStyle}
                    textStyle={styles.tableStyle.rowHeadTextStyle}
                />
                {
                    scansByLabel.scans.map((individualScan) => {
                        const tableRow = [individualScan.scan_num, niceNumber(individualScan.num_major), niceNumber(individualScan.num_noteworthy), niceNumber(individualScan.num_minor), downloadIcon, refreshIcon, deleteIcon];
                        return (
                            <Row 
                                key={individualScan.scan_id}
                                widthArr={bodyWidthArr}
                                data={tableRow}
                                style={styles.tableStyle.rowBodyStyle}
                                textStyle={styles.tableStyle.rowBodyTextStyle}
                            />
                        )
                    })
                }
            </Table>
        </View>
    );
};

export default Card;
