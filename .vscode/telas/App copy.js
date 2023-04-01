import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica de autenticação do usuário
  };

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para navegar para a página de registro
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        onChangeText={(value) => setEmail(value)}
        value={email}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={(value) => setPassword(value)}
        value={password}
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleRegister} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
