import { View, Text } from 'react-native';

import { Presence } from '../types/Presence';

export default function PresenceItem({ time, day }: Presence) {
    return (
        <View style={{ margin: 5, backgroundColor: 'green' }}>
            <Text>{time}</Text>
            <Text>{day}</Text>
        </View>
    );
}
