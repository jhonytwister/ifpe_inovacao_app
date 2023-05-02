import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import { getAuth, signOut } from 'firebase/auth';

export default function UserListPage({ navigation }) {
  const [users, setUsers] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    axios.get('https://644c548917e2663b9d049ecb.mockapi.io/cliente/')
      .then(response => {
        const data = response.data;
        const mappedData = data.map(item => ({
          nome: item.nome,
          cpf: item.cpf,
          email: item.email,
          telefone: item.telefone,
          id: item.id,
        }));
        setUsers(mappedData);
      })
      .catch(error => console.log(error));
  }, [isFocused]);

  const handleEditUser = (user) => {
    navigation.navigate('EditUser', { user });
  };

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigation.navigate('LoginPage');
    } catch (error) {
      console.error(error);
    }
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity onPress={() => handleEditUser(item)} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.nome}</Text>
      <Text>{item.cpf}</Text>
      <Text>{item.email}</Text>
      <Text>{item.telefone}</Text>
      <Text>{item.id}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<Icon name="arrow-left" type="feather" color="#fff" onPress={() => navigation.goBack()} />}
        centerComponent={{ text: 'LISTA DE USUÁRIOS', style: { color: '#fff' } }}
        rightComponent={<Icon name="log-out" type="feather" color="#fff" onPress={handleLogout} />}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
          data={users}
          keyExtractor={item => item.nome}
          renderItem={renderUser}
          style={{ width: '100%' }}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{ backgroundColor: '#007AFF', borderRadius: 8, padding: 8, marginVertical: 8 }}>
          <Text style={{ color: '#fff', textAlign: 'center' }}>Add user</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
