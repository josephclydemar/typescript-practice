/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Button,
  TextInput,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Section from './components/Section';
import ListView from './components/ListView';


type User = {
  firstname: string;
  lastname: string;
  age: number;
}

function App(): JSX.Element {
  const [myName, setMyName] = useState<string>('');
  const [age, setAge] = useState<number>(0);

  const [users, setUsers] = useState<User[]>([
    { firstname: 'Yoshi', lastname: 'Mew', age: 43 },
    { firstname: 'Mark', lastname: 'Grayson', age: 25 },
    { firstname: 'Anissa', lastname: 'Viltrum', age: 34 },
    { firstname: 'Tanjiro', lastname: 'Kamado', age: 15 },
    { firstname: 'Nezuko', lastname: 'Kamado', age: 13 },
    { firstname: 'Inosuke', lastname: 'Hashibira', age: 15 },
    { firstname: 'Zenitsu', lastname: 'Agatsuma', age: 15 },
    { firstname: 'Tengen', lastname: 'Uzui', age: 27 },
    { firstname: 'Sanemi', lastname: 'Shinizugawa', age: 29 },
    { firstname: 'Giyuu', lastname: 'Tomioka', age: 28 },
  ]);


  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
          <Section title='State Manipulation'>  
            <View style={{
              marginLeft: 35,
              marginRight: 35,
            }}>
              <Text style={{
                color: '#444',
                fontWeight: 'bold',
                fontSize: 25
              }}>{ myName }</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#777',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                placeholder='Enter your name...'
                onChangeText={function (textValue: string): void {
                  setMyName(() => textValue);
                }}
              />
              <Text style={{
                color: '#444',
                fontWeight: 'bold',
                fontSize: 25,
              }}>age: { age }</Text>
              <Button title='Click Me!!' onPress={function (): void {
                setAge(prev => prev + 1);
              }}/>
            </View>
          </Section>
          <Section title='Lists & ScrollView'>
            <ListView items={users} render={function (user: User): JSX.Element {
              return (
                <View>
                    <Text style={{
                        fontSize: 15,
                        color: '#222',
                    }}>Name: { user.firstname } {user.lastname}</Text>
                    <Text style={{
                        fontSize: 15,
                        color: '#222',
                    }}>Age: { user.age }</Text>
                </View>
              );
            }} />
          </Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
