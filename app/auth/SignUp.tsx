import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function SignUp() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    if (!phone) {
      alert("Please fill all required fields");
      return;
    }
    router.push("/auth/user-details");
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: "center",
        paddingHorizontal: 24,
        paddingVertical: 15,
      }}
      enableOnAndroid={true}
      extraScrollHeight={30}
      keyboardOpeningTime={0}
    >
      <View className="items-center mb-6">
        <FontAwesome name="paper-plane" size={48} color="#0D1821" />
        <Text className="text-3xl mt-8 font-bold text-textmain">
          Create Account
        </Text>
      </View>

      <Text className="text-textmuted font-medium">Phone Number</Text>
      <TextInput
        className="bg-[#c7c7c7] p-3 rounded-xl mt-1 mb-3"
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TouchableOpacity
        className="bg-accent p-4 rounded-xl mt-4"
        onPress={handleSubmit}
      >
        <Text className="text-center text-white font-bold text-lg">
          Continue
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.push("/auth/Login")}
        className="mt-4"
      >
        <Text className="text-center text-textmuted text-sm underline">
          Already have an account? Login
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
}
