import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUTransactionsDetails3 = () => {
  return (
    <View style={styles.uUTransactionsDetails}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
        </View>
      </View>
      <Image
        style={styles.backIcon}
        resizeMode="cover"
        source={require("../assets/back.png")}
      />
      <Text style={styles.stakingsDetailsText}>Stakings Details</Text>
      <Text style={styles.targetStakingsDetails}>Target Stakings Details</Text>
      <Text style={styles.dateText}>Date</Text>
      <Text style={styles.thFebruary2022}>6th February 2022</Text>
      <Text style={styles.timeText}>Time</Text>
      <Text style={styles.text}>12:30:32</Text>
      <Text style={styles.stakingsPlanText}>Stakings Plan</Text>
      <Text style={styles.targetText}>Target</Text>
      <Text style={styles.targetAmountText}>Target Amount</Text>
      <View style={styles.lineView} />
      <View style={styles.lineView1} />
      <Text style={styles.descriptionText}>Description</Text>
      <Text style={styles.n10000000Text}>N100,000.00</Text>
      <Text style={styles.toPayTheHouseRent}>To pay the house rent</Text>
      <Text style={styles.amountStakedText}>Amount Staked</Text>
      <Text style={styles.text1}>$21,000.50</Text>
      <View style={styles.btnView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.withdrawText}>Withdraw</Text>
      </View>
      <View style={styles.btnView1}>
        <View style={styles.rectangleView3} />
        <Text style={styles.addToStakings}>Add to Stakings</Text>
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
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 51.99,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 479,
  },
  groupView: {
    position: "relative",
    width: 340,
    height: 479,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 125,
    left: 25,
    height: 479,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  backIcon: {
    position: "absolute",
    top: 32,
    left: 25,
    width: 47,
    height: 48,
  },
  stakingsDetailsText: {
    position: "absolute",
    top: 46,
    left: 132,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  targetStakingsDetails: {
    position: "absolute",
    top: 147,
    left: 103,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
  },
  dateText: {
    position: "absolute",
    top: 215,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFebruary2022: {
    position: "absolute",
    top: 215,
    left: 211,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
  },
  timeText: {
    position: "absolute",
    top: 275,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  text: {
    position: "absolute",
    top: 275,
    left: 278,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
  },
  stakingsPlanText: {
    position: "absolute",
    top: 335,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  targetText: {
    position: "absolute",
    top: 335,
    left: 285,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
  },
  targetAmountText: {
    position: "absolute",
    top: 395,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  lineView: {
    position: "absolute",
    top: 450,
    left: 56,
    borderStyle: "solid",
    borderColor: "#cbd9df",
    borderTopWidth: 10,
    width: 274,
    height: 10,
  },
  lineView1: {
    position: "absolute",
    top: 450,
    left: 56,
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderTopWidth: 10,
    width: 102,
    height: 10,
  },
  descriptionText: {
    position: "absolute",
    top: 560,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  n10000000Text: {
    position: "absolute",
    top: 395,
    left: 248,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
  },
  toPayTheHouseRent: {
    position: "absolute",
    top: 560,
    left: 189,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
  },
  amountStakedText: {
    position: "absolute",
    top: 500,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  text1: {
    position: "absolute",
    top: 500,
    left: 260,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
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
  withdrawText: {
    position: "absolute",
    top: 15,
    left: 85,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 171,
  },
  btnView: {
    position: "absolute",
    top: 712,
    left: 25,
    width: 340,
    height: 48,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#e4c624",
    width: 340,
    height: 48,
  },
  addToStakings: {
    position: "absolute",
    top: 15,
    left: 85,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 171,
  },
  btnView1: {
    position: "absolute",
    top: 648,
    left: 25,
    width: 340,
    height: 48,
  },
  uUTransactionsDetails: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUTransactionsDetails3;
