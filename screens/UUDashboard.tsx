import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const UUDashboard = () => {
  return (
    <View style={styles.uUDashboardView}>
      <Text style={styles.stakingsPlansText}>Stakings Plans</Text>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <Text style={styles.loremIpsumDolorSitAmetSe}>
            Lorem ipsum dolor sit amet, sectetur adipiscing elitgbsfbdrb
            etgsrvrg
          </Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-437.png")}
          />
          <Text style={styles.regularText}>Regular</Text>
        </View>
        <View style={[styles.groupView1, styles.mt16]}>
          <View style={styles.rectangleView1} />
          <Text style={styles.loremIpsumDolorSitAmetSe1}>
            Lorem ipsum dolor sit amet, sectetur adipiscing elitgbsfbdrb
            etgsrvrg
          </Text>
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group-433.png")}
          />
          <Text style={styles.targetText}>{`Target `}</Text>
        </View>
        <View style={[styles.groupView2, styles.mt16]}>
          <View style={styles.rectangleView2} />
          <Text style={styles.loremIpsumDolorSitAmetSe2}>
            Lorem ipsum dolor sit amet, sectetur adipiscing elitgbsfbdrb
            etgsrvrg
          </Text>
          <Image
            style={styles.groupIcon2}
            resizeMode="cover"
            source={require("../assets/group-434.png")}
          />
          <Text style={styles.safelockText}>Safelock</Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon3}
        resizeMode="cover"
        source={require("../assets/group-34.png")}
      />
      <View style={styles.groupView5}>
        <View style={styles.rectangleView3} />
        <View style={styles.groupView3}>
          <View style={styles.rectangleView4} />
          <Text style={styles.totalStakingsText}>Total Stakings</Text>
          <Text style={styles.text}>$50,000.00</Text>
        </View>
        <View style={styles.groupView4}>
          <View style={styles.rectangleView5} />
          <Text style={styles.totalWithdrawsText}>Total Withdraws</Text>
          <Text style={styles.text1}>$10,000.00</Text>
        </View>
        <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
        <Text style={styles.text2}>$23,340.00</Text>
      </View>
      <Text style={styles.quickActionsText}>Quick Actions</Text>
      <View style={styles.groupView6}>
        <View style={styles.rectangleView6} />
        <Text style={styles.depositText}>Deposit</Text>
      </View>
      <View style={styles.groupView7}>
        <View style={styles.rectangleView7} />
        <Text style={styles.withdrawText}>Withdraw</Text>
      </View>
      <View style={styles.groupView8}>
        <View style={styles.rectangleView8} />
        <View style={styles.frameView5}>
          <View style={styles.frameView1}>
            <Image
              style={styles.vuesaxlinearcategoryIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearcategory1.png")}
            />
            <Text style={[styles.dashboardText, styles.mt4]}>Dashboard</Text>
          </View>
          <View style={[styles.frameView2, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsecurityCardIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsecuritycard2.png")}
            />
            <Text style={[styles.stakingsText, styles.mt4]}>Stakings</Text>
          </View>
          <View style={[styles.frameView3, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearreceipt2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearreceipt21.png")}
            />
            <Text style={[styles.activitiesText, styles.mt4]}>Activities</Text>
          </View>
          <View style={[styles.frameView4, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsetting2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsetting22.png")}
            />
            <Text style={[styles.settingsText, styles.mt4]}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.btnView}>
        <View style={styles.rectangleView9} />
        <Text style={styles.nEARMainnetText}>NEAR Mainnet</Text>
        <Image
          style={styles.vuesaxlineararrowRightIcon}
          resizeMode="cover"
          source={require("../assets/vuesaxlineararrowright35.png")}
        />
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mt16: {
    marginTop: 16,
  },
  mt4: {
    marginTop: 4,
  },
  ml40: {
    marginLeft: 40,
  },
  stakingsPlansText: {
    position: "absolute",
    top: 458,
    left: 22,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#5bb6ff",
    width: 340,
    height: 80,
  },
  loremIpsumDolorSitAmetSe: {
    position: "absolute",
    top: 38,
    left: 101,
    fontSize: 10,
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
    width: 226,
  },
  groupIcon: {
    position: "absolute",
    top: 7,
    left: 8,
    width: 79,
    height: 65,
  },
  regularText: {
    position: "absolute",
    top: 14.64,
    left: 101.38,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView: {
    position: "relative",
    width: 340,
    height: 80,
    flexShrink: 0,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#e99a95",
    width: 340,
    height: 80,
  },
  loremIpsumDolorSitAmetSe1: {
    position: "absolute",
    top: 38,
    left: 101,
    fontSize: 10,
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
    width: 226,
  },
  groupIcon1: {
    position: "absolute",
    top: 7,
    left: 8,
    width: 79,
    height: 65,
  },
  targetText: {
    position: "absolute",
    top: 14.64,
    left: 101.38,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView1: {
    position: "relative",
    width: 340,
    height: 80,
    flexShrink: 0,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#8cb8ae",
    width: 340,
    height: 80,
  },
  loremIpsumDolorSitAmetSe2: {
    position: "absolute",
    top: 38,
    left: 101,
    fontSize: 10,
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
    width: 226,
  },
  groupIcon2: {
    position: "absolute",
    top: 7,
    left: 8,
    width: 79,
    height: 65,
  },
  safelockText: {
    position: "absolute",
    top: 14.64,
    left: 101.38,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView2: {
    position: "relative",
    width: 340,
    height: 80,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 484,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  groupIcon3: {
    position: "absolute",
    top: 22,
    left: 30,
    width: 335,
    height: 58,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 189,
  },
  rectangleView4: {
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
  rectangleView5: {
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
  quickActionsText: {
    position: "absolute",
    top: 332,
    left: 27,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#495371",
    width: 160,
    height: 75,
  },
  depositText: {
    position: "absolute",
    top: 27,
    left: 48,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView6: {
    position: "absolute",
    top: 358,
    left: 25,
    width: 160,
    height: 75,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f38181",
    width: 160,
    height: 75,
  },
  withdrawText: {
    position: "absolute",
    top: 27,
    left: 39,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView7: {
    position: "absolute",
    top: 358,
    left: 205,
    width: 160,
    height: 75,
  },
  rectangleView8: {
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
  frameView1: {
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
  frameView2: {
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
  frameView3: {
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
  frameView4: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView5: {
    position: "absolute",
    top: 17,
    left: 41,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView8: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#495371",
    width: 175,
    height: 26,
  },
  nEARMainnetText: {
    position: "absolute",
    top: 5,
    left: 14,
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 152,
    height: 10,
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 6.61,
    left: 154.07,
    width: 18.08,
    height: 17.2,
  },
  btnView: {
    position: "absolute",
    top: 44,
    left: 105,
    width: 175,
    height: 26,
  },
  vectorIcon: {
    position: "absolute",
    height: "1.57%",
    width: "3.78%",
    top: "5.92%",
    right: "65.71%",
    bottom: "92.51%",
    left: "30.51%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  uUDashboardView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUDashboard;
