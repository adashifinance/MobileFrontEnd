import * as React from "react";
import { StyleSheet, View } from "react-native";

const UUSplash = () => {
  return <View style={styles.uUSplashView} />;
};

const styles = StyleSheet.create({
  uUSplashView: {
    position: "relative",
    borderRadius: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default UUSplash;
