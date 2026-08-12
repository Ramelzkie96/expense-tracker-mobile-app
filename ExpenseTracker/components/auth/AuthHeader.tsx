import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors } from '@/constants/colors';

type Props = {
  image: any;
  title: string;
  subtitle: string;
};

export default function AuthHeader({ image, title, subtitle }: Props) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 32,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.text,
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    color: Colors.subText,
    paddingHorizontal: 24,
  },
});