import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/colors';

type Props = {
  placeholder: string;
  icon: keyof typeof Ionicons.glyphMap;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  returnKeyType?: 'next' | 'done';
};

export default function AuthInput({
  placeholder,
  icon,
  secureTextEntry,
  keyboardType = 'default',
  autoCapitalize = 'none',
  returnKeyType = 'done',
}: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name={icon} size={20} color="#6B7280" />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        returnKeyType={returnKeyType}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    paddingHorizontal: 16,
    height: 56,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
    color: Colors.text,
  },
});