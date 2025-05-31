import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SearchHeader } from './src/components/Header/SearchHeader';
import { BottomNavigation } from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CurrentWhetherScreen, FiveDaysForcastScreen } from './src/pages';
import { Provider } from 'react-redux';
import store from './src/redux/store';

import './global.css';


function App(): React.JSX.Element {
 
  const Tab = createBottomTabNavigator();

  // return (
  //   <SafeAreaView className="flex-1 bg-white mt-32">
  //     <View>
  //       <Text>hello World</Text>
  //     </View>
  //   </SafeAreaView>
  // )


  return (
    <Provider store={store} >
  
    <SafeAreaView className='bg-white mt-8 flex h-full w-full' >
          <NavigationContainer>
            <Tab.Navigator 
              tabBar={(props) => <BottomNavigation {...props }/> }  
              initialRouteName="currentWhether"
              screenOptions={{
                header: ({ navigation, route, options }) => <SearchHeader title={options.title ?? route.name} navigation={navigation} />
              }}
            >
              <Tab.Screen  name="currentWhether" options={{
                title: "Current Whether",
              }} component={CurrentWhetherScreen} />
              <Tab.Screen name="fiveDaysForcast" 
                options={{
                  title: "Five Days Forcast"
                }} 
              component={FiveDaysForcastScreen} />
            </Tab.Navigator>
          </NavigationContainer>
          
    </SafeAreaView>
    </Provider>
    
  );
}

export default App;
