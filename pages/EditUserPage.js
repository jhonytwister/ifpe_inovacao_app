import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import axios from 'axios';

export default function EditUserPage({ route, navigation }) {
  const [user, setUser] = useState(route.params.user);

  const handleSaveUser = async () => {
    try {
      const response = await axios.put(`https://644c548917e2663b9d049ecb.mockapi.io/cliente/${user.id}`, user);
      console.log(response.data);
      navigation.goBack();
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(`https://644c548917e2663b9d049ecb.mockapi.io/cliente/${user.id}`);
      console.log(response.data);
      navigation.goBack();
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <View>
      <Header
        leftComponent={{ icon: 'arrow-left', color: '#fff', iconStyle: { color: '#fff' }, onPress: () => navigation.goBack() }}
        centerComponent={{ text: 'EDITAR USUÁRIO', style: { color: '#fff' } }}
        rightComponent={<Icon name="home" type="feather" color="#fff" onPress={() => navigation.navigate('LoginPage')} />}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Editar Usuario</Text>
        <TextInput
          value={user.nome}
          onChangeText={nome => setUser({ ...user, nome })}
          placeholder="Nome"
          style={styles.input}
        />
        <TextInput
          value={user.cpf}
          onChangeText={cpf => setUser({ ...user, cpf })}
          placeholder="Cpf"
          style={styles.input}
        />
        <TextInput
          value={user.email}
          onChangeText={email => setUser({ ...user, email })}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={user.telefone}
          onChangeText={telefone => setUser({ ...user, telefone })}
          placeholder="Telefone"
          style={styles.input}
        />
        <TextInput
          value={user.id}
          onChangeText={id => setUser({ ...user, id })}
          placeholder="Id"
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSaveUser} style={styles.button}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteUser} style={[styles.button, { backgroundColor: '#FF0000' }]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 8,
    marginVertical: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
};
