import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import { Link } from 'react-router-native';
import { ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex'
    },
    txtcnt: {
        backgroundColor: 'black',
        padding: 10,
        flex: 0,
        flexDirection: 'row'
    }
});

const AppBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.txtcnt}>
                <ScrollView horizontal={true}>
                    <Link to="/">
                        <Text fontSize='heading' fontWeight='bold' style={{ color: 'white', margin: 10 }}>
                            Home
                        </Text>
                    </Link>
                    <Link to="/signin">
                        <Text fontSize='heading' fontWeight='bold' style={{ color: 'white', margin: 10 }}>
                            SignIn
                        </Text>
                    </Link>
                </ScrollView>
            </View>
        </View>
    );
};

export default AppBar;