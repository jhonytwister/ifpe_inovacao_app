import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default function SignupPage({ navigation }) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignup = () => {
    // Código criado para atividade de Nilson
    navigation.navigate('UsersList');
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
        placeholder="First name"
        value={firstName}
        onChangeText={setFirstName}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
      />
      <TextInput
        placeholder="Last name"
        value={lastName}
        onChangeText={setLastName}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: 300 }}
      />
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
