import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeScreen from './screens/HomeScreen.js';
import VotingScreen from './screens/VotingScreen.js';
import SettingsScreen from './screens/SettingsScreen.js';
import TransactionsScreen from './screens/TransactionsScreen.js';
import NotificationsScreen from './screens/NotificationsScreen.js';
import SaccoScreen from './screens/SaccoScreen.js';
import SaccoCard from './components/SaccoCard.js';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();


function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home1" 
        component={HomeScreen} 
        options={{
          headerShown: false,          
        }} 
      />
      <HomeStack.Screen name='Transactions' component={TransactionsScreen}/>
      <HomeStack.Screen name='Notifications' component={NotificationsScreen}/>
      <HomeStack.Screen name='SACCOScreen' component={SaccoScreen}/>
    </HomeStack.Navigator>
  );
}

export default function App({navigate}) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Home" 
          component={HomeStackScreen} 
          options={{
            headerShown: false,
            tabBarIcon: () => <Ionicons name="home-outline" size={24} />,
          }} 
        />
        <Tab.Screen 
          name="Voting" 
          component={VotingScreen} 
          options={{
            tabBarIcon: () => <Ionicons name="checkmark-circle-outline" size={24} />,
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: () => <Ionicons name="settings-outline" size={24} />,
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}