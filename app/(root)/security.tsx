import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Security = () => {
    const OptionItem = ({ title, description }: { title: string, description: string }) => (
        <TouchableOpacity className="flex flex-row items-center justify-between py-5 border-b border-primary-200">
            <View className="flex-1 pr-4">
                <Text className="text-base font-rubik-bold text-black-300">{title}</Text>
                <Text className="text-sm font-rubik text-black-200 mt-1">{description}</Text>
            </View>
            <Image source={icons.rightArrow} className="size-5" />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="flex flex-row items-center px-7 mt-5">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                >
                    <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>
                <Text className="text-xl font-rubik-bold ml-5">Security</Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-7">
                <OptionItem 
                    title="Change Password" 
                    description="Update your account password for enhanced security." 
                />
                <OptionItem 
                    title="Two-Factor Authentication" 
                    description="Add an extra layer of security to your account." 
                />
                <OptionItem 
                    title="Biometric Login" 
                    description="Use Face ID or Fingerprint to log in quickly." 
                />
                <OptionItem 
                    title="Connected Devices" 
                    description="Manage devices that are logged into your account." 
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Security;
