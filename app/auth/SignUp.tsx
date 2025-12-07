import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignUp() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [skills, setSkills] = useState("");

  const handleSubmit = () => {
    if (!name || !age || !phone) {
      alert("Please fill all required fields");
      return;
    }

    router.push("/auth/Login");
  };

  return (
    <View className="flex-1 bg-bgmain px-6 justify-center">

      <View className="items-center mb-6">
        <FontAwesome name="paper-plane" size={48} color="#0D1821" />
        <Text className="text-3xl mt-8 font-bold text-textmain">
          Create Account
        </Text>
      </View>

      <Text className="text-textmuted font-medium">Full Name</Text>
      <TextInput
        className="bg-card p-3 rounded-xl mt-1 mb-3"
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <Text className="text-textmuted font-medium">Age</Text>
      <TextInput
        className="bg-card p-3 rounded-xl mt-1 mb-3"
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text className="text-textmuted font-medium">Phone Number</Text>
      <TextInput
        className="bg-card p-3 rounded-xl mt-1 mb-3"
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text className="text-textmuted font-medium">Skills</Text>
      <TextInput
        className="bg-card p-3 rounded-xl mt-1 mb-3"
        placeholder="Skills"
        value={skills}
        onChangeText={setSkills}
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
    </View>
  );
}

