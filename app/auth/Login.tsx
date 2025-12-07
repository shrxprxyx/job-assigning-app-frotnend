import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();

  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (!phone) {
      alert("Enter phone number");
      return;
    }
  };

  return (
    <View className="flex-1 bg-bgmain px-6 justify-center">
      <Text className="text-3xl font-bold text-textmain mb-6">Login</Text>

      <Text className="text-textmuted font-medium">Phone Number</Text>
      <TextInput
        className="bg-card p-3 rounded-xl mt-1 mb-3"
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        className="bg-accent p-4 rounded-xl mt-4"
        onPress={handleLogin}
      >
        <Text className="text-center text-white font-bold text-lg">
          Continue
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/")}>
        <Text className="text-center text-textmuted text-sm underline mt-4">
          Don’t have an account? Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}
