import { View, TouchableOpacity, StyleSheet } from 'react-native';
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
            <TouchableOpacity onPress={function (): void {
                console.log('Home Icon');
            }}>
                <EntypoIcon name='home' size={50} color='#fff'  />
            </TouchableOpacity>
            <TouchableOpacity onPress={function (): void {
                console.log('Folder Icon');
            }}>
                <EntypoIcon name='folder' size={50} color='#fff'  />
            </TouchableOpacity>
            <TouchableOpacity onPress={function (): void {
                console.log('Users Icon');
            }}>
                <FontAwesome6Icon name='users' size={50} color='#fff' />
            </TouchableOpacity>
        </View>
    );
}
