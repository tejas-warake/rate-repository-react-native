import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex'
    },
    txtcnt: {
        backgroundColor: 'black',
        padding: 20
    }
    // ...
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.txtcnt}>
            <Text fontSize='heading' fontWeight='bold' style={{color: 'white'}}>
                 AppBar
            </Text>
            </View>
        </View>
    );
};

export default AppBar;