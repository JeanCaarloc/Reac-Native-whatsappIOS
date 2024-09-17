import { Tabs } from "expo-router"
import FontAwesome from '@expo/vector-icons/FontAwesome'


export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'rgba(0, 122, 255, 1)',  }}>
            <Tabs.Screen
                name="status"
                options={{
                    title: 'Status',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="dot-circle-o" color={color} />
                }}

            />

            <Tabs.Screen
                name="calls"
                options={{
                    title: 'Calls',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="phone" color={color} />
                }}

            />
            <Tabs.Screen
                name="camera"
                options={{
                    title: 'Camera',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="camera" color={color} />
                }}

            />
            <Tabs.Screen
                name="chats"
                options={{
                    title: 'Chats',
                    headerTitleAlign:"center",
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="comments" color={color} />
                }}

            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="gear" color={color} />
                }}

            />
            
        </Tabs>
    )
}