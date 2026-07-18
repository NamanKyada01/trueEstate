import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const HelpCenter = () => {
    const faqs = [
        { q: 'How do I book a property?', a: 'You can book a property by navigating to the property details and tapping "Book Now".' },
        { q: 'Can I cancel my booking?', a: 'Yes, you can cancel your booking from the My Bookings section up to 24 hours before the date.' },
        { q: 'How do I contact an agent?', a: 'You can contact the agent directly from the property details screen via chat or phone call.' },
    ];

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="flex flex-row items-center px-7 mt-5">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                >
                    <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>
                <Text className="text-xl font-rubik-bold ml-5">Help Center</Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-7">
                <Text className="text-lg font-rubik-bold text-black-300 mb-5">
                    Frequently Asked Questions
                </Text>

                <View className="flex flex-col gap-5">
                    {faqs.map((faq, index) => (
                        <View key={index} className="flex flex-col border-b border-primary-200 pb-4">
                            <Text className="text-base font-rubik-bold text-black-300">{faq.q}</Text>
                            <Text className="text-sm font-rubik text-black-200 mt-2">{faq.a}</Text>
                        </View>
                    ))}
                </View>

                <View className="mt-10">
                    <Text className="text-lg font-rubik-bold text-black-300 mb-5">
                        Still need help?
                    </Text>
                    <TouchableOpacity className="flex flex-row items-center justify-center bg-primary-300 py-4 rounded-full shadow-md shadow-zinc-400">
                        <Text className="text-white text-lg font-rubik-bold text-center">
                            Contact Support
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HelpCenter;
