import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

//// IMPORT PAGES ///////
import SignIn from '../pages/SignIn';
import Registration from '../pages/Registration';
import Verification from '../pages/Verification';
import InformationPessoal from '../pages/InformationPessoal';
import AccountSucess from '../pages/AccountSucess';
import Home from '../pages/Home';
import Cards from '../pages/Cards';
import Maps from '../pages/Maps';
import Profile from '../pages/Profile';
//// END IMPORT PAGES ///

import {StatusBar} from 'react-native';
import colors from '../assets/colors';
import SvgHome from '../assets/svg/SvgHome';
import SvgCard from '../assets/svg/SvgCard';
import SvgMap from '../assets/svg/SvgMap';
import SvgProfile from '../assets/svg/SvgProfile';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={colors.blue}
    barStyle={{backgroundColor: colors.lightGray}}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          <SvgHome fill={colors.darkGray} width={25} height={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Cards"
      component={Cards}
      options={{
        tabBarLabel: 'Cards',
        tabBarIcon: () => (
          <SvgCard fill={colors.darkGray} width={25} height={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Maps"
      component={Maps}
      options={{
        tabBarLabel: 'Maps',
        tabBarIcon: () => (
          <SvgMap fill={colors.darkGray} width={25} height={25} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <SvgProfile fill={colors.darkGray} width={25} height={25} />
        ),
      }}
    />
  </Tab.Navigator>
);

const CreateAccount = () => (
  <Stack.Navigator
    initialRouteName="Registration"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Registration" component={Registration} />
    <Stack.Screen name="Verification" component={Verification} />
    <Stack.Screen name="InformationPessoal" component={InformationPessoal} />
    <Stack.Screen name="AccountSucess" component={AccountSucess} options={{}} />
  </Stack.Navigator>
);

export default class root extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.darkGray} />
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
