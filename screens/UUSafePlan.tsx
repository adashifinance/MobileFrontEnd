import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUSafePlan = () => {
  return (
    <View style={styles.uUSafePlanView}>
      <View style={styles.rectangleView} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.safelockStakingsPlan}>Safelock Stakings Plan</Text>
      <View style={styles.rectangleView1} />
      <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
      <Text style={styles.text}>$23,340.00</Text>
      <View style={styles.frameView}>
        <View style={styles.passwordInputView}>
          <Text style={styles.tItleText}>TItle</Text>
          <View style={styles.rectangleView2} />
        </View>
        <View style={[styles.emailphoneInputView, styles.mt16]}>
          <Text style={styles.descriptionOptionalText}>
            Description (Optional)
          </Text>
          <View style={styles.rectangleView3} />
        </View>
        <View style={[styles.passwordInputView1, styles.mt16]}>
          <Text style={styles.amountToStake}>Amount to stake</Text>
          <View style={styles.rectangleView4} />
        </View>
        <View style={[styles.passwordInputView2, styles.mt16]}>
          <Text style={styles.dateRangeText}>Date range</Text>
          <View style={styles.rectangleView5} />
          <Image
            style={styles.vuesaxbulkcalendarIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkcalendar.png")}
          />
          <View style={styles.rectangleView6} />
          <Image
            style={styles.vuesaxbulkcalendarIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkcalendar.png")}
          />
          <Text style={styles.endDateText}>End date</Text>
          <Text style={styles.startDateText}>Start date</Text>
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView7} />
        <Text style={styles.stakeText}>Stake</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  rectangleView: {
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
  safelockStakingsPlan: {
    position: "absolute",
    top: 46,
    left: 105,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView1: {
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
    top: 142,
    left: 150,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "center",
    opacity: 0.7,
  },
  text: {
    position: "absolute",
    top: 162,
    left: 121,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  tItleText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView2: {
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
  descriptionOptionalText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
  },
  rectangleView3: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1.6,
    width: 340,
    height: 118,
  },
  emailphoneInputView: {
    position: "relative",
    width: 340,
    height: 141,
    flexShrink: 0,
  },
  amountToStake: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView4: {
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
  passwordInputView1: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  dateRangeText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  rectangleView5: {
    position: "absolute",
    top: 23,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 159,
    height: 48,
  },
  vuesaxbulkcalendarIcon: {
    position: "absolute",
    top: 35,
    left: 11,
    width: 24,
    height: 24,
  },
  rectangleView6: {
    position: "absolute",
    top: 23,
    left: 178,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 162,
    height: 48,
  },
  vuesaxbulkcalendarIcon1: {
    position: "absolute",
    top: 35,
    left: 189,
    width: 24,
    height: 24,
  },
  endDateText: {
    position: "absolute",
    top: 38,
    left: 216,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  startDateText: {
    position: "absolute",
    top: 38,
    left: 38,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  passwordInputView2: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 250,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  stakeText: {
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
    top: 696,
    left: 25,
    width: 340,
    height: 48,
  },
  uUSafePlanView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUSafePlan;
