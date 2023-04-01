import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default function LoginPage({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Handle login logic here
    // Example: validate email and password, then navigate to UsersListPage
    navigation.navigate('Lista');
  };

  return (
    <View >
<Header
  centerComponent={{ text: 'PÁGINA DE LOGIN', style: { color: '#fff' } }}
/>

<View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>



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
      <TouchableOpacity onPress={() => navigation.navigate('Singup')} style={{ padding: 8, marginVertical: 8 }}>
        <Text>Não tem uma conta? Inscreva-se</Text>
      </TouchableOpacity>
    </View>
    </View>

  );
}
