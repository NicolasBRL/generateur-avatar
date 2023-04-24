import axios from "axios";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [avatar, setAvatar] = useState([]);

  useEffect(() => {
    getAvatar();
  }, []);

  const getAvatar = async () => {
    await axios
      .get("https://random-data-api.com/api/v2/users")
      .then((res) => setAvatar(res.data));
  };

  console.log(avatar);
  return (
    <View style={styles.container}>
      <Image source={{uri:avatar.avatar}} style={{width: 150, height: 150}} />
      <Text>Nom: {avatar.last_name}</Text>
      <Text>Prénom: {avatar.first_name}</Text>
      <Text>Adresse mail: {avatar.email}</Text>
      <Text>Date de Naissance: {avatar.date_of_birth}</Text>
      <Text>Genre: {avatar.gender}</Text>

      <Button
        onPress={getAvatar}
        title="Générer un avatar" color="#841584" accessibilityLabel="Générer un avatar"
      />

      <StatusBar style="auto" />
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
