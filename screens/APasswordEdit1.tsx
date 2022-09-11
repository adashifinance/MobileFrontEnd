import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const APasswordEdit1 = () => {
  return (
    <View style={styles.aPasswordEdit}>
      <Text style={styles.changePasswordForSecurityR}>
        Change password for security reasons
      </Text>
      <Text style={styles.passwordChangeText}>Password change</Text>
      <View style={styles.rectangleView} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.passwordInputView}>
          <Text style={styles.newPasswordText}>New Password</Text>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineareyeIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineareye.png")}
          />
        </View>
        <View style={[styles.passwordInputView1, styles.mt16]}>
          <Text style={styles.confirmPasswordText}>Confirm Password</Text>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.vuesaxlineareyeIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxlineareye.png")}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView3} />
        <Text style={styles.stakeText}>Stake</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  changePasswordForSecurityR: {
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
  passwordChangeText: {
    position: "absolute",
    top: 46,
    left: 122,
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
  newPasswordText: {
    position: "absolute",
    top: 0,
    left: 3,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  rectangleView1: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  vuesaxlineareyeIcon: {
    position: "absolute",
    top: 35,
    left: 305,
    width: 24,
    height: 24,
  },
  passwordInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  confirmPasswordText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  vuesaxlineareyeIcon1: {
    position: "absolute",
    top: 35,
    left: 305,
    width: 24,
    height: 24,
  },
  passwordInputView1: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 170,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  stakeText: {
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
    top: 372,
    left: 25,
    width: 340,
    height: 48,
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

export default APasswordEdit1;
