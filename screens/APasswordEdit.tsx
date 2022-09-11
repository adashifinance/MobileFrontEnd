import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const APasswordEdit = () => {
  return (
    <View style={styles.aPasswordEdit}>
      <Text style={styles.changePINForSecurityReason}>
        Change PIN for security reasons
      </Text>
      <Text style={styles.pINChangeText}>PIN change</Text>
      <View style={styles.rectangleView} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.passwordInputView}>
          <View style={styles.rectangleView1} />
        </View>
        <View style={[styles.passwordInputView1, styles.ml20]}>
          <View style={styles.rectangleView2} />
        </View>
        <View style={[styles.passwordInputView2, styles.ml20]}>
          <View style={styles.rectangleView3} />
        </View>
        <View style={[styles.passwordInputView3, styles.ml20]}>
          <View style={styles.rectangleView4} />
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView5} />
        <Text style={styles.confirmText}>Confirm</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright.png")}
        />
      </View>
      <Text style={styles.newPINText}>New PIN</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  changePINForSecurityReason: {
    position: "absolute",
    top: 117,
    left: 58,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 275,
  },
  pINChangeText: {
    position: "absolute",
    top: 46,
    left: 147,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
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
    position: "relative",
    width: 70,
    height: 71.67,
    flexShrink: 0,
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
    position: "relative",
    width: 70,
    height: 71.67,
    flexShrink: 0,
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
    position: "relative",
    width: 70,
    height: 71.67,
    flexShrink: 0,
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
    position: "relative",
    width: 70,
    height: 71.67,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 202,
    left: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    top: 317.67,
    left: 25,
    width: 340,
    height: 48,
  },
  newPINText: {
    position: "absolute",
    top: 170,
    left: 25,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
  },
  aPasswordEdit: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default APasswordEdit;
