import { Pressable, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';

type Props = {
  title: string;
  onPress?: () => void;
};

export default function AuthButton({ title, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});