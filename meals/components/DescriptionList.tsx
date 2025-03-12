import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  descriptions: string[];
};
const DescriptionList = ({ title, descriptions }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {descriptions.map((description, index) => (
        <Text style={styles.item} key={index}>
          {description}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: "#D76C82",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#D76C82",
    padding: 8,
  },
  item: {
    color: "#D76C82",
    width: "100%",
    padding: 6,
    textAlign: "center",
    borderRadius: 8,
    backgroundColor: "#EBE8DB",
    marginBottom: 8,
  },
});

export default DescriptionList;
