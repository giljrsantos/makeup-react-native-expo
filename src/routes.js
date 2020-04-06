import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppMakeup = createStackNavigator();

import Products from './pages/products';
import Detailproduct from './pages/detail/Detailproduct';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppMakeup.Navigator screenOptions={{ headerShown: false }}>
                <AppMakeup.Screen name="Products" component={Products} />
                <AppMakeup.Screen name="Detailproduct" component={Detailproduct} />                                
            </AppMakeup.Navigator>
        </NavigationContainer>
    );
};