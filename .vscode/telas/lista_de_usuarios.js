import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');

  const handleAddUser = () => {
    if (name) {
      setUsers([...users, { id: Date.now(), name }]);
      setName('');
    }
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.userItem}>
        <Text style={styles.userName}>{item.name}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite o nome do usuário"
          onChangeText={(value) => setName(value)}
          value={name}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleAddUser} style={styles.addButton}>
          <Text style={styles.addButtonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    flex: 1,
  },
  addButton: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  userItem: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 16,
  },
});

export default UserList;
