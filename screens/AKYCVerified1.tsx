import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const AKYCVerified1 = () => {
  return (
    <View style={styles.aKYCVerified}>
      <View style={styles.btnView}>
        <View style={styles.rectangleView} />
      </View>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
      />
      <Text style={styles.verifyPhraseText}>Verify Phrase</Text>
      <Text style={styles.enterTheFollowingWordFrom}>
        Enter the following word from your recovery phrase to complete the setup
        process
      </Text>
      <View style={styles.frameView}>
        <Text style={styles.word6Text}>Word #6</Text>
      </View>
      <View style={styles.frameView1}>
        <Text style={styles.didntSaveIt}>Didn’t Save it?</Text>
      </View>
      <View style={styles.frameView2}>
        <Text style={styles.startOverText}>Start Over</Text>
      </View>
      <View style={styles.btnView1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.createAccountText}>Create Account</Text>
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
    backgroundColor: "#c5cfd4",
    borderStyle: "solid",
    borderColor: "#c5cfd4",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  btnView: {
    position: "absolute",
    top: 319,
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
  verifyPhraseText: {
    position: "absolute",
    top: 130,
    left: 25,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
  },
  enterTheFollowingWordFrom: {
    position: "absolute",
    top: 185,
    left: 29,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    width: 313,
  },
  word6Text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    width: 313,
  },
  frameView: {
    position: "absolute",
    top: 286,
    left: 29,
    width: 313,
    height: 16,
  },
  didntSaveIt: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    width: 313,
  },
  frameView1: {
    position: "absolute",
    top: 384,
    left: 25,
    width: 313,
    height: 16,
  },
  startOverText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
    width: 313,
  },
  frameView2: {
    position: "absolute",
    top: 384,
    left: 120,
    width: 313,
    height: 16,
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
  btnView1: {
    position: "absolute",
    top: 738,
    left: 29,
    width: 340,
    height: 48,
  },
  aKYCVerified: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AKYCVerified1;
