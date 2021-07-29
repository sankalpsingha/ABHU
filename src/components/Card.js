import React from 'react';
import { View, Text } from 'react-native';

const Card = ({val}) => {
    return (
        <View>
            <Text>{val.scan_name}</Text>
        </View>
    );
};

export default Card;
