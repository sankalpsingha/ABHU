// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Sankalp yaya!!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello World!!</Text>
      <TouchableOpacity>
        <Text>Hello button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    flex: 1,
    padding: 10,    
  },
  textStyle: {
    textAlign: 'center',
    color: 'green',
  }

})

export default App;