import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Payments = () => {
    const paymentMethods = [
        { id: '1', title: 'Apple Pay', icon: icons.wallet, default: true },
        { id: '2', title: 'Visa **** 4242', icon: icons.wallet, default: false },
        { id: '3', title: 'PayPal', icon: icons.wallet, default: false },
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
                <Text className="text-xl font-rubik-bold ml-5">Payments</Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-7">
                <Text className="text-lg font-rubik-bold text-black-300 mb-5">
                    Saved Payment Methods
                </Text>

                <View className="flex flex-col gap-4">
                    {paymentMethods.map((method) => (
                        <View
                            key={method.id}
                            className="flex flex-row items-center justify-between p-5 rounded-2xl border border-primary-200 bg-white shadow-sm shadow-zinc-200"
                        >
                            <View className="flex flex-row items-center gap-4">
                                <Image source={method.icon} className="size-7" tintColor="#0061ff" />
                                <View className="flex flex-col">
                                    <Text className="text-base font-rubik-medium text-black-300">
                                        {method.title}
                                    </Text>
                                    {method.default && (
                                        <Text className="text-xs font-rubik text-primary-300 mt-1">
                                            Default
                                        </Text>
                                    )}
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Image source={icons.edit} className="size-5" tintColor="#666876" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                <TouchableOpacity className="flex flex-row items-center justify-center bg-primary-100 p-5 rounded-2xl mt-5 border border-primary-300 border-dashed">
                    <Text className="text-base font-rubik-bold text-primary-300">+ Add New Payment Method</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Payments;
