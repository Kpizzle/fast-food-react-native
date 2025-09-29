import { Category } from "@/type";
import cn from "clsx";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import React, { useState } from "react";
import { FlatList, Platform, Text, TouchableOpacity } from "react-native";

const Filter = ({ categories }: { categories: Category[] }) => {
  const searchParams = useLocalSearchParams();
  const [active, setActive] = useState(searchParams.category || "");

  const handlePress = (id: string) => {
    console.log(id);
    setActive(id);

    if (id === "all") router.setParams({ category: undefined });
    else router.setParams({ category: id });
  };

  const filterData: (Category | { $id: string; name: string })[] = categories
    ? [{ $id: "all", name: "All" }, ...categories]
    : [{ $id: "all", name: "All" }];

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerClassName='gap-x-3 pb-3'
      data={filterData}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => handlePress(item.$id)}
          style={
            Platform.OS === "android"
              ? { elevation: 5, shadowColor: "#878787" }
              : {}
          }
          key={item.$id}
          className={cn(
            "filter",
            active === item.$id ? "bg-amber-500" : "bg-white"
          )}>
          <Text
            className={cn(
              "body-medium",
              active === item.$id ? "text-white" : "text-gray-200"
            )}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Filter;
