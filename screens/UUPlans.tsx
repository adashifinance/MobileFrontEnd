import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const UUPlans = () => {
  return (
    <View style={styles.uUPlansView}>
      <View style={styles.rectangleView} />
      <View style={styles.rectangleView1} />
      <Image
        style={styles.vuesaxlineararrowRightIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowright7.png")}
      />
      <Text style={styles.searchStakersOrAgentsID}>
        Search stakers or agents ID
      </Text>
      <Text style={styles.filterByText}>Filter by</Text>
      <Image
        style={styles.vuesaxlinearsearchNormalIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlinearsearchnormal.png")}
      />
      <Text style={styles.allStakingsText}>All stakings</Text>
      <View style={styles.rectangleView2} />
      <Image
        style={styles.vuesaxlineararrowLeftIcon}
        resizeMode="cover"
        source={require("../assets/vuesaxlineararrowleft.png")}
      />
      <View style={styles.frameView}>
        <View style={styles.groupView}>
          <View style={styles.rectangleView3} />
          <View style={styles.rectangleView4} />
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
            <View style={styles.rectangleView5} />
            <Text style={styles.stakingForNewShoes1}>
              Staking for new shoes
            </Text>
            <Text style={styles.text1}>$21,000.50</Text>
            <Text style={styles.stakingForThePurposeOfAN1}>
              Staking for the purpose of a ne...
            </Text>
            <Text style={styles.pMText1}>2:34PM</Text>
            <Text style={styles.thFeb221}>6th Feb ‘22</Text>
            <View style={styles.rectangleView6} />
            <Image
              style={styles.vuesaxbulklockCircleIcon}
              resizeMode="cover"
              source={require("../assets/vuesaxbulklockcircle.png")}
            />
          </View>
        </View>
        <View style={[styles.groupView4, styles.mt10]}>
          <View style={styles.groupView3}>
            <View style={styles.rectangleView7} />
            <Image
              style={styles.groupIcon}
              resizeMode="cover"
              source={require("../assets/group-435.png")}
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
          <View style={styles.rectangleView8} />
          <View style={styles.rectangleView9} />
          <Image
            style={styles.vuesaxbulkboxTickIcon1}
            resizeMode="cover"
            source={require("../assets/vuesaxbulkboxtick.png")}
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
            <View style={styles.rectangleView10} />
            <Image
              style={styles.groupIcon1}
              resizeMode="cover"
              source={require("../assets/group-435.png")}
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
            <View style={styles.rectangleView11} />
            <Text style={styles.stakingForNewShoes5}>
              Staking for new shoes
            </Text>
            <Text style={styles.text5}>$21,000.50</Text>
            <Text style={styles.stakingForThePurposeOfAN5}>
              Staking for the purpose of a ne...
            </Text>
            <Text style={styles.pMText5}>2:34PM</Text>
            <Text style={styles.thFeb225}>6th Feb ‘22</Text>
            <View style={styles.rectangleView12} />
            <Image
              style={styles.vuesaxbulklockCircleIcon1}
              resizeMode="cover"
              source={require("../assets/vuesaxbulklockcircle.png")}
            />
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
  rectangleView: {
    position: "absolute",
    top: 117,
    left: 25,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#127dd3",
    borderWidth: 1,
    width: 340,
    height: 48,
  },
  rectangleView1: {
    position: "absolute",
    top: 188,
    left: 25,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#6a6a6a",
    borderWidth: 1,
    width: 102,
    height: 34,
  },
  vuesaxlineararrowRightIcon: {
    position: "absolute",
    top: 195,
    left: 96,
    width: 20,
    height: 20,
  },
  searchStakersOrAgentsID: {
    position: "absolute",
    top: 134,
    left: 67,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
    opacity: 0.7,
  },
  filterByText: {
    position: "absolute",
    top: 197,
    left: 32,
    fontSize: 12,
    fontFamily: "Montserrat",
    color: "#3f3f3f",
    textAlign: "center",
    opacity: 0.7,
  },
  vuesaxlinearsearchNormalIcon: {
    position: "absolute",
    top: 129,
    left: 35,
    width: 24,
    height: 24,
    opacity: 0.7,
  },
  allStakingsText: {
    position: "absolute",
    top: 46,
    left: 151,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#6a6a6a",
    textAlign: "left",
    opacity: 0.7,
  },
  rectangleView2: {
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
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView4: {
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
  rectangleView5: {
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
  rectangleView6: {
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
  rectangleView7: {
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
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 340,
    height: 64,
  },
  rectangleView9: {
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
  rectangleView10: {
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
  rectangleView11: {
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
  rectangleView12: {
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
    top: 240,
    left: 25,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  uUPlansView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUPlans;
