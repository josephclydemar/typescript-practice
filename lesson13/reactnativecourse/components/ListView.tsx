import { View, ScrollView } from 'react-native';

type ListViewProps<T> = {
    items: T[];
    render: (item: T) => JSX.Element;
}

export default function ListView<T>({ items, render }: ListViewProps<T>) {
  return (
    <ScrollView style={{
        height: 300,
    }}>
        { items.map(function (item: T, i: number) {
        return (
            <View
            key={i}
            style={{
                padding: 5,
                marginBottom: 8,
                backgroundColor: '#0f0',
                borderRadius: 5,
            }}>
                { render(item) }
            </View>
        );
        }) }
    </ScrollView>
  );
}
