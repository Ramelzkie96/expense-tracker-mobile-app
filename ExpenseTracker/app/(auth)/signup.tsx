import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import AuthHeader from '@/components/auth/AuthHeader';
import AuthInput from '@/components/auth/AuthInput';
import AuthButton from '@/components/auth/AuthButton';
import { Colors } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <AuthHeader
        image={require('@/assets/images/signup-illustration.png')}
        title="Create Your Account"
        subtitle="Join us and take control of your financial journey."
      />

      <View style={styles.row}>
        <View style={{ flex: 1, marginRight: 8 }}>
          <AuthInput placeholder="First name" icon="person-outline" />
        </View>
        <View style={{ flex: 1, marginLeft: 8 }}>
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
        <Text style={styles.footerText}>Already have an account?</Text>
        <Link href="/(auth)/login" asChild>
          <Pressable>
            <Text style={styles.link}> Log in</Text>
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
    paddingTop: 56,
    paddingBottom: 32,
  },
  row: {
    flexDirection: 'row',
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 4,
    marginBottom: 24,
  },
  termsText: {
    flex: 1,
    marginLeft: 10,
    color: Colors.subText,
    lineHeight: 20,
  },
  linkInline: {
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