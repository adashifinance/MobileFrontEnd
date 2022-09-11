import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const APin = () => {
  return (
    <View style={styles.aPinView}>
      <Image
        style={styles.aDASHIFiSquareTrans2Icon}
        resizeMode="cover"
        source={require("../assets/adashifisquaretrans-2.png")}
      />
      <Text style={styles.setupYourSecurePassphrase}>
        <Text style={styles.setupYourSecure}>Setup Your Secure</Text>
        <Text style={styles.passphraseText}>Passphrase</Text>
      </Text>
      <Text style={styles.thisPhraseIsTheOnlyWayTo}>
        <Text style={styles.thisPhraseIs}>
          This phrase is the only way to recover your wallet
        </Text>
        <Text style={styles.doNotShare}>Do not share it with anyone!</Text>
      </Text>
      <View style={styles.frameView}>
        <Text style={styles.iSavedMySecretPhrase}>
          I saved my secret phrase
        </Text>
      </View>
      <Image
        style={styles.backIcon}
        resizeMode="cover"
        source={require("../assets/back.png")}
      />
      <View style={styles.btnView}>
        <View style={styles.rectangleView} />
        <Text style={styles.confirmText}>Confirm</Text>
      </View>
      <View style={styles.btnView1}>
        <View style={styles.rectangleView1} />
        <Text style={styles.confirmText1}>Confirm</Text>
      </View>
      <View style={styles.btnView2}>
        <View style={styles.rectangleView2} />
        <Text style={styles.confirmText2}>Confirm</Text>
      </View>
      <View style={styles.btnView3}>
        <View style={styles.rectangleView3} />
        <Text style={styles.confirmText3}>Confirm</Text>
      </View>
      <View style={styles.btnView4}>
        <View style={styles.rectangleView4} />
        <Text style={styles.confirmText4}>Confirm</Text>
      </View>
      <View style={styles.btnView5}>
        <View style={styles.rectangleView5} />
        <Text style={styles.confirmText5}>Confirm</Text>
      </View>
      <View style={styles.btnView6}>
        <View style={styles.rectangleView6} />
        <Text style={styles.confirmText6}>Confirm</Text>
      </View>
      <View style={styles.btnView7}>
        <View style={styles.rectangleView7} />
        <Text style={styles.confirmText7}>Confirm</Text>
      </View>
      <View style={styles.btnView8}>
        <View style={styles.rectangleView8} />
        <Text style={styles.confirmText8}>Confirm</Text>
      </View>
      <View style={styles.btnView9}>
        <View style={styles.rectangleView9} />
        <Text style={styles.confirmText9}>Confirm</Text>
      </View>
      <View style={styles.btnView10}>
        <View style={styles.rectangleView10} />
        <Text style={styles.confirmText10}>Confirm</Text>
      </View>
      <View style={styles.btnView11}>
        <View style={styles.rectangleView11} />
        <Text style={styles.confirmText11}>Confirm</Text>
      </View>
      <View style={styles.btnView12}>
        <View style={styles.rectangleView12} />
        <Text style={styles.confirmText12}>Confirm</Text>
      </View>
      <View style={styles.btnView13}>
        <View style={styles.rectangleView13} />
        <Text style={styles.confirmText13}>Confirm</Text>
      </View>
      <Text style={styles.bellText}>#1 Bell</Text>
      <Text style={styles.bellText1}>#1 Bell</Text>
      <Text style={styles.bellText2}>#1 Bell</Text>
      <Text style={styles.cheeseText}>#4 Cheese</Text>
      <Text style={styles.footballText}>#7 Football</Text>
      <Text style={styles.sierraText}>#10 Sierra</Text>
      <Text style={styles.doorText}>#2 Door</Text>
      <Text style={styles.displayText}>#5 Display</Text>
      <Text style={styles.magicText}>#8 Magic</Text>
      <Text style={styles.bikeText}>#11 Bike</Text>
      <Text style={styles.copyText}>Copy</Text>
      <Text style={styles.continueText}>Continue</Text>
      <Text style={styles.basketText}>#3 Basket</Text>
      <Text style={styles.magnetText}>#6 Magnet</Text>
      <Text style={styles.waterText}>#9 Water</Text>
      <Text style={styles.vultureText}>#12 Vulture</Text>
      <Image
        style={styles.btnIcon}
        resizeMode="cover"
        source={require("../assets/btn.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  aDASHIFiSquareTrans2Icon: {
    position: "absolute",
    top: 35,
    left: 139,
    width: 111,
    height: 49,
  },
  setupYourSecure: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  passphraseText: {
    margin: 0,
  },
  setupYourSecurePassphrase: {
    position: "absolute",
    top: 134,
    left: 49,
    fontSize: 28,
    fontWeight: "600",
    fontFamily: "Montserrat",
    color: "#127dd3",
    textAlign: "left",
  },
  thisPhraseIs: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  doNotShare: {
    margin: 0,
  },
  thisPhraseIsTheOnlyWayTo: {
    position: "absolute",
    top: 231,
    left: 49,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    width: 313,
  },
  iSavedMySecretPhrase: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#6a6a6a",
    textAlign: "left",
    width: 313,
  },
  frameView: {
    position: "absolute",
    top: 622,
    left: 65,
    width: 313,
    height: 16,
  },
  backIcon: {
    position: "absolute",
    top: 32,
    left: 25,
    width: 47,
    height: 48,
  },
  rectangleView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView: {
    position: "absolute",
    top: 313,
    left: 44,
    width: 282,
    height: 91,
  },
  rectangleView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText1: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView1: {
    position: "absolute",
    top: 477,
    left: 44,
    width: 282,
    height: 91,
  },
  rectangleView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText2: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView2: {
    position: "absolute",
    top: 555,
    left: 44,
    width: 282,
    height: 91,
  },
  rectangleView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText3: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView3: {
    position: "absolute",
    top: 314,
    left: 158,
    width: 282,
    height: 91,
  },
  rectangleView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText4: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView4: {
    position: "absolute",
    top: 396,
    left: 158,
    width: 282,
    height: 91,
  },
  rectangleView5: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText5: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView5: {
    position: "absolute",
    top: 478,
    left: 158,
    width: 282,
    height: 91,
  },
  rectangleView6: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText6: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView6: {
    position: "absolute",
    top: 556,
    left: 158,
    width: 282,
    height: 91,
  },
  rectangleView7: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText7: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView7: {
    position: "absolute",
    top: 314,
    left: 269,
    width: 282,
    height: 91,
  },
  rectangleView8: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText8: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView8: {
    position: "absolute",
    top: 396,
    left: 269,
    width: 282,
    height: 91,
  },
  rectangleView9: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText9: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView9: {
    position: "absolute",
    top: 478,
    left: 269,
    width: 282,
    height: 91,
  },
  rectangleView10: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 92.89,
    height: 46.14,
  },
  confirmText10: {
    position: "absolute",
    top: 72.74,
    left: 92.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 189.11,
    height: 18.26,
  },
  btnView10: {
    position: "absolute",
    top: 556,
    left: 269,
    width: 282,
    height: 91,
  },
  rectangleView11: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#6a6a6a",
    width: 120.89,
    height: 46.14,
  },
  confirmText11: {
    position: "absolute",
    top: 72.74,
    left: 120.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 246.11,
    height: 18.26,
  },
  btnView11: {
    position: "absolute",
    top: 747,
    left: 73,
    width: 367,
    height: 91,
  },
  rectangleView12: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 120.89,
    height: 46.14,
  },
  confirmText12: {
    position: "absolute",
    top: 73.14,
    left: 0,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 246.11,
    height: 18.26,
  },
  btnView12: {
    position: "absolute",
    top: 747,
    left: 210,
    width: 246.11,
    height: 91.4,
  },
  rectangleView13: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#127dd3",
    width: 120.89,
    height: 46.14,
  },
  confirmText13: {
    position: "absolute",
    top: 72.74,
    left: 120.89,
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
    width: 246.11,
    height: 18.26,
  },
  btnView13: {
    position: "absolute",
    top: 936,
    left: -181,
    width: 367,
    height: 91,
  },
  bellText: {
    position: "absolute",
    top: 329,
    left: 59,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  bellText1: {
    position: "absolute",
    top: 329,
    left: 59,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  bellText2: {
    position: "absolute",
    top: 329,
    left: 59,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  cheeseText: {
    position: "absolute",
    top: 410,
    left: 59,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  footballText: {
    position: "absolute",
    top: 491,
    left: 59,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  sierraText: {
    position: "absolute",
    top: 572,
    left: 59,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  doorText: {
    position: "absolute",
    top: 329,
    left: 173,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  displayText: {
    position: "absolute",
    top: 410,
    left: 173,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  magicText: {
    position: "absolute",
    top: 491,
    left: 173,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  bikeText: {
    position: "absolute",
    top: 572,
    left: 173,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  copyText: {
    position: "absolute",
    top: 762,
    left: 117,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  continueText: {
    position: "absolute",
    top: 762,
    left: 246,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  basketText: {
    position: "absolute",
    top: 329,
    left: 283,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  magnetText: {
    position: "absolute",
    top: 410,
    left: 283,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  waterText: {
    position: "absolute",
    top: 491,
    left: 283,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  vultureText: {
    position: "absolute",
    top: 572,
    left: 283,
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#e6eff3",
    textAlign: "left",
  },
  btnIcon: {
    position: "absolute",
    top: 620,
    left: 43,
    width: 272,
    height: 146,
  },
  aPinView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default APin;
