import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const AProfileEdit = () => {
  return (
    <View style={styles.aProfileEdit}>
      <View style={styles.frameView}>
        <View style={styles.emailphoneInputView}>
          <Text style={styles.firstNameText}>First name</Text>
          <View style={styles.rectangleView} />
        </View>
        <View style={[styles.passwordInputView, styles.mt16]}>
          <Text style={styles.middleNameOptional}>Middle name (optional)</Text>
          <View style={styles.rectangleView1} />
        </View>
        <View style={[styles.passwordInputView1, styles.mt16]}>
          <Text style={styles.lastNameText}>Last name</Text>
          <View style={styles.rectangleView2} />
        </View>
        <View style={[styles.passwordInputView2, styles.mt16]}>
          <Text style={styles.phoneNumberText}>Phone number</Text>
          <View style={styles.rectangleView3} />
        </View>
        <View style={[styles.passwordInputView3, styles.mt16]}>
          <Text style={styles.emilAddressText}>Emil address</Text>
          <View style={styles.rectangleView4} />
        </View>
        <View style={[styles.passwordInputView4, styles.mt16]}>
          <Text style={styles.dateOfBirth}>Date of Birth</Text>
          <View style={styles.rectangleView5} />
          <View style={styles.rectangleView6} />
          <View style={styles.rectangleView7} />
        </View>
        <View style={[styles.passwordInputView5, styles.mt16]}>
          <Text style={styles.genderText}>Gender</Text>
          <View style={styles.rectangleView8} />
          <Image
            style={styles.vuesaxlineararrowDownIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown.png")}
          />
        </View>
      </View>
      <Text style={styles.editYourPersonalInformation}>
        Edit your personal information
      </Text>
      <Text style={styles.personalText}>Personal</Text>
      <View style={styles.rectangleView9} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <View style={styles.btnView}>
        <View style={styles.rectangleView10} />
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
  firstNameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1.6,
    width: 340,
    height: 48,
  },
  emailphoneInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  middleNameOptional: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
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
  passwordInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  lastNameText: {
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
  passwordInputView1: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  phoneNumberText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView3: {
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
  passwordInputView2: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  emilAddressText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView4: {
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
  passwordInputView3: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  dateOfBirth: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView5: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 105,
    height: 48,
  },
  rectangleView6: {
    position: "absolute",
    top: 23,
    left: 118,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 105,
    height: 48,
  },
  rectangleView7: {
    position: "absolute",
    top: 23,
    left: 235,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 105,
    height: 48,
  },
  passwordInputView4: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  genderText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView8: {
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
  vuesaxlineararrowDownIcon: {
    position: "absolute",
    top: 35,
    left: 302,
    width: 24,
    height: 24,
  },
  passwordInputView5: {
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
  editYourPersonalInformation: {
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
  personalText: {
    position: "absolute",
    top: 46,
    left: 159,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView9: {
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
    height: "2.61%",
    width: "6.15%",
    top: "4.78%",
    right: "84.36%",
    bottom: "92.61%",
    left: "9.49%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  rectangleView10: {
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
    top: 807,
    left: 25,
    width: 340,
    height: 48,
  },
  aProfileEdit: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 920,
    overflow: "hidden",
  },
});

export default AProfileEdit;
