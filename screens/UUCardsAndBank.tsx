import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const UUCardsAndBank = () => {
  return (
    <View style={styles.uUCardsAndBank}>
      <View style={styles.frameView}>
        <View style={styles.emailphoneInputView}>
          <Text style={styles.cardsText}>Cards</Text>
          <View style={styles.groupView}>
            <View style={styles.rectangleView} />
            <Image
              style={styles.rectangleIcon}
              resizeMode="cover"
              source={require("../assets/rectangle-15.png")}
            />
            <Text style={styles.text}>**** **** **** **346</Text>
            <Text style={styles.text1}>12/24</Text>
          </View>
          <View style={styles.groupView1}>
            <View style={styles.rectangleView1} />
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
        <View style={styles.emailphoneInputView1}>
          <Text style={styles.banksText}>Banks</Text>
          <View style={styles.groupView2}>
            <View style={styles.rectangleView2} />
            <Image
              style={styles.rectangleIcon2}
              resizeMode="cover"
              source={require("../assets/rectangle-152.png")}
            />
            <Text style={styles.text4}>0158841042</Text>
            <Text style={styles.gTBankText}>GTBank</Text>
          </View>
          <View style={styles.groupView3}>
            <View style={styles.rectangleView3} />
            <Image
              style={styles.rectangleIcon3}
              resizeMode="cover"
              source={require("../assets/rectangle-153.png")}
            />
            <Text style={styles.text5}>0158841042</Text>
            <Text style={styles.accessBankText}>Access bank</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleView4} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.cardsAndBanks}>Cards and Banks</Text>
      <Text style={styles.hereYouCanViewAndAddCard}>
        Here you can view and add cards and banks
      </Text>
      <View style={styles.btnView}>
        <View style={styles.rectangleView5} />
        <Text style={styles.addCardOrBank}>Add Card or Bank</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
  },
  rectangleView: {
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
    top: 170,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  banksText: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#127dd3",
    textAlign: "left",
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 340,
    height: 68,
  },
  rectangleIcon2: {
    position: "absolute",
    top: 16,
    left: 291,
    borderRadius: 10,
    width: 36,
    height: 36,
  },
  text4: {
    position: "absolute",
    top: 27,
    left: 17,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  gTBankText: {
    position: "absolute",
    top: 27,
    left: 157,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  groupView2: {
    position: "absolute",
    top: 23,
    left: 0,
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
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 340,
    height: 68,
  },
  rectangleIcon3: {
    position: "absolute",
    top: 16,
    left: 291,
    borderRadius: 10,
    width: 36,
    height: 36,
  },
  text5: {
    position: "absolute",
    top: 27,
    left: 17,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  accessBankText: {
    position: "absolute",
    top: 27,
    left: 142,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
  },
  groupView3: {
    position: "absolute",
    top: 107,
    left: 0,
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
  emailphoneInputView1: {
    position: "relative",
    width: 340,
    height: 175,
    flexShrink: 0,
  },
  frameView1: {
    position: "absolute",
    top: 390,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView4: {
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
  cardsAndBanks: {
    position: "absolute",
    top: 46,
    left: 126,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  hereYouCanViewAndAddCard: {
    position: "absolute",
    top: 117,
    left: 58,
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "center",
    width: 275,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 308,
    height: 48,
  },
  addCardOrBank: {
    position: "absolute",
    top: 15,
    left: 76.09,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 154.91,
  },
  btnView: {
    position: "absolute",
    top: 609,
    left: 41,
    width: 308,
    height: 48,
  },
  uUCardsAndBank: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUCardsAndBank;
