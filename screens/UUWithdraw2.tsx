import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const UUWithdraw2 = () => {
  return (
    <View style={styles.uUWithdrawView}>
      <View style={styles.frameView}>
        <View style={styles.passwordInputView}>
          <Text style={styles.amountText}>Amount</Text>
          <View style={styles.rectangleView} />
        </View>
        <View style={[styles.passwordInputView1, styles.mt16]}>
          <Text style={styles.selectWithdrawMethod}>
            Select withdraw method
          </Text>
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineararrowDownIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown.png")}
          />
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView2} />
        <Text style={styles.withdrawText}>Withdraw</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright1.png")}
        />
      </View>
      <View style={styles.rectangleView3} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.withdrawText1}>Withdraw</Text>
      <View style={styles.rectangleView4} />
      <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
      <Text style={styles.text}>$23,340.00</Text>
      <View style={styles.frameView1}>
        <View style={styles.emailphoneInputView}>
          <View style={styles.groupView}>
            <View style={styles.rectangleView5} />
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Text style={styles.text1}>**** **** **** **346</Text>
            <Text style={styles.text2}>12/24</Text>
          </View>
          <View style={styles.groupView1}>
            <View style={styles.rectangleView6} />
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Text style={styles.text3}>**** **** **** **346</Text>
            <Text style={styles.text4}>12/24</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  amountText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView: {
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
  selectWithdrawMethod: {
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
  vuesaxlineararrowDownIcon: {
    position: "absolute",
    top: 35,
    left: 302,
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
    top: 255,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    top: 646,
    left: 25,
    width: 340,
    height: 48,
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
  withdrawText1: {
    position: "absolute",
    top: 46,
    left: 154,
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
    left: 134,
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
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: -4,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 340,
    height: 68,
  },
  rectangleIcon: {
    position: "absolute",
    top: 16,
    left: 291,
    borderRadius: 10,
    width: 36,
    height: 36,
  },
  text1: {
    position: "absolute",
    top: 27,
    left: 17,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  text2: {
    position: "absolute",
    top: 27,
    left: 203,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  groupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 340,
    height: 68,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.11)",
    shadowOffset: {
      width: -4,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 340,
    height: 68,
  },
  rectangleIcon1: {
    position: "absolute",
    top: 16,
    left: 291,
    borderRadius: 10,
    width: 36,
    height: 36,
  },
  text3: {
    position: "absolute",
    top: 27,
    left: 17,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  text4: {
    position: "absolute",
    top: 27,
    left: 203,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    top: 84,
    left: 0,
    width: 340,
    height: 68,
  },
  emailphoneInputView: {
    position: "relative",
    width: 340,
    height: 152,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 450,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  uUWithdrawView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUWithdraw2;
