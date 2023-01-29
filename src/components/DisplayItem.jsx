import React from 'react'
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import DisplayImage from './DisplayImage';
import theme from '../theme';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        marginVertical: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: theme.colors.white,
        borderRadius: 10
    },
    firstSection: {
        flex: 0,
        flexDirection: 'row'
    },
    firstSectionSub: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 20
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    languageTag: {
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 5,
        width: 100,
        alignItems: 'center'
    },
    statistics: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})

const ShowShortened = ({x}) => {
    let val = 0;

    if (x < 9999) {
        val = x;
    }
    else if (x < 1000000) {
        val = Math.round(x / 1000) + "K";
    }
    else if (x < 10000000) {
        val = (x / 1000000).toFixed(2) + "M";
    }
    else if (x < 1000000000) {
        val = Math.round((x / 1000000)) + "M";
    } 
    else if (x < 1000000000000) {
        val = Math.round((x / 1000000000)) + "B";
    }
    else {
        val = "1T+";
    }

    return (
        <Text>
            {val}
        </Text>
    )
}

const DisplayItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.firstSection}>
                <DisplayImage imgUrl={item.ownerAvatarUrl} />
                <View style={styles.firstSectionSub}>
                    <Text style={styles.userName}>{item.fullName}</Text>
                    <Text style={{ marginVertical: 3 }}>{item.description}</Text>

                    <View style={styles.languageTag}>
                        <Text style={{ color: 'white', fontSize: 15 }}>{item.language}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.statistics}>
                <View>
                    <ShowShortened x={item.stargazersCount} />
                    <Text>Stars</Text>
                </View>
                <View>
                    <ShowShortened x={item.forksCount} />
                    <Text>Forks</Text>
                </View>
                <View>
                    <ShowShortened x={item.reviewCount} />
                    <Text>Reviews</Text>
                </View>
                <View>
                    <ShowShortened x={item.ratingAverage} />
                    <Text>Ratings</Text>
                </View>
            </View>
        </View>
    )
}

export default DisplayItem;

