import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const API_URL = 'http://192.168.1.19:3000';

export default function App() {

// 1. Creamos la variable de estado para guardar la conexión
  const [estado, setEstado] = useState<string>('🔴 Sin conectar');
  const [datosMensaje, setDatosMensaje] = useState<string>('Sin datos');

  // 2. Función corregida
  const verificarConexion = async () => {
    try {
      const respuesta = await fetch(API_URL + '/mensaje');
      const datos = await respuesta.json(); 

      setDatosMensaje(datos.texto);

      if (datos.texto === '¡Conexión conseguida! 🚀') {
        setEstado('🟢 Conectado ✓');
      } else {
        setEstado('🔴 Sin conectar');
      }
    } catch (error) {
      console.error('Error de red:', error);
      setEstado('🔴 Sin conectar');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <Text style={styles.title}>C01 · NEST + RN</Text>
        <Text style={styles.subtitle}>RN → GET/mensaje</Text>

      </View>
      <View style={styles.card}>
        <Text style={styles.aviso}>Datos recibidos desde NestJS</Text>
        <Text style={styles.estado}>Estado: {estado}</Text>
      </View>


      <Pressable style={styles.botton} onPress={verificarConexion}>
        <Text style={styles.bottonText}>ACCIÓN PRINCIPAL</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop : 20
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
