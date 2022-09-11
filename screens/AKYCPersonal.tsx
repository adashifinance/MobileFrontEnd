import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AKYCPersonal = () => {
  return (
    <View style={styles.aKYCPersonal}>
      <View style={styles.emailphoneInputView}>
        <View style={styles.rectangleView} />
      </View>
      <Text style={styles.nearText}>.near</Text>
      <Text style={styles.yournamenearText}>yourname.near</Text>
      <Text style={styles.yourAccountIDCanContainAn}>
        <Text style={styles.yourAccountID}>
          Your account ID can contain any of the following:
        </Text>
        <Text style={styles.blankLineText}> </Text>
        <Text style={styles.lowercaseCharactersA}>
          Lowercase characters (a - z)
        </Text>
        <Text style={styles.digits0}>Digits (0 - 9)</Text>
        <Text style={styles.characters}>
          Characters (_ -) can be used as separators
        </Text>
        <Text style={styles.endWithNear}>End with (.near)</Text>
      </Text>
      <View style={styles.btnView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.nextText}>Next</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright21.png")}
        />
      </View>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
      />
      <Text style={styles.reserveAccountID}>Reserve Account ID</Text>
      <Text style={styles.enterAnAccountIDToUseWit}>
        <Text style={styles.enterAnAccount}>
          Enter an account ID to use with NEAR account.
        </Text>
        <Text style={styles.yourAccountID1}>
          Your account ID will be used for all NEAR
        </Text>
        <Text style={styles.operationsIncludingSend}>
          operations including send and receiving assets
        </Text>
      </Text>
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-68.png")}
      />
      <View style={styles.btnView1}>
        <View style={styles.rectangleView2} />
        <Text style={styles.reserveMyAccoundID}>Reserve My accound ID</Text>
      </View>
      <Image
        style={styles.backIcon}
        resizeMode="cover"
        source={require("../assets/back.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 0,
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
    position: "absolute",
    top: 312,
    left: 25,
    width: 340,
    height: 48,
  },
  nearText: {
    position: "absolute",
    top: 275,
    left: 56,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
  },
  yournamenearText: {
    position: "absolute",
    top: 328,
    left: 49,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#c5cfd4",
    textAlign: "left",
  },
  yourAccountID: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  blankLineText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  lowercaseCharactersA: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  digits0: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  characters: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  endWithNear: {
    margin: 0,
  },
  yourAccountIDCanContainAn: {
    position: "absolute",
    top: 397,
    left: 40,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#3f3f3f",
    textAlign: "left",
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
  nextText: {
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
    top: 1049,
    left: 25,
    width: 340,
    height: 48,
  },
  aDASHIFiSquareTrans2Icon: {
    position: "absolute",
    top: 35,
    left: 139,
    width: 111,
    height: 49,
  },
  reserveAccountID: {
    position: "absolute",
    top: 134,
    left: 53,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "center",
  },
  enterAnAccount: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  yourAccountID1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  operationsIncludingSend: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  enterAnAccountIDToUseWit: {
    position: "absolute",
    top: 181,
    left: 28,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 319,
  },
  ellipseIcon: {
    position: "absolute",
    top: 275,
    left: 30,
    width: 19,
    height: 19,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  reserveMyAccoundID: {
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
  btnView1: {
    position: "absolute",
    top: 740,
    left: 25,
    width: 340,
    height: 48,
  },
  backIcon: {
    position: "absolute",
    top: 33,
    left: 16,
    width: 47,
    height: 48,
  },
  aKYCPersonal: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AKYCPersonal;
