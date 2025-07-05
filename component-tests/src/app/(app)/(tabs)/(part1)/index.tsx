import React from "react";
import { Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const someImages = [
  "https://plus.unsplash.com/premium_photo-1673292293042-cafd9c8a3ab3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1252&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?q=80&w=1312&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=3074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Part1Index = () => {
  return (
    <ScrollView
      contentContainerStyle={{ alignItems: "center", paddingVertical: 20 }}
    >
      {someImages.map((image) => (
        <Image
          source={{
            uri: image,
          }}
          key={image}
          style={{
            width: "100%",
            height: 400,
            marginBottom: 24,
            borderRadius: 12,
          }}
          resizeMode="cover"
        />
      ))}
    </ScrollView>
  );
};

export default Part1Index;
