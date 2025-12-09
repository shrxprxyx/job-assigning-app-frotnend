import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default function UserDetails() {

  const router = useRouter();
  
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [skills, setSkills] = useState("");
  const [aadhaarImage, setAadhaarImage] = useState<string | null>(null);

  const Aadhaar = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ["images"], 
    allowsEditing: true,
    quality: 0.8,
  });

  if (!result.canceled) {
    setAadhaarImage(result.assets[0].uri);
  }
};


  const handleSubmit = () => {
    if (!name || !age || !skills || !aadhaarImage) {
      alert("Please fill all fields");
      return;
    }
    //router.push("/home");
  };

  return (
    <View className="flex-1 px-6 justify-center">

      <View className="items-center mb-6">
        <FontAwesome name="paper-plane" size={48} color="#0D1821" />
        <Text className="text-3xl mt-8 font-bold text-textmain">
          User Details
        </Text>
      </View>

      <Text className="text-textmuted font-medium">Full Name</Text>
      <TextInput
        className="bg-[#c7c7c7] p-3 rounded-xl mt-1 mb-3"
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <Text className="text-textmuted font-medium">Age</Text>
      <TextInput
        className="bg-[#c7c7c7] p-3 rounded-xl mt-1 mb-3"
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text className="text-textmuted font-medium">Skills</Text>
      <TextInput
        className="bg-[#c7c7c7] p-3 rounded-xl mt-1 mb-3"
        placeholder="Skills"
        value={skills}
        onChangeText={setSkills}
      />

      <Text className="text-textmuted font-medium mt-2">Aadhaar Card</Text>

      <TouchableOpacity
        onPress={Aadhaar}
        className="bg-[#c7c7c7] rounded-xl p-4 mt-2 mb-3"
      >
        {aadhaarImage ? (
          <Image
            source={{ uri: aadhaarImage }}
            className="w-full h-40 rounded-xl"
            resizeMode="cover"
          />
        ) : (
          <View className="items-center justify-center py-8">
            <FontAwesome name="upload" size={28} color="#0D1821" />
            <Text className="text-textmuted mt-2">Upload Aadhaar</Text>
          </View>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        className="bg-accent p-4 rounded-xl mt-4"
        onPress={handleSubmit}
      >
        <Text className="text-center text-white font-bold text-lg">
          Continue
        </Text>
      </TouchableOpacity>

    </View>
  );
}
