import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUWithdraw = () => {
  return (
    <View style={styles.uUWithdrawView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.withdrawText}>Withdraw</Text>
      <View style={styles.passwordInputView}>
        <View style={styles.rectangleView1} />
      </View>
      <View style={styles.passwordInputView1}>
        <View style={styles.rectangleView2} />
      </View>
      <View style={styles.passwordInputView2}>
        <View style={styles.rectangleView3} />
      </View>
      <View style={styles.passwordInputView3}>
        <View style={styles.rectangleView4} />
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView5} />
        <Text style={styles.confirmText}>Confirm</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright19.png")}
        />
      </View>
      <Text style={styles.pINRequiredText}>PIN required</Text>
      <Text style={styles.pleaseInputYourPinToConfi}>
        please input your pin to confirm transaction
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
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
  withdrawText: {
    position: "absolute",
    top: 46,
    left: 154,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1.6,
    width: 70,
    height: 71.67,
  },
  passwordInputView: {
    position: "absolute",
    top: 258,
    left: 25,
    width: 70,
    height: 71.67,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 70,
    height: 71.67,
  },
  passwordInputView1: {
    position: "absolute",
    top: 258,
    left: 115,
    width: 70,
    height: 71.67,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 70,
    height: 71.67,
  },
  passwordInputView2: {
    position: "absolute",
    top: 258,
    left: 205,
    width: 70,
    height: 71.67,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 70,
    height: 71.67,
  },
  passwordInputView3: {
    position: "absolute",
    top: 258,
    left: 295,
    width: 70,
    height: 71.67,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  confirmText: {
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
  btnView: {
    position: "absolute",
    top: 373.67,
    left: 25,
    width: 340,
    height: 48,
  },
  pINRequiredText: {
    position: "absolute",
    top: 134,
    left: 104,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "center",
  },
  pleaseInputYourPinToConfi: {
    position: "absolute",
    top: 179,
    left: 57,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 277,
  },
  uUWithdrawView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUWithdraw;
