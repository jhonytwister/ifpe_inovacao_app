import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage({ navigation }) {
  const [firstName, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [cpf, setCpf] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const firebaseConfig = {
    apiKey: "AIzaSyAiwczKUCTrTWPTilknTfkw6uyN9tria4A",
    authDomain: "meuapp2-b9d0c.firebaseapp.com",
    projectId: "meuapp2-b9d0c",
    storageBucket: "meuapp2-b9d0c.appspot.com",
    messagingSenderId: "855947484415",
    appId: "1:855947484415:web:20fc38c641cacf933ac0ca"
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  async function inserirDados() {
    axios.post('https://644c548917e2663b9d049ecb.mockapi.io/cliente/', {
      nome: firstName,
      cpf: cpf,
      email: email,
      telefone: telefone
    })
    .then(function (response) {
      navigation.goBack();
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        inserirDados();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View>
      <Header
        leftComponent={{ icon: 'arrow-left', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'CADASTRO', style: { color: '#fff' } }}
        rightComponent={<Icon name="home" type="feather" color="#fff" onPress={() => navigation.navigate('LoginPage')} />}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Signup Page</Text>
        <TextInput
          placeholder="Nome"
          value={firstName}
          onChangeText={setNome}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
        />
        <TextInput
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
        />
        <TextInput
          placeholder="Telefone"
          value={telefone}
          onChangeText={setTelefone}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
        />
        <TextInput
          placeholder="cpf"
          value={cpf}
          onChangeText={setCpf}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
        />
        <TouchableOpacity onPress={handleSignup} style={{ backgroundColor: '#007AFF', borderRadius: 8, padding: 8, marginVertical: 8 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ padding: 8, marginVertical: 8 }}>
          <Text>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}