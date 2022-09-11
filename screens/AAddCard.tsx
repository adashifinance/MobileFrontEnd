import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AAddCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aAddCard}>
      <View style={styles.frameView}>
        <Pressable
          style={styles.passwordInputPressable}
          onPress={() => navigation.navigate("AAddBank1")}
        >
          <Text style={styles.cardOrBank}>Card or Bank</Text>
          <View style={styles.rectangleView} />
          <Image
            style={styles.vuesaxlineararrowDownIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown.png")}
          />
          <Text style={styles.cardText}>Card</Text>
        </Pressable>
        <View style={[styles.passwordInputView, styles.mt16]}>
          <Text style={styles.cardNumberText}>Card Number</Text>
          <View style={styles.rectangleView1} />
        </View>
        <View style={[styles.passwordInputView1, styles.mt16]}>
          <Text style={styles.dDMMYYText}>DD/MM/YY</Text>
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView5} />
        <Text style={styles.addText}>Add</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright1.png")}
        />
      </View>
      <Text style={styles.addYourCardsAndBanksHere}>
        Add your cards and banks here
      </Text>
      <Text style={styles.cardsAndBanks}>Cards and Banks</Text>
      <View style={styles.rectangleView6} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  cardOrBank: {
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
  vuesaxlineararrowDownIcon: {
    position: "absolute",
    top: 35,
    left: 302,
    width: 24,
    height: 24,
  },
  cardText: {
    position: "absolute",
    top: 39,
    left: 13,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
  },
  passwordInputPressable: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  cardNumberText: {
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
  passwordInputView: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  dDMMYYText: {
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
    width: 105,
    height: 48,
  },
  rectangleView3: {
    position: "absolute",
    top: 23,
    left: 118,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 105,
    height: 48,
  },
  rectangleView4: {
    position: "absolute",
    top: 23,
    left: 235,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 105,
    height: 48,
  },
  passwordInputView1: {
    position: "relative",
    width: 340,
    height: 71,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 168,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  addText: {
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
    top: 457,
    left: 25,
    width: 340,
    height: 48,
  },
  addYourCardsAndBanksHere: {
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
  aAddCard: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AAddCard;
