import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://172.22.28.50:3000';
let ultimoLike: number;
export default function App() {
  const [likes, setLikes] = useState(ultimoLike);

  const darLike = async () => {
    const respuesta = await fetch(
      API_URL + '/mascotas/1/like',
      { method: 'PATCH' }
    );

    const mascota = await respuesta.json();
    setLikes(mascota.likes);
    ultimoLike = likes;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>🐶 Toby</Text>
      <Text style={styles.likes}>
        ❤️ {likes} likes
      </Text>
      <Button
        title="❤️ Me gusta"
        onPress={darLike}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: { fontSize: 28, fontWeight: '700' },
  likes: { fontSize: 20, marginVertical: 18 },
});