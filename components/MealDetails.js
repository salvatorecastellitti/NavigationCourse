import { View, Text, StyleSheet } from "react-native";

function MealDetails({
  duration,
  complexity,
  affordability,
  style,
  textStyle,
}) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.dettailItem, textStyle]}>{duration}m</Text>
      <Text style={[styles.dettailItem, textStyle]}>
        {complexity.toUpperCase()}
      </Text>
      <Text style={[styles.dettailItem, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    justifyContent: "center",
  },
  dettailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
