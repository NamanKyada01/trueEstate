import { View, Text, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';
import { useGlobalContext } from '@/lib/global-provider';

const ProfileDetails = () => {
    const { user } = useGlobalContext();

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="flex flex-row items-center px-7 mt-5">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                >
                    <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>
                <Text className="text-xl font-rubik-bold ml-5">Edit Profile</Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-7">
                <View className="flex flex-col items-center justify-center mt-5 mb-10">
                    <View className="relative">
                        <Image source={{ uri: user?.avatar }} className="size-32 rounded-full" />
                        <TouchableOpacity className="absolute bottom-0 right-0 bg-primary-300 size-10 rounded-full flex items-center justify-center border-4 border-white">
                            <Image source={icons.edit} className="size-5" tintColor="white" />
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-col gap-6">
                    <View>
                        <Text className="text-sm font-rubik-medium text-black-200 mb-2">Full Name</Text>
                        <TextInput
                            className="bg-white border border-primary-200 rounded-xl p-4 font-rubik-medium text-black-300 text-base"
                            defaultValue={user?.name}
                            placeholderTextColor="#666876"
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-rubik-medium text-black-200 mb-2">Email Address</Text>
                        <TextInput
                            className="bg-white border border-primary-200 rounded-xl p-4 font-rubik-medium text-black-300 text-base"
                            defaultValue={user?.email}
                            keyboardType="email-address"
                            placeholderTextColor="#666876"
                        />
                    </View>

                    <View>
                        <Text className="text-sm font-rubik-medium text-black-200 mb-2">Phone Number</Text>
                        <TextInput
                            className="bg-white border border-primary-200 rounded-xl p-4 font-rubik-medium text-black-300 text-base"
                            placeholder="+1 (555) 000-0000"
                            keyboardType="phone-pad"
                            placeholderTextColor="#666876"
                        />
                    </View>
                </View>
            </ScrollView>

            <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-primary-200 p-7">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex flex-row items-center justify-center py-4 rounded-full shadow-md shadow-zinc-400 bg-primary-300"
                >
                    <Text className="text-white text-lg text-center font-rubik-bold">
                        Save Changes
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProfileDetails;
