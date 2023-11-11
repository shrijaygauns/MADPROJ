import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone1415Pro1 = () => {
  return (
    <View style={styles.iphone1415Pro1}>
      <View style={styles.hostBlockParent}>
        <View style={[styles.hostBlock, styles.hostShadowBox]} />
        <Text style={[styles.hostParty, styles.partyFlexBox]}>{`HOST
PARTY`}</Text>
      </View>
      <View style={styles.hostBlockGroup}>
        <View style={[styles.hostBlock1, styles.hostShadowBox]} />
        <Text style={[styles.joinParty, styles.partyFlexBox]}>{`JOIN
PARTY`}</Text>
      </View>
      <Image
        style={[styles.iphone1415Pro1Child, styles.iphone1415Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Text style={[styles.sync, styles.partyFlexBox]}>
        <Text style={styles.syn}>SYN</Text>
        <Text style={styles.c}>C</Text>
      </Text>
      <Image
        style={[styles.iphone1415Pro1Item, styles.iphone1415Layout]}
        resizeMode="cover"
        source={require("../assets/ellipse-5.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  hostShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_29xl,
    left: 0,
    top: 0,
    height: 134,
    width: 292,
    position: "absolute",
  },
  partyFlexBox: {
    textAlign: "center",
    lineHeight: 60,
    position: "absolute",
  },
  iphone1415Layout: {
    height: 431,
    width: 415,
    position: "absolute",
  },
  hostBlock: {
    backgroundColor: "#3391ff",
  },
  hostParty: {
    marginTop: -60,
    marginLeft: -136,
    width: 273,
    color: Color.colorWhite,
    fontFamily: FontFamily.lexendDecaSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_47xl,
    left: "50%",
    top: "50%",
    textAlign: "center",
    lineHeight: 60,
  },
  hostBlockParent: {
    top: 411,
    height: 134,
    left: 49,
    width: 292,
    position: "absolute",
  },
  hostBlock1: {
    backgroundColor: "#0bcfac",
  },
  joinParty: {
    marginTop: -78.5,
    marginLeft: -117,
    width: 233,
    height: 164,
    color: Color.colorWhite,
    fontFamily: FontFamily.lexendDecaSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_47xl,
    left: "50%",
    top: "50%",
    textAlign: "center",
    lineHeight: 60,
  },
  hostBlockGroup: {
    top: 577,
    left: 50,
    height: 171,
    width: 292,
    position: "absolute",
  },
  iphone1415Pro1Child: {
    left: 0,
    top: 0,
    width: 415,
  },
  syn: {
    color: "#000",
  },
  c: {
    color: Color.colorWhite,
  },
  sync: {
    top: 76,
    fontSize: 92,
    fontWeight: "700",
    fontFamily: FontFamily.libreBaskervilleBold,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    lineHeight: 60,
    left: 49,
  },
  iphone1415Pro1Item: {
    top: 249,
    left: -710,
  },
  iphone1415Pro1: {
    backgroundColor: "#accdf3",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default IPhone1415Pro1;
