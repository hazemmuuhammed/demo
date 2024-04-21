
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';
import { PaperProvider } from 'react-native-paper';

import {Provider} from 'react-redux';
import store from './src/redux/store/store';
export default function App() {

  

  return (
    <Provider store={store}>
            <PaperProvider>

    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
    </PaperProvider>

    </Provider>
  );
}

