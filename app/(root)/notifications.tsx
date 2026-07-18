import { View, Text, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Notifications = () => {
    const [pushEnabled, setPushEnabled] = useState(true);
    const [emailEnabled, setEmailEnabled] = useState(false);
    const [smsEnabled, setSmsEnabled] = useState(true);
    const [promoEnabled, setPromoEnabled] = useState(false);

    const ToggleItem = ({ title, description, value, onValueChange }: any) => (
        <View className="flex flex-row items-center justify-between py-4 border-b border-primary-200">
            <View className="flex-1 pr-4">
                <Text className="text-base font-rubik-bold text-black-300">{title}</Text>
                <Text className="text-sm font-rubik text-black-200 mt-1">{description}</Text>
            </View>
            <Switch
                trackColor={{ false: '#f5f5f5', true: '#0061ff' }}
                thumbColor={'#ffffff'}
                ios_backgroundColor="#f5f5f5"
                onValueChange={onValueChange}
                value={value}
            />
        </View>
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
                <Text className="text-xl font-rubik-bold ml-5">Notifications</Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-7">
                <ToggleItem 
                    title="Push Notifications" 
                    description="Receive alerts on your device for bookings and messages." 
                    value={pushEnabled} 
                    onValueChange={setPushEnabled} 
                />
                <ToggleItem 
                    title="Email Notifications" 
                    description="Receive daily summaries and important updates via email." 
                    value={emailEnabled} 
                    onValueChange={setEmailEnabled} 
                />
                <ToggleItem 
                    title="SMS Notifications" 
                    description="Get SMS alerts for urgent booking confirmations." 
                    value={smsEnabled} 
                    onValueChange={setSmsEnabled} 
                />
                <ToggleItem 
                    title="Promotions & Offers" 
                    description="Receive special offers and recommendations." 
                    value={promoEnabled} 
                    onValueChange={setPromoEnabled} 
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Notifications;
