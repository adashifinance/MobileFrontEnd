import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUDepositWithCards = () => {
  return (
    <View style={styles.uUDepositWithCards}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.vectorIcon1}
        resizeMode="cover"
        source={require("../assets/vector1.png")}
      />
      <Text style={styles.depositText}>Deposit</Text>
      <Text style={styles.hereYouCanViewAndAddCard}>
        Here you can view and add cards and banks
      </Text>
      <View style={styles.frameView}>
        <View style={styles.emailphoneInputView}>
          <Text style={styles.cardsText}>Cards</Text>
          <View style={styles.groupView}>
            <View style={styles.rectangleView1} />
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Text style={styles.text}>**** **** **** **346</Text>
            <Text style={styles.text1}>12/24</Text>
          </View>
          <View style={styles.groupView1}>
            <View style={styles.rectangleView2} />
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Text style={styles.text2}>**** **** **** **346</Text>
            <Text style={styles.text3}>12/24</Text>
          </View>
        </View>
      </View>
      <View style={styles.frameView1}>
        <View style={styles.passwordInputView}>
          <Text style={styles.amountText}>Amount</Text>
          <View style={styles.rectangleView3} />
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView4} />
        <Text style={styles.depositText1}>Deposit</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright1.png")}
        />
      </View>
      <View style={styles.rectangleView5} />
      <Text style={styles.stakersWalletBalance}>Stakers Wallet Balance</Text>
      <Text style={styles.text4}>$23,340.00</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleView: {
    position: "absolute",
    top: 32,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 47,
    height: 48,
  },
  vectorIcon: {
    position: "absolute",
    height: "0.18%",
    width: "4.7%",
    top: "6.55%",
    right: "85.06%",
    bottom: "93.28%",
    left: "10.24%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vectorIcon1: {
    position: "absolute",
    height: "2.84%",
    width: "6.15%",
    top: "8.06%",
    right: "78.21%",
    bottom: "89.1%",
    left: "15.64%",
    maxWidth: "100%",
    maxHeight: "100%",
    opacity: 0,
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
  hereYouCanViewAndAddCard: {
    position: "absolute",
    top: 247,
    left: 58,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 275,
  },
  cardsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
  },
  rectangleView1: {
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
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1.6,
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
  text: {
    position: "absolute",
    top: 27,
    left: 17,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  text1: {
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
    top: 23,
    left: 0,
    width: 340,
    height: 68,
  },
  rectangleView2: {
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
  text2: {
    position: "absolute",
    top: 27,
    left: 17,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  text3: {
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
    top: 107,
    left: 0,
    width: 340,
    height: 68,
  },
  emailphoneInputView: {
    position: "relative",
    width: 340,
    height: 175,
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
  amountText: {
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
  passwordInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 496,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  depositText1: {
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
    top: 611,
    left: 25,
    width: 340,
    height: 48,
  },
  rectangleView5: {
    position: "absolute",
    top: 117,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 101,
  },
  stakersWalletBalance: {
    position: "absolute",
    top: 141,
    left: 126,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "center",
    opacity: 0.7,
  },
  text4: {
    position: "absolute",
    top: 161,
    left: 121,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  uUDepositWithCards: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUDepositWithCards;
