import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUSavings = () => {
  return (
    <View style={styles.uUSavingsView}>
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Image
            style={styles.vuesaxbulkboxTickIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkboxtick.png")}
          />
          <Text style={styles.stakingForNewShoes}>Staking for new shoes</Text>
          <Text style={styles.text}>$21,000.50</Text>
          <Text style={styles.stakingForThePurposeOfAN}>
            Staking for the purpose of a ne...
          </Text>
          <Text style={styles.pMText}>2:34PM</Text>
          <Text style={styles.thFeb22}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView2, styles.mt10]}>
          <View style={styles.groupView1}>
            <View style={styles.rectangleView2} />
            <Text style={styles.stakingForNewShoes1}>
              Staking for new shoes
            </Text>
            <Text style={styles.text1}>$21,000.50</Text>
            <Text style={styles.stakingForThePurposeOfAN1}>
              Staking for the purpose of a ne...
            </Text>
            <Text style={styles.pMText1}>2:34PM</Text>
            <Text style={styles.thFeb221}>6th Feb ‘22</Text>
            <View style={styles.rectangleView3} />
            <Image
              style={styles.vuesaxbulklockCircleIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxbulklockcircle.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView4, styles.mt10]}>
          <View style={styles.groupView3}>
            <View style={styles.rectangleView4} />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-43.png")}
            />
            <Text style={styles.stakingForNewShoes2}>
              Staking for new shoes
            </Text>
            <Text style={styles.text2}>$21,000.50</Text>
            <Text style={styles.stakingForThePurposeOfAN2}>
              Staking for the purpose of a ne...
            </Text>
            <Text style={styles.pMText2}>2:34PM</Text>
            <Text style={styles.thFeb222}>6th Feb ‘22</Text>
          </View>
        </View>
        <View style={[styles.groupView5, styles.mt10]}>
          <View style={styles.rectangleView5} />
          <View style={styles.rectangleView6} />
          <Image
            style={styles.vuesaxbulkboxTickIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkboxtick1.png")}
          />
          <Text style={styles.stakingForNewShoes3}>Staking for new shoes</Text>
          <Text style={styles.text3}>$21,000.50</Text>
          <Text style={styles.stakingForThePurposeOfAN3}>
            Staking for the purpose of a ne...
          </Text>
          <Text style={styles.pMText3}>2:34PM</Text>
          <Text style={styles.thFeb223}>6th Feb ‘22</Text>
        </View>
        <View style={[styles.groupView7, styles.mt10]}>
          <View style={styles.groupView6}>
            <View style={styles.rectangleView7} />
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group-431.png")}
            />
            <Text style={styles.stakingForNewShoes4}>
              Staking for new shoes
            </Text>
            <Text style={styles.text4}>$21,000.50</Text>
            <Text style={styles.stakingForThePurposeOfAN4}>
              Staking for the purpose of a ne...
            </Text>
            <Text style={styles.pMText4}>2:34PM</Text>
            <Text style={styles.thFeb224}>6th Feb ‘22</Text>
          </View>
        </View>
        <View style={[styles.groupView9, styles.mt10]}>
          <View style={styles.groupView8}>
            <View style={styles.rectangleView8} />
            <Text style={styles.stakingForNewShoes5}>
              Staking for new shoes
            </Text>
            <Text style={styles.text5}>$21,000.50</Text>
            <Text style={styles.stakingForThePurposeOfAN5}>
              Staking for the purpose of a ne...
            </Text>
            <Text style={styles.pMText5}>2:34PM</Text>
            <Text style={styles.thFeb225}>6th Feb ‘22</Text>
            <View style={styles.rectangleView9} />
            <Image
              style={styles.vuesaxbulklockCircleIcon1}
              resizeMode="cover"
              source={require("../assets/vuesaxbulklockcircle1.png")}
            />
          </View>
        </View>
      </View>
      <View style={styles.groupView10}>
        <View style={styles.rectangleView10} />
        <View style={styles.frameView5}>
          <View style={styles.frameView1}>
            <Image
              style={styles.vuesaxlinearcategoryIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearcategory.png")}
            />
            <Text style={[styles.dashboardText, styles.mt4]}>Dashboard</Text>
          </View>
          <View style={[styles.frameView2, styles.ml50]}>
            <Image
              style={styles.vuesaxlinearsecurityCardIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsecuritycard.png")}
            />
            <Text style={[styles.stakingsText, styles.mt4]}>Stakings</Text>
          </View>
          <View style={[styles.frameView3, styles.ml50]}>
            <Image
              style={styles.vuesaxlinearreceipt2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearreceipt2.png")}
            />
            <Text style={[styles.activitiesText, styles.mt4]}>Activities</Text>
          </View>
          <View style={[styles.frameView4, styles.ml50]}>
            <Image
              style={styles.vuesaxlinearsetting2Icon}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsetting2.png")}
            />
            <Text style={[styles.settingsText, styles.mt4]}>Settings</Text>
          </View>
        </View>
      </View>
      <View style={styles.logoView}>
        <View style={styles.frameView6}>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
          <Text style={[styles.ahmedIdrisText, styles.ml10]}>Ahmed Idris</Text>
        </View>
      </View>
      <Image
        style={styles.groupIcon2}
        resizeMode="cover"
        source={require("../assets/group-3.png")}
      />
      <View style={styles.groupView13}>
        <View style={styles.rectangleView11} />
        <View style={styles.groupView11}>
          <View style={styles.rectangleView12} />
          <Text style={styles.totalStakingsText}>Total Stakings</Text>
          <Text style={styles.text6}>$50,000.00</Text>
        </View>
        <View style={styles.groupView12}>
          <View style={styles.rectangleView13} />
          <Text style={styles.totalWithdrawsText}>Total Withdraws</Text>
          <Text style={styles.text7}>$10,000.00</Text>
        </View>
        <Text style={styles.totalWalletBalance}>Total Wallet Balance</Text>
        <Text style={styles.text8}>$23,340.00</Text>
      </View>
      <Text style={styles.stakingsPlansText}>Stakings Plans</Text>
      <View style={styles.frameView7}>
        <View style={styles.groupView14}>
          <View style={styles.rectangleView14} />
          <Text style={styles.loremIpsumDolorSitAmetSe}>
            Lorem ipsum dolor sit amet, sectetur adipiscing elitgbsfbdrb
            etgsrvrg
          </Text>
          <Image
            style={styles.groupIcon3}
            resizeMode="cover"
            source={require("../assets/group-432.png")}
          />
          <Text style={styles.regularText}>{`Regular `}</Text>
        </View>
        <View style={[styles.groupView15, styles.mt16]}>
          <View style={styles.rectangleView15} />
          <Text style={styles.loremIpsumDolorSitAmetSe1}>
            Lorem ipsum dolor sit amet, sectetur adipiscing elitgbsfbdrb
            etgsrvrg
          </Text>
          <Image
            style={styles.groupIcon4}
            resizeMode="cover"
            source={require("../assets/group-433.png")}
          />
          <Text style={styles.targetText}>{`Target `}</Text>
        </View>
        <View style={[styles.groupView16, styles.mt16]}>
          <View style={styles.rectangleView16} />
          <Text style={styles.loremIpsumDolorSitAmetSe2}>
            Lorem ipsum dolor sit amet, sectetur adipiscing elitgbsfbdrb
            etgsrvrg
          </Text>
          <Image
            style={styles.groupIcon5}
            resizeMode="cover"
            source={require("../assets/group-434.png")}
          />
          <Text style={styles.safelockText}>Safelock</Text>
        </View>
      </View>
      <View style={styles.groupView17}>
        <View style={styles.rectangleView17} />
        <View style={styles.frameView12}>
          <View style={styles.frameView8}>
            <Image
              style={styles.vuesaxlinearcategoryIcon1}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearcategory1.png")}
            />
            <Text style={[styles.dashboardText1, styles.mt4]}>Dashboard</Text>
          </View>
          <View style={[styles.frameView9, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsecurityCardIcon1}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsecuritycard1.png")}
            />
            <Text style={[styles.stakingsText1, styles.mt4]}>Stakings</Text>
          </View>
          <View style={[styles.frameView10, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearreceipt2Icon1}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearreceipt21.png")}
            />
            <Text style={[styles.activitiesText1, styles.mt4]}>Activities</Text>
          </View>
          <View style={[styles.frameView11, styles.ml40]}>
            <Image
              style={styles.vuesaxlinearsetting2Icon1}
              resizeMode="cover"
              source={require("../assets/vuesaxlinearsetting21.png")}
            />
            <Text style={[styles.settingsText1, styles.mt4]}>Settings</Text>
          </View>
        </View>
      </View>
      <Text style={styles.recentStakingsText}>Recent Stakings</Text>
      <Text style={styles.seeAllText}>See all</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mt10: {
    marginTop: 10,
  },
  mt4: {
    marginTop: 4,
  },
  ml50: {
    marginLeft: 50,
  },
  ml10: {
    marginLeft: 10,
  },
  mt16: {
    marginTop: 16,
  },
  ml40: {
    marginLeft: 40,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#2097f6",
    width: 66,
    height: 65,
  },
  vuesaxbulkboxTickIcon: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 36.67,
    height: 36.67,
  },
  stakingForNewShoes: {
    position: "absolute",
    top: 6,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  stakingForThePurposeOfAN: {
    position: "absolute",
    top: 27,
    left: 72,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  pMText: {
    position: "absolute",
    top: 46,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb22: {
    position: "absolute",
    top: 46,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView: {
    position: "relative",
    width: 340,
    height: 65,
    flexShrink: 0,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  stakingForNewShoes1: {
    position: "absolute",
    top: 6,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  stakingForThePurposeOfAN1: {
    position: "absolute",
    top: 27,
    left: 72,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  pMText1: {
    position: "absolute",
    top: 46,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb221: {
    position: "absolute",
    top: 46,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(77, 137, 124, 0.3)",
    width: 66,
    height: 65,
  },
  vuesaxbulklockCircleIcon: {
    position: "absolute",
    height: "67.69%",
    width: "12.94%",
    top: "16.92%",
    right: "83.82%",
    bottom: "15.38%",
    left: "3.24%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  groupView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 340,
    height: 65,
  },
  groupView2: {
    position: "relative",
    width: 340,
    height: 65,
    flexShrink: 0,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  groupIcon: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 66,
    height: 65,
  },
  stakingForNewShoes2: {
    position: "absolute",
    top: 6,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text2: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  stakingForThePurposeOfAN2: {
    position: "absolute",
    top: 27,
    left: 72,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  pMText2: {
    position: "absolute",
    top: 46,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb222: {
    position: "absolute",
    top: 46,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 340,
    height: 65,
  },
  groupView4: {
    position: "relative",
    width: 340,
    height: 65,
    flexShrink: 0,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#2097f6",
    width: 66,
    height: 65,
  },
  vuesaxbulkboxTickIcon1: {
    position: "absolute",
    top: 15,
    left: 15,
    width: 36.67,
    height: 36.67,
  },
  stakingForNewShoes3: {
    position: "absolute",
    top: 6,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text3: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  stakingForThePurposeOfAN3: {
    position: "absolute",
    top: 27,
    left: 72,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  pMText3: {
    position: "absolute",
    top: 46,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb223: {
    position: "absolute",
    top: 46,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView5: {
    position: "relative",
    width: 340,
    height: 65,
    flexShrink: 0,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  groupIcon1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 66,
    height: 65,
  },
  stakingForNewShoes4: {
    position: "absolute",
    top: 6,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text4: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  stakingForThePurposeOfAN4: {
    position: "absolute",
    top: 27,
    left: 72,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  pMText4: {
    position: "absolute",
    top: 46,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb224: {
    position: "absolute",
    top: 46,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  groupView6: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 340,
    height: 65,
  },
  groupView7: {
    position: "relative",
    width: 340,
    height: 65,
    flexShrink: 0,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  stakingForNewShoes5: {
    position: "absolute",
    top: 6,
    left: 72,
    fontSize: 12,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
  },
  text5: {
    position: "absolute",
    top: 24,
    left: 251,
    fontSize: 14,
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "right",
  },
  stakingForThePurposeOfAN5: {
    position: "absolute",
    top: 27,
    left: 72,
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  pMText5: {
    position: "absolute",
    top: 46,
    left: 72,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  thFeb225: {
    position: "absolute",
    top: 46,
    left: 113,
    fontSize: 9,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "rgba(77, 137, 124, 0.3)",
    width: 66,
    height: 65,
  },
  vuesaxbulklockCircleIcon1: {
    position: "absolute",
    height: "67.69%",
    width: "12.94%",
    top: "16.92%",
    right: "83.82%",
    bottom: "15.38%",
    left: "3.24%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  groupView8: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 340,
    height: 65,
  },
  groupView9: {
    position: "relative",
    width: 340,
    height: 65,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 685,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 16,
    backgroundColor: "#e6eff3",
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
    width: 52,
    height: 53,
    flexShrink: 0,
  },
  dashboardText: {
    position: "relative",
    fontSize: 8,
    fontFamily: "Roboto",
    color: "#3f3f3f",
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
    fontSize: 8,
    fontFamily: "Roboto",
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
    fontSize: 8,
    fontFamily: "Roboto",
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
    fontSize: 8,
    fontFamily: "Roboto",
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
    top: 18,
    left: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView10: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
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
  frameView6: {
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
  groupIcon2: {
    position: "absolute",
    top: 32,
    left: 318,
    width: 47,
    height: 48,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 340,
    height: 189,
  },
  rectangleView12: {
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
  text6: {
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
  groupView11: {
    position: "absolute",
    top: 95,
    left: 10,
    width: 319,
    height: 36,
  },
  rectangleView13: {
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
  text7: {
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
  groupView12: {
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
  text8: {
    position: "absolute",
    top: 44,
    left: 96,
    fontSize: 26,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "left",
  },
  groupView13: {
    position: "absolute",
    top: 117,
    left: 25,
    width: 340,
    height: 189,
  },
  stakingsPlansText: {
    position: "absolute",
    top: 335,
    left: 22,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  rectangleView14: {
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
  groupIcon3: {
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
  groupView14: {
    position: "relative",
    width: 340,
    height: 80,
    flexShrink: 0,
  },
  rectangleView15: {
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
  groupIcon4: {
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
  groupView15: {
    position: "relative",
    width: 340,
    height: 80,
    flexShrink: 0,
  },
  rectangleView16: {
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
  groupIcon5: {
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
  groupView16: {
    position: "relative",
    width: 340,
    height: 80,
    flexShrink: 0,
  },
  frameView7: {
    position: "absolute",
    top: 361,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView17: {
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
  vuesaxlinearcategoryIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  dashboardText1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView8: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearsecurityCardIcon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  stakingsText1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView9: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearreceipt2Icon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  activitiesText1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView10: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  vuesaxlinearsetting2Icon1: {
    position: "relative",
    width: 24,
    height: 24,
    flexShrink: 0,
  },
  settingsText1: {
    position: "relative",
    fontSize: 10,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "left",
    opacity: 0.7,
  },
  frameView11: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  frameView12: {
    position: "absolute",
    top: 17,
    left: 41,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  groupView17: {
    position: "absolute",
    top: 771,
    left: 0,
    width: 390,
    height: 73,
  },
  recentStakingsText: {
    position: "absolute",
    top: 658,
    left: 21,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "center",
  },
  seeAllText: {
    position: "absolute",
    top: 659,
    left: 326,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "right",
  },
  uUSavingsView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUSavings;
