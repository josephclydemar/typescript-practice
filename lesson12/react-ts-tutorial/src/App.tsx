import { ReactElement, useContext, Context } from 'react';

import TitleContext from './contexts/TitleContext';
import ThemeContext from './contexts/ThemeContext';

import Heading from './components/Heading';
import Section from './components/Section';
import Counter from './components/Counter';
import List from './components/List';
import HooksTest from './components/HooksTest';


type TitleContextType = {
  title: string,
  setTitle: React.Dispatch<React.SetStateAction<string>>;
};


interface ThemeType {
  currentTheme: 'light-mode' | 'dark-mode';
  backgroundColor: string;
  textColor: string;
}

interface ThemeAction {
  actionType: 'dark-mode' | 'light-mode';
}


type ThemeContextType = {
  theme: ThemeType,
  themeDispatch: React.Dispatch<ThemeAction>;
};




function App(): JSX.Element {
  const { title } = useContext<TitleContextType>(TitleContext as Context<TitleContextType>);
  const { theme } = useContext<ThemeContextType>(ThemeContext as Context<ThemeContextType>);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor, width: '100%', height: '100%' }}>
      <Heading title={ title } />
      <div className='mainSection' >
        <Section title='H2 Title'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio modi architecto dolorem. Temporibus omnis deserunt ducimus ipsum eveniet, reprehenderit, molestiae nobis molestias quia, quibusdam eius aut perferendis officia impedit?</p>
          <p>Excepturi laborum distinctio cupiditate quis nam commodi libero numquam architecto necessitatibus mollitia reprehenderit laudantium nemo tempore fugiat corporis sunt voluptate, modi atque quaerat! Blanditiis asperiores quam alias esse, quis?</p>
        </Section>
      </div>
      
      <Section title='Counter'>
        <Counter />
      </Section>
      
      <Section title='To Study'>
        <List items={['Computer Architecture and Organization', 'Computer Networks', 'Data Structures and Algorithms']} render={function (item: string): ReactElement {
          return (
            <span>{ item }</span>
          );
        }} />
      </Section>
      <Section title='Hooks Test'>
          <HooksTest />
      </Section>
    </div>
  );
}

export default App;
