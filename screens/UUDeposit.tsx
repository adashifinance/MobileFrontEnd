import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUDeposit = () => {
  return (
    <View style={styles.uUDepositView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright8.png")}
          />
          <Text style={styles.bankTransferText}>Bank transfer</Text>
          <Text style={styles.depositMoneyByUsingYourBa}>
            Deposit money by using your bank
          </Text>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.vuesaxbulkbankIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkbank.png")}
          />
        </View>
        <View style={[styles.groupView1, styles.mt10]}>
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
          <Image
            style={styles.vuesaxlineararrowRightIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright8.png")}
          />
          <Text style={styles.cardText}>Card</Text>
          <Text style={styles.depositMoneyByUsingCard}>
            Deposit money by using card
          </Text>
          <View style={styles.rectangleView5} />
          <Image
            style={styles.vuesaxbulkcardsIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkcards.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleView6} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.depositText}>Deposit</Text>
      <View style={styles.rectangleView7} />
      <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
      <Text style={styles.text}>$23,340.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#e6eff3",
    width: 340,
    height: 61,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  bankTransferText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  depositMoneyByUsingYourBa: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView2: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 36,
    height: 36,
  },
  vuesaxbulkbankIcon: {
    position: "absolute",
    top: 19,
    left: 17,
    width: 24,
    height: 24,
  },
  groupView: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#e6eff3",
    width: 340,
    height: 61,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon1: {
    position: "absolute",
    top: 21,
    left: 309,
    width: 20,
    height: 20,
  },
  cardText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  depositMoneyByUsingCard: {
    position: "absolute",
    top: 36,
    left: 57,
    fontSize: 9,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView5: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 36,
    height: 36,
  },
  vuesaxbulkcardsIcon: {
    position: "absolute",
    top: 19,
    left: 17,
    width: 24,
    height: 24,
  },
  groupView1: {
    position: "relative",
    width: 340,
    height: 61,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 255,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView6: {
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
  depositText: {
    position: "absolute",
    top: 46,
    left: 163,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView7: {
    position: "absolute",
    top: 117,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 101,
  },
  totalWalletBalance: {
    position: "absolute",
    top: 141,
    left: 150,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "center",
    opacity: 0.7,
  },
  text: {
    position: "absolute",
    top: 161,
    left: 121,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  uUDepositView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUDeposit;
