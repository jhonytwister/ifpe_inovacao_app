import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = async () => {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Autenticação bem sucedida, redireciona o usuário para a página de lista
      navigation.navigate('UserList');
    } catch (error) {
      console.error(error);
      alert('Email ou senha incorretos!');
    }
  };

  return (
    <View>
      <Header
        centerComponent={{ text: 'PÁGINA DE LOGIN', style: { color: '#fff' } }}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
        />
        <TouchableOpacity onPress={handleLogin} style={{ backgroundColor: '#007AFF', borderRadius: 8, padding: 8, marginVertical: 8 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ padding: 8, marginVertical: 8 }}>
          <Text>Não tem uma conta? Inscreva-se agora</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
