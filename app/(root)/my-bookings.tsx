import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';
import { propertiesImages } from '@/lib/data';

const MyBookings = () => {
    const [activeTab, setActiveTab] = useState('Upcoming');

    const bookings = [
        {
            id: '1',
            property: 'Luxury Villa 1',
            date: 'Oct 15, 2026',
            status: 'Upcoming',
            image: propertiesImages[0],
            price: '$5000',
        },
        {
            id: '2',
            property: 'Modern Apartment',
            date: 'Sep 10, 2026',
            status: 'Completed',
            image: propertiesImages[1],
            price: '$3200',
        },
        {
            id: '3',
            property: 'Cozy Cottage',
            date: 'Aug 05, 2026',
            status: 'Completed',
            image: propertiesImages[2],
            price: '$1500',
        },
    ];

    const filteredBookings = bookings.filter((b) => b.status === activeTab);

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="flex flex-row items-center px-7 mt-5">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                >
                    <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>
                <Text className="text-xl font-rubik-bold ml-5">My Bookings</Text>
            </View>

            <View className="flex flex-row px-7 mt-7 gap-5">
                {['Upcoming', 'Completed', 'Canceled'].map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        className={`pb-2 ${activeTab === tab ? 'border-b-2 border-primary-300' : ''}`}
                    >
                        <Text className={`font-rubik-bold text-lg ${activeTab === tab ? 'text-primary-300' : 'text-black-200'}`}>
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-5" showsVerticalScrollIndicator={false}>
                {filteredBookings.length === 0 ? (
                    <View className="flex items-center justify-center mt-20">
                        <Text className="text-lg font-rubik-medium text-black-200">No {activeTab} Bookings</Text>
                    </View>
                ) : (
                    <View className="flex flex-col gap-5 mt-2">
                        {filteredBookings.map((booking) => (
                            <TouchableOpacity key={booking.id} className="flex flex-row items-center bg-white border border-primary-200 rounded-2xl p-4 shadow-sm shadow-zinc-200">
                                <Image source={{ uri: booking.image }} className="size-20 rounded-xl" />
                                <View className="flex flex-col ml-4 flex-1">
                                    <Text className="text-base font-rubik-bold text-black-300">{booking.property}</Text>
                                    <Text className="text-sm font-rubik text-black-200 mt-1">{booking.date}</Text>
                                    <View className="flex flex-row items-center justify-between mt-2">
                                        <Text className="text-primary-300 font-rubik-bold">{booking.price}</Text>
                                        <View className={`px-3 py-1 rounded-full ${booking.status === 'Upcoming' ? 'bg-primary-100' : booking.status === 'Completed' ? 'bg-green-100' : 'bg-gray-100'}`}>
                                            <Text className={`text-xs font-rubik-medium ${booking.status === 'Upcoming' ? 'text-primary-300' : booking.status === 'Completed' ? 'text-green-600' : 'text-black-200'}`}>
                                                {booking.status}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

export default MyBookings;
