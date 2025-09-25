import { router } from "expo-router";
import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  return (
    <SafeAreaView>
      <Text>Sign Up</Text>
      <Button title="Sign Up" onPress={() => router.push("/sign-in")} />
    </SafeAreaView>
  );
};

export default SignUp;
