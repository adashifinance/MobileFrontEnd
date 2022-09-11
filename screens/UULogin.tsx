import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";

const UULogin = () => {
  return (
    <View style={styles.uULoginView}>
      <Text style={styles.welcomeYourFavouriteWeb3S}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.blankLineText}> </Text>
        <Text style={styles.yourFavouriteText}>Your Favourite</Text>
        <Text style={styles.web3StakingsText}>Web3 Stakings</Text>
        <Text style={styles.appText}>App</Text>
      </Text>
      <Text style={styles.convertYourLocalCurrencyTo}>
        convert your local currency to crypto
      </Text>
      <Pressable style={styles.btnPressable}>
        <View style={styles.rectangleView} />
        <Text style={styles.importAccountText}>Import Account</Text>
      </Pressable>
      <Pressable style={styles.btnPressable1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.createAccountText}>Create Account</Text>
      </Pressable>
      <Text style={styles.storeAndGrowYourDigitalAs}>
        store and grow your digital assets
      </Text>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yourFavouriteText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  web3StakingsText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  appText: {
    margin: 0,
  },
  welcomeYourFavouriteWeb3S: {
    position: "absolute",
    top: 234,
    left: 87,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "center",
  },
  convertYourLocalCurrencyTo: {
    position: "absolute",
    top: 582,
    left: 51,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
    width: 289,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#3f3f3f",
    width: 340,
    height: 48,
  },
  importAccountText: {
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
  btnPressable: {
    position: "absolute",
    top: 733,
    left: 26,
    width: 340,
    height: 48,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  createAccountText: {
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
  btnPressable1: {
    position: "absolute",
    top: 669,
    left: 26,
    width: 340,
    height: 48,
  },
  storeAndGrowYourDigitalAs: {
    position: "absolute",
    top: 554,
    left: 76,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  aDASHIFiSquareTrans2Icon: {
    position: "absolute",
    top: 35,
    left: 139,
    width: 111,
    height: 49,
  },
  uULoginView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UULogin;
