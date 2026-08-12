import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthInput from '@/components/auth/AuthInput';
import AuthButton from '@/components/auth/AuthButton';
import { Colors } from '@/constants/colors';

export default function LoginScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <Text style={styles.forgotText}>Forgot password?</Text>
      </Pressable>

      <AuthButton title="Log in" />

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don’t have an account?</Text>
        <Link href="/(auth)/signup" asChild>
          <Pressable>
            <Text style={styles.link}> Sign up</Text>
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    paddingTop: 72,
    paddingBottom: 32,
  },
  forgot: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotText: {
    color: Colors.primaryDark,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 32,
  },
  footerText: {
    color: Colors.subText,
  },
  link: {
    color: Colors.primaryDark,
    fontWeight: '700',
  },
});