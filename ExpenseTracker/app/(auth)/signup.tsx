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

export default function SignupScreen() {
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
        image={require('@/assets/images/signup-illustration.png')}
        title="Create Your Account"
        subtitle="Join us and take control of your financial journey."
      />

      <View style={styles.row}>
        <View style={styles.halfInputLeft}>
          <AuthInput placeholder="First name" icon="person-outline" />
        </View>

        <View style={styles.halfInputRight}>
          <AuthInput placeholder="Last name" icon="person-outline" />
        </View>
      </View>

      <AuthInput placeholder="Email address" icon="mail-outline" />

      <AuthInput
        placeholder="Password"
        icon="lock-closed-outline"
        secureTextEntry
      />

      <AuthInput
        placeholder="Confirm password"
        icon="lock-closed-outline"
        secureTextEntry
      />

      <AuthButton title="Create account" />

      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: colors.subText }]}>
          Already have an account?
        </Text>

        <Link href="/(auth)/login" asChild>
          <Pressable>
            <Text style={[styles.link, { color: colors.primary }]}>
              {' '}
              Log in
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
    paddingTop: 56,
    paddingBottom: 32,
  },

  row: {
    flexDirection: 'row',
  },

  halfInputLeft: {
    flex: 1,
    marginRight: 8,
  },

  halfInputRight: {
    flex: 1,
    marginLeft: 8,
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