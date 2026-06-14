import { Stack } from "expo-router";
import { StackScreen } from "expo-router/build/layouts/stack-utils";

export default function RootLayout() {
  return(
    <Stack 
      screenOptions={{
        headerShown: false
      }}
    >
      <StackScreen name='index'/>
    </Stack>
  )
}