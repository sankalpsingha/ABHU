import React, {useState} from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import logo from '../../assets/logo.png';

const Login = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    return (
        <View style={styles.container}>
            <Image source={logo} style={styles.imageStyle} />
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder="Enter Email"
                style={styles.loginField}
            />
            <TextInput
                onChangeText={setPassword}
                value={password}
                placeholder="Enter Password"
                style={styles.loginField}
                secureTextEntry={true}
            />
            <TouchableOpacity 
              style={styles.button}
              onPress= {()=> navigation.navigate('Home')}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F2F2F',
        flex: 1,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        textAlign: 'center',
    },
    imageStyle: {
        width: 220,
        height: 130,
        marginTop: -60,
        marginBottom: 10,
    },
    loginField: {
        height: 40,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#EAEAEA',
        marginTop: 10,
        width: '100%',
        borderRadius: 3,
    },
    button: {
        padding: 13,
        backgroundColor: '#E63359',
        marginTop: 10,
        borderRadius: 3,
        alignSelf: 'stretch'
    },
    buttonText: {
        color: 'white',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});

export default Login;
