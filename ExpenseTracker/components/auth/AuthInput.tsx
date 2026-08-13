import { View, TextInput, StyleSheet, useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'next' | 'done';
};

const theme = {
  light: {
    background: '#FFFFFF',
    border: '#E5E7EB',
    text: '#111827',
    placeholder: '#9CA3AF',
    icon: '#6B7280',
  },
  dark: {
    background: '#111827',
    border: '#374151',
    text: '#F9FAFB',
    placeholder: '#9CA3AF',
    icon: '#9CA3AF',
  },
};

export default function AuthInput({
  placeholder,
  icon,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'done',
}: Props) {
  const colorScheme = useColorScheme();
  const colors = theme[colorScheme ?? 'light'];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
          borderColor: colors.border,
        },
      ]}
    >
      <Ionicons name={icon} size={20} color={colors.icon} />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        style={[styles.input, { color: colors.text }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 16,
  },

  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
});