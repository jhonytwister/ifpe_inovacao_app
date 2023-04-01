import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './pages/LoginPage';
import ListScreen from './pages/UsersListPage';
import SingUpScreen from './pages/SingUp';
import EditUserScreen from './pages/EditUserPage';
import Inscrevase from './pages/SingUp';

const Stack = createNativeStackNavigator();

function App() {
return (
<NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="Home" component={LoginScreen} options={{headerShown: false}} />
<Stack.Screen name="Lista" component={ListScreen} options={{headerShown: false}}/>
<Stack.Screen name="Signup" component={SingUpScreen} options={{headerShown: false}}/>
<Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
<Stack.Screen name="EditUser" component={EditUserScreen} options={{headerShown: false}}/>
<Stack.Screen name="Singup" component={Inscrevase} options={{headerShown: false}}/>
<Stack.Screen name="arrow-left" component={LoginScreen} options={{headerShown: false}}/>
<Stack.Screen name="LoginPage" component={LoginScreen} options={{headerShown: false}}/>


</Stack.Navigator>
</NavigationContainer>
);
}

export default App;