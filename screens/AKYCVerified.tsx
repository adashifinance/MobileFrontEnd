import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AKYCVerified = () => {
  return (
    <View style={styles.aKYCVerified}>
      <View style={styles.btnView}>
        <View style={styles.rectangleView} />
        <Text style={styles.finishText}>Finish</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright16.png")}
        />
      </View>
      <View style={styles.groupView1}>
        <View style={styles.rectangleView1} />
        <View style={styles.groupView}>
          <Text style={styles.congratulationsText}>Congratulations</Text>
          <Text style={styles.youCanStartStakingOnAdash}>
            You can start Staking on Adashi Finance
          </Text>
        </View>
      </View>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
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
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  finishText: {
    position: "absolute",
    top: 15,
    left: 85,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#127dd3",
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
    top: 319,
    left: 25,
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
    height: 167,
  },
  congratulationsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "center",
    width: 327,
  },
  youCanStartStakingOnAdash: {
    position: "absolute",
    top: 45,
    left: 37,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 254,
  },
  groupView: {
    position: "absolute",
    top: 52,
    left: 6,
    width: 327,
    height: 61,
  },
  groupView1: {
    position: "absolute",
    top: 134,
    left: 25,
    width: 340,
    height: 167,
  },
  aDASHIFiSquareTrans2Icon: {
    position: "absolute",
    top: 35,
    left: 139,
    width: 111,
    height: 49,
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

export default AKYCVerified;
