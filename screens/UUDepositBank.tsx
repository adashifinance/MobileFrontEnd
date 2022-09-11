import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const UUDepositBank = () => {
  return (
    <View style={styles.uUDepositBank}>
      <Text style={styles.youCanFundYourAccountByT}>
        You can fund your account by transferring from any bank to the details
        below
      </Text>
      <View style={styles.frameView}>
        <View style={styles.emailphoneInputView}>
          <Text style={styles.bankNameText}>Bank name</Text>
          <View style={styles.rectangleView} />
          <Text style={styles.wEMABANKPLC}>WEMA BANK PLC</Text>
        </View>
        <View style={[styles.passwordInputView, styles.mt16]}>
          <Text style={styles.accountNumberText}>Account number</Text>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineardocumentCopyIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineardocumentcopy.png")}
          />
          <Text style={styles.text}>2001385473</Text>
        </View>
        <View style={[styles.passwordInputView1, styles.mt16]}>
          <Text style={styles.accountNameText}>Account name</Text>
          <View style={styles.rectangleView2} />
          <Text style={styles.jAMESMEESHAKText}>JAMES MEESHAK</Text>
        </View>
      </View>
      <View style={styles.rectangleView3} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.depositText}>Deposit</Text>
      <View style={styles.rectangleView4} />
      <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
      <Text style={styles.text1}>$23,340.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  youCanFundYourAccountByT: {
    position: "absolute",
    top: 235,
    left: 90,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 211,
  },
  bankNameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#3f3f3f",
    textAlign: "left",
  },
  rectangleView: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 48,
  },
  wEMABANKPLC: {
    position: "absolute",
    top: 37,
    left: 14,
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  emailphoneInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  accountNumberText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#3f3f3f",
    textAlign: "left",
  },
  rectangleView1: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 48,
  },
  vuesaxlineardocumentCopyIcon: {
    position: "absolute",
    top: 35,
    left: 299,
    width: 24,
    height: 24,
  },
  text: {
    position: "absolute",
    top: 37,
    left: 14,
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  passwordInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  accountNameText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#3f3f3f",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 48,
  },
  jAMESMEESHAKText: {
    position: "absolute",
    top: 37,
    left: 14,
    fontSize: 16,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
  },
  passwordInputView1: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 300,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView3: {
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
  rectangleView4: {
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
  text1: {
    position: "absolute",
    top: 161,
    left: 121,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  uUDepositBank: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUDepositBank;
