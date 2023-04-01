import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { Icon } from 'react-native-elements';

export default function UserListPage({ navigation }) {
  const [users, setUsers] = React.useState([
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', password: '123456' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com', password: '123456' },
    { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bobsmith@example.com', password: '123456' },
  ]);

  const handleEditUser = (user) => {
    // Handle edit user logic here
    // Example: navigate to EditUserPage with user data
    navigation.navigate('EditUser', { user });
  };

  const renderUser = ({ item }) => (
    <TouchableOpacity onPress={() => handleEditUser(item)} style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text>{item.firstName} {item.lastName}</Text>
      <Text style={{ color: '#777' }}>{item.email}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header
        leftComponent={<Icon name="arrow-left" type="feather" color="#fff" onPress={() => navigation.goBack()} />}
        centerComponent={{ text: 'LISTA DE USUÁRIOS', style: { color: '#fff' } }}
        rightComponent={<Icon name="home" type="feather" color="#fff" onPress={() => navigation.navigate('LoginPage')} />}
      />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>User List Page</Text>
        <FlatList
          data={users}
          keyExtractor={item => item.id.toString()}
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