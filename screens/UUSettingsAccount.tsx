import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUSettingsAccount = () => {
  return (
    <View style={styles.uUSettingsAccountView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxlineararrowRightIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxlineararrowright8.png")}
          />
          <Text style={styles.profileText}>Profile</Text>
          <Text style={styles.editProfileInformation}>
            Edit profile information
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
          <Text style={styles.cardsBanks}>{`Cards & Banks`}</Text>
          <Text style={styles.addCardsBanksDepositAndT}>
            Add cards banks ,Deposit and Transfer
          </Text>
          <View style={styles.rectangleView5} />
          <Image
            style={styles.vuesaxbulkcardIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkcard.png")}
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
          <Text style={styles.getHelpText}>Get Help</Text>
          <Text style={styles.helpfulInformationText}>Helpful information</Text>
          <View style={styles.rectangleView8} />
          <Image
            style={styles.vuesaxbulksmileysIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulksmileys.png")}
          />
        </View>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={styles.logoView}>
        <View style={styles.frameView1}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Text style={[styles.ahmedIdrisText, styles.ml10]}>Ahmed Idris</Text>
        </View>
      </View>
      <View style={styles.groupView5}>
        <View style={styles.rectangleView9} />
        <View style={styles.groupView3}>
          <View style={styles.rectangleView10} />
          <Text style={styles.totalStakingsText}>Total Stakings</Text>
          <Text style={styles.text}>$50,000.00</Text>
        </View>
        <View style={styles.groupView4}>
          <View style={styles.rectangleView11} />
          <Text style={styles.totalWithdrawsText}>Total Withdraws</Text>
          <Text style={styles.text1}>$10,000.00</Text>
        </View>
        <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
        <Text style={styles.text2}>$23,340.00</Text>
      </View>
      <View style={styles.groupView6}>
        <View style={styles.rectangleView12} />
        <View style={styles.frameView6}>
          <View style={styles.frameView2}>
            <Image
              style={styles.vuesaxlinearcategoryIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearcategory1.png")}
            />
            <Text style={[styles.dashboardText, styles.mt4]}>Dashboard</Text>
          </View>
          <View style={[styles.frameView3, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsecurityCardIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsecuritycard2.png")}
            />
            <Text style={[styles.stakingsText, styles.mt4]}>Stakings</Text>
          </View>
          <View style={[styles.frameView4, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearreceipt2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearreceipt21.png")}
            />
            <Text style={[styles.activitiesText, styles.mt4]}>Activities</Text>
          </View>
          <View style={[styles.frameView5, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsetting2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsetting22.png")}
            />
            <Text style={[styles.settingsText, styles.mt4]}>Settings</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  ml10: {
    marginLeft: 10,
  },
  mt4: {
    marginTop: 4,
  },
  ml40: {
    marginLeft: 40,
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
  profileText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  editProfileInformation: {
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
    left: 309,
    width: 20,
    height: 20,
  },
  cardsBanks: {
    position: "absolute",
    top: 17,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  addCardsBanksDepositAndT: {
    position: "absolute",
    top: 34,
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
  vuesaxbulkcardIcon: {
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
    left: 309,
    width: 20,
    height: 20,
  },
  getHelpText: {
    position: "absolute",
    top: 19,
    left: 56,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  helpfulInformationText: {
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
  vuesaxbulksmileysIcon: {
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
    top: 344,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon: {
    position: "absolute",
    top: 32,
    left: 318,
    width: 47,
    height: 48,
  },
  rectangleIcon: {
    position: "relative",
    borderRadius: 10,
    width: 48,
    height: 48,
    flexShrink: 0,
  },
  ahmedIdrisText: {
    position: "relative",
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
  },
  frameView1: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logoView: {
    position: "absolute",
    top: 32,
    left: 25,
    width: 148,
    height: 48,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 189,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 319,
    height: 36,
  },
  totalStakingsText: {
    position: "absolute",
    top: 11,
    left: 9,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  text: {
    position: "absolute",
    top: 11,
    left: 218,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    width: 86,
    opacity: 0.7,
  },
  groupView3: {
    position: "absolute",
    top: 95,
    left: 10,
    width: 319,
    height: 36,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 5,
    backgroundColor: "#fff",
    width: 319,
    height: 36,
  },
  totalWithdrawsText: {
    position: "absolute",
    top: 11,
    left: 9,
    fontSize: 12,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  text1: {
    position: "absolute",
    top: 11,
    left: 220,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "right",
    width: 84,
    opacity: 0.7,
  },
  groupView4: {
    position: "absolute",
    top: 137,
    left: 10,
    width: 319,
    height: 36,
  },
  totalWalletBalance: {
    position: "absolute",
    top: 24,
    left: 109,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "center",
    opacity: 0.8,
  },
  text2: {
    position: "absolute",
    top: 44,
    left: 96,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView5: {
    position: "absolute",
    top: 117,
    left: 25,
    width: 340,
    height: 189,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#fff",
    shadowColor: "rgba(0, 0, 0, 0.06)",
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
    width: 390,
    height: 73,
  },
  vuesaxlinearcategoryIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  dashboardText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView2: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearsecurityCardIcon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  stakingsText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView3: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearreceipt2Icon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  activitiesText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView4: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearsetting2Icon: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  settingsText: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView5: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView6: {
    position: "absolute",
    top: 17,
    left: 41,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView6: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  uUSettingsAccountView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUSettingsAccount;
