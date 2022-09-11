import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUTransactionsDetails4 = () => {
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
      <Text style={styles.regularStakingsDetails}>
        Regular Stakings Details
      </Text>
      <Text style={styles.dateText}>Date</Text>
      <Text style={styles.thFebruary2022}>6th February 2022</Text>
      <Text style={styles.timeText}>Time</Text>
      <Text style={styles.text}>12:30:32</Text>
      <Text style={styles.stakingsPlanText}>Stakings Plan</Text>
      <Text style={styles.regularText}>Regular</Text>
      <Text style={styles.amountText}>Amount</Text>
      <Text style={styles.text1}>$21,000.50</Text>
      <Text style={styles.descriptionText}>Description</Text>
      <Text style={styles.toGetNewShoes}>To Get new shoes</Text>
      <View style={styles.btnView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.withdrawText}>Withdraw</Text>
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
    height: 375,
  },
  groupView: {
    position: "relative",
    width: 340,
    height: 375,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 125,
    left: 25,
    height: 375,
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
  regularStakingsDetails: {
    position: "absolute",
    top: 147,
    left: 98,
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
    opacity: 0.7,
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
    opacity: 0.7,
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
  regularText: {
    position: "absolute",
    top: 335,
    left: 276,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    opacity: 0.7,
  },
  amountText: {
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
  text1: {
    position: "absolute",
    top: 395,
    left: 260,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    opacity: 0.7,
  },
  descriptionText: {
    position: "absolute",
    top: 455,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  toGetNewShoes: {
    position: "absolute",
    top: 455,
    left: 215,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    opacity: 0.7,
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
    top: 544,
    left: 35,
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

export default UUTransactionsDetails4;
