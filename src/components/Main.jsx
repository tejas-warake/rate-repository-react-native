import { View } from 'react-native';
import AppBar from './AppBar.jsx';
import RepositoryList from './RepositoryList.jsx';

const Main = () => {
    return (
        <>
            <AppBar />
            <RepositoryList />
        </>
    );
};

export default Main;