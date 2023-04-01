import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';


export default function EditUserPage({ route, navigation }) {
  const [user, setUser] = React.useState(route.params.user);

  const handleSaveUser = () => {
    // Código criado para atividade de Nilson
    navigation.goBack();
  };

  return (
    <View>

<Header
  leftComponent={{ icon: 'arrow-left', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'EDITAR USUÁRIO', style: { color: '#fff' } }}
  rightComponent={<Icon name="home" type="feather" color="#fff" onPress={() => navigation.navigate('LoginPage')} />}
/>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Edit User Page</Text>
      <TextInput
        value={user.firstName}
        onChangeText={firstName => setUser({ ...user, firstName })}
        placeholder="First Name"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: '80%' }}
      />
      <TextInput
        value={user.lastName}
        onChangeText={lastName => setUser({ ...user, lastName })}
        placeholder="Last Name"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: '80%' }}
      />
      <TextInput
        value={user.email}
        onChangeText={email => setUser({ ...user, email })}
        placeholder="Email"
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: '80%' }}
      />
      <TextInput
        value={user.password}
        onChangeText={password => setUser({ ...user, password })}
        placeholder="Password"
        secureTextEntry
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginVertical: 8, width: '80%' }}
      />
      <TouchableOpacity onPress={handleSaveUser} style={{ backgroundColor: '#007AFF', borderRadius: 8, padding: 8, marginVertical: 8 }}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Save</Text>
      </TouchableOpacity>
    </View>
    </View>

  );
}
