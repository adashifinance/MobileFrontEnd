import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUTransactionsDetails6 = () => {
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
      <Text style={styles.transactionDetailsText}>Transaction Details</Text>
      <Text style={styles.transactionDetailsText1}>Transaction Details</Text>
      <Text style={styles.withdrawalRequestFromAisha}>
        Withdrawal Request from Aisha
      </Text>
      <Text style={styles.transactionID235w34645}>
        Transaction ID: 235w34645
      </Text>
      <Text style={styles.dateText}>Date</Text>
      <Text style={styles.thFebruary2022}>6th February 2022</Text>
      <Text style={styles.timeText}>Time</Text>
      <Text style={styles.text}>12:30:32</Text>
      <Text style={styles.withdrawalMethodText1}>
        <Text style={styles.withdrawalMethodText}>Withdrawal Method</Text>
      </Text>
      <Text style={styles.cardMethodText}>Card Method</Text>
      <Text style={styles.amountText}>Amount</Text>
      <Text style={styles.text1}>$21,000.50</Text>
      <Text style={styles.descriptionText}>Description</Text>
      <Text style={styles.iWouldLikeToWithdrawMyMo}>
        <Text style={styles.iWouldLike}>{`I would like to withdraw `}</Text>
        <Text style={styles.myMoneyText}>my money</Text>
      </Text>
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
    height: 61.97,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 447,
  },
  groupView: {
    position: "relative",
    width: 340,
    height: 447,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 125,
    left: 25,
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
  transactionDetailsText: {
    position: "absolute",
    top: 46,
    left: 116,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  transactionDetailsText1: {
    position: "absolute",
    top: 147,
    left: 116,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
  },
  withdrawalRequestFromAisha: {
    position: "absolute",
    top: 179,
    left: 97,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  transactionID235w34645: {
    position: "absolute",
    top: 209,
    left: 114,
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
    opacity: 0.7,
  },
  dateText: {
    position: "absolute",
    top: 265,
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
    top: 265,
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
    top: 325,
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
    top: 325,
    left: 278,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    opacity: 0.7,
  },
  withdrawalMethodText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  withdrawalMethodText1: {
    position: "absolute",
    top: 385,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  cardMethodText: {
    position: "absolute",
    top: 385,
    left: 244,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    opacity: 0.7,
  },
  amountText: {
    position: "absolute",
    top: 445,
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
    top: 445,
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
    top: 505,
    left: 61,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  iWouldLike: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  myMoneyText: {
    margin: 0,
  },
  iWouldLikeToWithdrawMyMo: {
    position: "absolute",
    top: 505,
    left: 171,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    opacity: 0.7,
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

export default UUTransactionsDetails6;
