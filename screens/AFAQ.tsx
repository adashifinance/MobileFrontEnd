import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AFAQ = () => {
  return (
    <View style={styles.aFAQView}>
      <View style={styles.frameView}>
        <View style={styles.passwordInputView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Text style={styles.loremIpsumDolorSitAmetCo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            convallis fusce aliquam dolor sed id venenatis vulputate. Nulla odio
            augue scelerisque mi. Eleifend malesuada est risus, volutpat eu.
          </Text>
          <Text style={styles.whatAreWeReallyAbout}>
            What are we really about
          </Text>
          <Image
            style={styles.vuesaxlineararrowDownIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown1.png")}
          />
        </View>
        <View style={[styles.passwordInputView1, styles.mt16]}>
          <View style={styles.rectangleView2} />
          <Text style={styles.howDoYouBenefit}>How do you benefit</Text>
          <Image
            style={styles.vuesaxlineararrowDownIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown2.png")}
          />
        </View>
        <View style={[styles.passwordInputView2, styles.mt16]}>
          <View style={styles.rectangleView3} />
          <Text style={styles.howDoYouBenefit1}>How do you benefit</Text>
          <Image
            style={styles.vuesaxlineararrowDownIcon2}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown2.png")}
          />
        </View>
        <View style={[styles.passwordInputView3, styles.mt16]}>
          <View style={styles.rectangleView4} />
          <Text style={styles.howDoYouBenefit2}>How do you benefit</Text>
          <Image
            style={styles.vuesaxlineararrowDownIcon3}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown2.png")}
          />
        </View>
        <View style={[styles.passwordInputView4, styles.mt16]}>
          <View style={styles.rectangleView5} />
          <Text style={styles.howDoYouBenefit3}>How do you benefit</Text>
          <Image
            style={styles.vuesaxlineararrowDownIcon4}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowdown2.png")}
          />
        </View>
      </View>
      <Text style={styles.addYourCardsAndBanksHere}>
        Add your cards and banks here
      </Text>
      <Text style={styles.fAQText}>FAQ</Text>
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
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 159,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  loremIpsumDolorSitAmetCo: {
    position: "absolute",
    top: 63,
    left: 19,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    width: 313,
  },
  whatAreWeReallyAbout: {
    position: "absolute",
    top: 16,
    left: 19,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vuesaxlineararrowDownIcon: {
    position: "absolute",
    top: 12,
    left: 308,
    width: 24,
    height: 24,
  },
  passwordInputView: {
    position: "relative",
    width: 340,
    height: 159,
    flexShrink: 0,
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
  howDoYouBenefit: {
    position: "absolute",
    top: 16,
    left: 19,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vuesaxlineararrowDownIcon1: {
    position: "absolute",
    top: 12,
    left: 308,
    width: 24,
    height: 24,
  },
  passwordInputView1: {
    position: "relative",
    width: 340,
    height: 48,
    flexShrink: 0,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 48,
  },
  howDoYouBenefit1: {
    position: "absolute",
    top: 16,
    left: 19,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vuesaxlineararrowDownIcon2: {
    position: "absolute",
    top: 12,
    left: 308,
    width: 24,
    height: 24,
  },
  passwordInputView2: {
    position: "relative",
    width: 340,
    height: 48,
    flexShrink: 0,
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
  howDoYouBenefit2: {
    position: "absolute",
    top: 16,
    left: 19,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vuesaxlineararrowDownIcon3: {
    position: "absolute",
    top: 12,
    left: 308,
    width: 24,
    height: 24,
  },
  passwordInputView3: {
    position: "relative",
    width: 340,
    height: 48,
    flexShrink: 0,
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
  howDoYouBenefit3: {
    position: "absolute",
    top: 16,
    left: 19,
    fontSize: 16,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vuesaxlineararrowDownIcon4: {
    position: "absolute",
    top: 12,
    left: 308,
    width: 24,
    height: 24,
  },
  passwordInputView4: {
    position: "relative",
    width: 340,
    height: 48,
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
  fAQText: {
    position: "absolute",
    top: 46,
    left: 178,
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
  aFAQView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default AFAQ;
