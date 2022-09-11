import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AAddBank = () => {
  return (
    <View style={styles.aAddBank}>
      <View style={styles.btnView}>
        <View style={styles.rectangleView} />
      </View>
      <Text style={styles.chatWithUs}>Chat with Us</Text>
      <View style={styles.rectangleView1} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <View style={styles.passwordInputView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.textMessage}>Text message</Text>
      </View>
      <View style={styles.btnView1}>
        <View style={styles.rectangleView3} />
      </View>
      <View style={styles.btnView2}>
        <View style={styles.rectangleView4} />
      </View>
      <View style={styles.btnView3}>
        <View style={styles.rectangleView5} />
      </View>
      <View style={styles.btnView4}>
        <View style={styles.rectangleView6} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#2097f6",
    width: 250,
    height: 95,
  },
  btnView: {
    position: "absolute",
    top: 163,
    left: 115,
    width: 250,
    height: 95,
    opacity: 0.6,
  },
  chatWithUs: {
    position: "absolute",
    top: 46,
    left: 142,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView1: {
    position: "absolute",
    top: 32,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 47,
    height: 48,
  },
  vuesaxlineararrowLeftIcon: {
    position: "absolute",
    height: "2.84%",
    width: "6.15%",
    top: "5.21%",
    right: "84.36%",
    bottom: "91.94%",
    left: "9.49%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  textMessage: {
    position: "absolute",
    top: 16,
    left: 16,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#cbd9df",
    textAlign: "center",
  },
  passwordInputView: {
    position: "absolute",
    top: 780,
    left: 25,
    width: 340,
    height: 48,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#2097f6",
    width: 250,
    height: 95,
  },
  btnView1: {
    position: "absolute",
    top: 643,
    left: 115,
    width: 250,
    height: 95,
    opacity: 0.6,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#2097f6",
    width: 250,
    height: 95,
  },
  btnView2: {
    position: "absolute",
    top: 403,
    left: 115,
    width: 250,
    height: 95,
    opacity: 0.6,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(77, 137, 124, 0.5)",
    width: 250,
    height: 95,
  },
  btnView3: {
    position: "absolute",
    top: 523,
    left: 25,
    width: 250,
    height: 95,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(77, 137, 124, 0.5)",
    width: 250,
    height: 95,
  },
  btnView4: {
    position: "absolute",
    top: 283,
    left: 25,
    width: 250,
    height: 95,
  },
  aAddBank: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AAddBank;
