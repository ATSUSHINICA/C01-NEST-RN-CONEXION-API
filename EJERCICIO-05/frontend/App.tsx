import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://192.168.1.19:3000';

export default function App() {
  const cargarMensaje = async () => {
    const respuesta = await fetch(
      API_URL + '/mensaje'
    );

    const datos = await respuesta.json();
    console.log(datos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Mi primera conexión</Text>

      <Button
        title="Conectar con Nest"
        onPress={cargarMensaje}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop : 30
  },

  safeArea:{
    flex: 1, // Contenedor principal del contenido
    paddingHorizontal: 30,
    
  },

  title:{
    fontWeight:'800',
    fontSize: 30
  },
  
  subtitle:{
    marginTop:20,
    fontSize: 20,
    color: '#b3b2b2'
  },
  
  card:{
    backgroundColor:'#dff8ff',
    padding: 25,
    borderRadius: 10,
    marginTop:20,
  },

  aviso:{
    fontSize: 15,
  },
  
  estado:{
    fontWeight:'700',
    marginTop:20,
  },

  botton:{
    backgroundColor:'#3da8ff',
    padding: 20,
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 10
  },

  bottonText:{
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 20
  }
});
