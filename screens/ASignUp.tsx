import * as React from "react";
import { Image, StyleSheet, Text, Pressable, View } from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";

const ASignUp = () => {
  return (
    <View style={styles.aSignUp}>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
      />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.fillTheFormToCreateAnAcc}>
        Fill the form to create an account
      </Text>
      <RNPTextInput
        style={styles.frameRNPTextInput}
        placeholder="Password"
        label="Confirm Password"
        mode="outlined"
        placeholderTextColor="#6a6a6a"
        theme={{ colors: { text: "#6a6a6a" } }}
      />
      <Pressable style={styles.btnPressable}>
        <View style={styles.rectangleView} />
        <Text style={styles.createAnAccount}>Create an account</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright1.png")}
        />
      </Pressable>
      <Text style={styles.areadyHaveAnAccountLogIn}>
        <Text style={styles.areadyHaveAn}>{`Aready have an account? `}</Text>
        <Text style={styles.logInText}>Log in</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  aDASHIFiSquareTrans2Icon: {
    position: "absolute",
    top: 35,
    left: 139,
    width: 111,
    height: 49,
  },
  welcomeText: {
    position: "absolute",
    top: 134,
    left: 126,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "center",
  },
  fillTheFormToCreateAnAcc: {
    position: "absolute",
    top: 179,
    left: 85,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 221,
  },
  frameRNPTextInput: {
    position: "absolute",
    top: 301,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  createAnAccount: {
    position: "absolute",
    top: 15,
    left: 84,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 171,
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 12,
    left: 305,
    width: 24,
    height: 24,
  },
  btnPressable: {
    position: "absolute",
    top: 531,
    left: 25,
    width: 340,
    height: 48,
  },
  areadyHaveAn: {
    color: "#6a6a6a",
  },
  logInText: {
    color: "#127dd3",
  },
  areadyHaveAnAccountLogIn: {
    position: "absolute",
    top: 623,
    left: 82,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    textAlign: "center",
  },
  aSignUp: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default ASignUp;
