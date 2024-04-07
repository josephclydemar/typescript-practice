import { useState } from 'react';
import { View, FlatList } from 'react-native';

import { Presence } from '../types/Presence';

import Section from '../components/Section';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import PresenceItem from '../components/PresenceItem';

export default function HomeScreen() {
    const [presences] = useState<Presence[]>([
        { id: '1', time: '12:44PM', day: 'MON' },
        { id: '2', time: '08:23AM', day: 'MON' },
        { id: '3', time: '06:54PM', day: 'TUE' },
        { id: '4', time: '09:12AM', day: 'WED' },
    ]);
    return (
        <>
            <Header title="Home Warden" />
            <Section title="People Presence">
                <FlatList
                    style={{
                        height: 146,
                    }}
                    keyExtractor={function (item: Presence): string {
                        return item.id;
                    }}
                    data={presences}
                    renderItem={function ({ item }) {
                        return <PresenceItem id={item.id} time={item.time} day={item.day} />;
                    }}
                />
            </Section>
            <View
                style={{
                    backgroundColor: '#FFf',
                    height: 421,
                    // paddingTop: 50,
                    // display: 'flex',
                    // alignItems: 'flex-end',
                    justifyContent: 'flex-end',
                }}>
                <NavigationBar />
            </View>
        </>
    );
}
