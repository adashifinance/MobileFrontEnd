import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUGetHelp = () => {
  return (
    <View style={styles.uUGetHelp}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright11.png")}
          />
          <Text style={styles.fAQText}>FAQ</Text>
          <Text style={styles.editPersonalInformation}>
            Edit personal information
          </Text>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.vuesaxbulkmessageEditIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmessageedit.png")}
          />
        </View>
        <View style={[styles.groupView1, styles.mt10]}>
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
          <Image
            style={styles.vuesaxlineararrowRightIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright11.png")}
          />
          <Text style={styles.chatWithUs}>Chat with Us</Text>
          <Text style={styles.editPersonalInformation1}>
            Edit personal information
          </Text>
          <View style={styles.rectangleView5} />
          <Image
            style={styles.vuesaxbulkmessages3Icon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkmessages3.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleView6} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <Text style={styles.getHelpText}>Get Help</Text>
      <Text style={styles.hereYouCanViewAndAddCard}>
        Here you can view and add cards and banks
      </Text>
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
  fAQText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  editPersonalInformation: {
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
  vuesaxbulkmessageEditIcon: {
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
  chatWithUs: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  editPersonalInformation1: {
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
  vuesaxbulkmessages3Icon: {
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
    top: 170,
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
  getHelpText: {
    position: "absolute",
    top: 46,
    left: 159,
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
  uUGetHelp: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUGetHelp;
