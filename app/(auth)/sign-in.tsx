import { router } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView>
      <Text>Sign In</Text>
      <Button title="Sign In" onPress={() => router.push("/sign-up")} />
    </SafeAreaView>
  );
};

export default SignIn;
