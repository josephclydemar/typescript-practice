import { View, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesome6Icon from 'react-native-vector-icons/FontAwesome6';

const styles = StyleSheet.create({
    navBarContainer: {
        backgroundColor: '#505',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
    },
});

export default function NavigationBar() {
    return (
        <View style={styles.navBarContainer}>
            <TouchableOpacity
                onPress={function (): void {
                    Alert.alert('You pressed Home Icon', 'Hello, this is the Home icon...', [
                        { text: 'Close Haha..', onPress: () => console.log('Home Icon Alert Closed..') },
                    ]);
                    console.log('Home Icon');
                }}>
                <EntypoIcon name="home" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function (): void {
                    Alert.alert('You pressed Folder Icon', 'Hello, this is the Folder icon...', [
                        { text: 'Close Haha..', onPress: () => console.log('Folder Icon Alert Closed..') },
                    ]);
                    console.log('Folder Icon');
                }}>
                <EntypoIcon name="folder" size={50} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={function (): void {
                    Alert.alert('You pressed Users Icon', 'Hello, this is the Users icon...', [
                        { text: 'Close Haha..', onPress: () => console.log('Users Icon Alert Closed..') },
                    ]);
                    console.log('Users Icon');
                }}>
                <FontAwesome6Icon name="users" size={50} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}
