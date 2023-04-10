import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/home';
import Favorites from '../pages/favorites';

import { Ionicons } from '@expo/vector-icons';

import { StackRoutes } from './stackRoutes';

const Tabs = createBottomTabNavigator();

export function Routes() {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#121212',
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    borderTopWidth: 0
                }
            }}
        >
            <Tabs.Screen
                name='HomeTab'
                component={StackRoutes}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='home' color={"#000"} size={size} />
                        }

                        return <Ionicons name='home-outline' color={color} size={size} />

                    }
                }}
            />

            <Tabs.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    tabBarIcon: ({ color, size, focused }) => {
                        if (focused) {
                            return <Ionicons name='heart' color={'#ff4141'} size={size} />
                        }

                        return <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}
            />


        </Tabs.Navigator>
    )
}