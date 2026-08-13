import { Stack } from 'expo-router';
import { ThemeProvider } from '@/context/ThemeContext';

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen
        name="add-transaction"
        options={{
          presentation: 'card',
          animation: 'slide_from_right',
        }}
      />
        <Stack.Screen name="(auth)" />
      </Stack>
    </ThemeProvider>
  );
}