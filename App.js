import { FlatList, View, StyleSheet, Text, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 40,
    },
    separator: {
        height: 10,
    },
});

const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
];

const ItemSeparator = () => <View style={styles.separator} />;

const Item = ({ item, titleSize }) => {
    return (
        <View>
            <Text style={{fontSize:titleSize}}>Full Name: {item.fullName}</Text>
            <Text>Description: {item.description}</Text>
            <Text>Language: {item.language}</Text>
            <Text>Forks: {item.forkaCount}</Text>
            <Text>Reviews: {item.reviewCount}</Text>
            <Text>Ratings: {item.ratingAverage}</Text>
        </View>
    )
}

const App = () => {
    const renderItem = ({ item }) => {
        const title_size = 25;
        return (
            <Item
                item={item}
                titleSize={title_size}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={repositories}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

export default App;