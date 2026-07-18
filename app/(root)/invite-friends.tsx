import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';
import images from '@/constants/images';

const InviteFriends = () => {
    return (
        <SafeAreaView className="bg-white h-full">
            <View className="flex flex-row items-center px-7 mt-5">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                >
                    <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>
                <Text className="text-xl font-rubik-bold ml-5">Invite Friends</Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-10">
                <View className="flex items-center justify-center">
                    <Image source={images.onboarding} className="w-full h-64" resizeMode="contain" />
                    
                    <Text className="text-2xl font-rubik-bold text-black-300 text-center mt-5">
                        Share ReState with Friends!
                    </Text>
                    <Text className="text-base font-rubik text-black-200 text-center mt-3 px-5">
                        Invite your friends and family to explore the best real estate options and earn rewards together.
                    </Text>

                    <View className="bg-primary-100 rounded-xl py-4 px-5 w-full mt-10 flex flex-row items-center justify-between border border-primary-200 border-dashed">
                        <Text className="text-base font-rubik-bold text-black-300">
                            RESTATE-2026-XQ
                        </Text>
                        <TouchableOpacity>
                            <Text className="text-primary-300 font-rubik-bold">COPY</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity className="flex flex-row items-center justify-center w-full bg-primary-300 py-4 rounded-full mt-7 shadow-md shadow-zinc-400">
                        <Text className="text-white text-lg font-rubik-bold text-center">
                            Share Invite Link
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default InviteFriends;
