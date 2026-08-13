import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { Link } from 'expo-router';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthInput from '@/components/auth/AuthInput';
import AuthButton from '@/components/auth/AuthButton';

const theme = {
  light: {
    background: '#FFFFFF',
    text: '#111827',
    subText: '#6B7280',
    primary: '#16A34A',
  },
  dark: {
    background: '#030712',
    text: '#F9FAFB',
    subText: '#9CA3AF',
    primary: '#22C55E',
  },
};

export default function LoginScreen() {
  const colorScheme = useColorScheme();
  const colors = theme[colorScheme ?? 'light'];

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
    >
      <AuthHeader
        image={require('@/assets/images/login-illustration.png')}
        title="Welcome Back 👋"
        subtitle="Log in to continue tracking your expenses and manage your finances."
      />

      <AuthInput placeholder="Email address" icon="mail-outline" />

      <AuthInput
        placeholder="Password"
        icon="lock-closed-outline"
        secureTextEntry
      />

      <Pressable style={styles.forgot}>
        <Text style={[styles.forgotText, { color: colors.primary }]}>
          Forgot password?
        </Text>
      </Pressable>

      <AuthButton title="Log in" />

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.subText }]}>
          Don’t have an account?
        </Text>

        <Link href="/(auth)/signup" asChild>
          <Pressable>
            <Text style={[styles.link, { color: colors.primary }]}>
              {' '}
              Sign up
            </Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 32,
  },

  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },

  forgotText: {
    fontWeight: '600',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },

  footerText: {
    fontSize: 15,
  },

  link: {
    fontWeight: '700',
    fontSize: 15,
  },
});