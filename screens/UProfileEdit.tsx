import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const UProfileEdit = () => {
  return (
    <View style={styles.uProfileEdit}>
      <Text style={styles.viewProfileInformationAndM}>
        View Profile information and make changes
      </Text>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright8.png")}
          />
          <Text style={styles.personalText}>Personal</Text>
          <Text style={styles.editPersonalInformation}>
            Edit personal information
          </Text>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.vuesaxbulkprofileIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkprofile.png")}
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
          <Text style={styles.passwordChangeText}>Password Change</Text>
          <Text style={styles.editDocumentsText}>Edit documents</Text>
          <View style={styles.rectangleView5} />
          <Image
            style={styles.vuesaxbulklockIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulklock.png")}
          />
        </View>
        <View style={[styles.groupView2, styles.mt10]}>
          <View style={styles.rectangleView6} />
          <View style={styles.rectangleView7} />
          <Image
            style={styles.vuesaxlineararrowRightIcon2}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright8.png")}
          />
          <Text style={styles.pINChangeText}>PIN Change</Text>
          <Text style={styles.editDocumentsText1}>Edit documents</Text>
          <View style={styles.rectangleView8} />
          <Image
            style={styles.vuesaxbulkpasswordCheckIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkpasswordcheck.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleView9} />
      <Text style={styles.profileText}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  viewProfileInformationAndM: {
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
  personalText: {
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
  vuesaxbulkprofileIcon: {
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
    left: 307,
    width: 20,
    height: 20,
  },
  passwordChangeText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  editDocumentsText: {
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
  vuesaxbulklockIcon: {
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
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#e6eff3",
    width: 340,
    height: 61,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 61,
  },
  vuesaxlineararrowRightIcon2: {
    position: "absolute",
    top: 21,
    left: 307,
    width: 20,
    height: 20,
  },
  pINChangeText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  editDocumentsText1: {
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
  rectangleView8: {
    position: "absolute",
    top: 13,
    left: 11,
    borderRadius: 10,
    backgroundColor: "#fff",
    width: 36,
    height: 36,
  },
  vuesaxbulkpasswordCheckIcon: {
    position: "absolute",
    top: 19,
    left: 17,
    width: 24,
    height: 24,
  },
  groupView2: {
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
  rectangleView9: {
    position: "absolute",
    top: 32,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 47,
    height: 48,
  },
  profileText: {
    position: "absolute",
    top: 46,
    left: 168,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  uProfileEdit: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UProfileEdit;
