import { PropsWithChildren } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
});

type SectionProps = PropsWithChildren<{
    title: string;
}>;

export default function Section({
    children,
    title,
}: SectionProps): JSX.Element {
    return (
        <View style={styles.sectionContainer}>
            <Text style={[styles.sectionTitle]}>{title}</Text>
            <View>{children}</View>
        </View>
    );
}
