import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Cell, Row, Table, TableWrapper } from 'react-native-table-component';
import styles from '../styles/card';
import { niceNumber } from '../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faDownload, faRedo, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setScan } from '../slices/scanSlice';

const Card = ({scansByLabel, navigation}) => {
    const dispatch = useDispatch();

    const tableHead = ['Rev.', 'Issues', 'Actions'];
    const headWidthArr = [46.8, 140.4, 140.4];

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
    
    const onPressAction = (scan) => {
        dispatch(setScan(scan));
        navigation.navigate('Report');
    };

    const columnElement = (scan, data, key) => {
        return (
            <TouchableOpacity
                key={key}
                onPress={()=> onPressAction(scan)}
            >
                <Cell
                    borderStyle={styles.tableStyle.headBorderStyle}
                    style={styles.tableStyle.cellStyle}
                    textStyle={[
                        styles.tableStyle.rowBodyTextStyle,
                        key.indexOf('num_major') >= 0 ? styles.tableStyle.redTextColor : {},
                        key.indexOf('num_noteworthy') >= 0 ? styles.tableStyle.orangeTextColor : {},
                        key.indexOf('num_minor') >= 0 ? styles.tableStyle.yellowTextColor : {},
                    ]}
                    data={data}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.scanLabelStyle}>{scansByLabel.label}</Text>
            <Table
                borderStyle={styles.tableStyle.headBorderStyle}
                style={styles.tableStyle.borderRadiusStyle}
            >
                <Row 
                    data={tableHead}
                    widthArr={headWidthArr}
                    style={styles.tableStyle.rowHeadStyle}
                    textStyle={styles.tableStyle.rowHeadTextStyle}
                />
                {
                    scansByLabel.scans.map((individualScan, index) => (
                        <TableWrapper key={index} style={styles.tableStyle.tableWrapperStyle}>
                            { columnElement(individualScan, individualScan.scan_num, individualScan.scan_id + '-scan_num') }
                            { columnElement(individualScan, niceNumber(individualScan.num_major), individualScan.scan_id + '-num_major') }
                            { columnElement(individualScan, niceNumber(individualScan.num_noteworthy), individualScan.scan_id + '-num_noteworthy') }
                            { columnElement(individualScan, niceNumber(individualScan.num_minor), individualScan.scan_id + '-num_minor') }
                            { columnElement(individualScan, downloadIcon, individualScan.scan_id + '-download') }
                            { columnElement(individualScan, refreshIcon, individualScan.scan_id + '-rescan') }
                            { columnElement(individualScan, deleteIcon, individualScan.scan_id + '-delete') }
                        </TableWrapper>
                    ))
                }
            </Table>
        </View>
    );
};

export default Card;
