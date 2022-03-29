import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/view/pages/home/Index.js';
import MovieLiveAction from './src/view/content/movieLiveAction/Index.js';
import MovieAnimation from './src/view/content/movieAnimation/Index.js';
import Serie from './src/view/content/serie/Index.js';
import Anime from './src/view/content/anime/Index.js';
import Leads from './src/view/content/leads/Index.js';
import NotificationItem from './src/database/Notification.js';

const Stack = createNativeStackNavigator();

export default function App() {

 

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='Home'
          component={ Home }
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='MovieLiveAction'
          component={ MovieLiveAction }
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='MovieAnimation'
          component={ MovieAnimation }
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Serie'
          component={ Serie }
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Anime'
          component={ Anime }
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Leads'
          component={ Leads }
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
