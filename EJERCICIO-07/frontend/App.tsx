import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View, Button  } from 'react-native';

const API_URL = 'http://172.22.28.50:3000';

export default function App() {
  const [mensaje, setMensaje] =
    useState<string>('Cargando…');

  const cargarMensaje = async () => {
      try {
        const respuesta = await fetch(API_URL + '/mensaje');
        const datos = await respuesta.json();
        setMensaje('🟢 ' + datos.texto);
      } catch (error) {
        setMensaje('🔴 Sin conexión con el backend');
      }
  };

  useEffect(()=> {
    cargarMensaje();
  },[]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Full Stack Status
      </Text>
      <Text style={styles.status}>{mensaje}</Text>
      <Button
        title="Recargar"
        onPress={cargarMensaje}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fffff'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    marginBottom: 20,
  },
});
