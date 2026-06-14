import { Entypo } from '@react-native-vector-icons/entypo';
import { Tabs } from "expo-router";
import { colors } from '../styles/global';

export default function TabLayout() {
  return(
    <Tabs screenOptions={{
         headerShown: false,
         tabBarStyle: {
          backgroundColor: colors.background,
        },
         tabBarActiveTintColor: colors.primary,
        }}>
        <Tabs.Screen
            name='index'
            options={{
                title:'For You',
                tabBarIcon: ({ color, size }) => <Entypo name="book" color={color} size={size} />
            }}
        />
        <Tabs.Screen
            name='articles'
            options={{
                title:'Articles',
                tabBarIcon: ({ color, size }) => <Entypo name="bookmark" color={color} size={size} />
            }}
        />
        <Tabs.Screen
            name='notifications'
            options={{
                title:'Notifications',
                tabBarIcon: ({ color, size }) => <Entypo name="bell" color={color} size={size} />
            }}
        />
        <Tabs.Screen
            name='profileSettings'
            options={{
                title:'Profile',
                tabBarIcon: ({ color, size }) => <Entypo name="cog" color={color} size={size} />
            }}
        />
    </Tabs>
  );
}