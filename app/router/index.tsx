import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
/* import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'; */

//// IMPORT PAGES ///////
import SignIn from '../pages/SignIn';
import Registration from '../pages/Registration';
import Verification from '../pages/Verification';
import InformationPessoal from '../pages/InformationPessoal';
import AccountSucess from '../pages/AccountSucess';
//// END IMPORT PAGES ///

const Stack = createStackNavigator();
/* const Tab = createBottomTabNavigator(); */

const CreateAccount = () => (
  <Stack.Navigator
    initialRouteName="Registration"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="Verification" component={Verification} />
    <Stack.Screen name="InformationPessoal" component={InformationPessoal} />
    <Stack.Screen name="AccountSucess" component={AccountSucess} />
  </Stack.Navigator>
);

export default class root extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
