import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import icons from '@/constants/icons';

const BookProperty = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const [step, setStep] = useState(1);
    
    // Multi-select for dates
    const [selectedDates, setSelectedDates] = useState<string[]>([]);
    const [selectedPayment, setSelectedPayment] = useState<string | null>(null);

    const dates = ['Oct 15', 'Oct 16', 'Oct 17', 'Oct 18', 'Oct 19', 'Oct 20'];
    const payments = [
        { id: '1', title: 'Apple Pay', icon: icons.wallet },
        { id: '2', title: 'Credit Card', icon: icons.wallet },
        { id: '3', title: 'PayPal', icon: icons.wallet },
    ];

    const toggleDate = (date: string) => {
        if (selectedDates.includes(date)) {
            setSelectedDates(selectedDates.filter(d => d !== date));
        } else {
            setSelectedDates([...selectedDates, date]);
        }
    };

    // Calculate dynamic cost: $150 per day (mock logic)
    const costPerNight = 150;
    const totalCost = selectedDates.length > 0 ? selectedDates.length * costPerNight : 0;

    const nextStep = () => {
        if (step < 3) setStep(step + 1);
        else {
            // Confirm Booking -> go to my bookings
            router.push('/(root)/my-bookings');
        }
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <View className="flex flex-row items-center px-7 mt-5">
                <TouchableOpacity
                    onPress={() => step > 1 ? setStep(step - 1) : router.back()}
                    className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
                >
                    <Image source={icons.backArrow} className="size-5" />
                </TouchableOpacity>
                <Text className="text-xl font-rubik-bold ml-5">
                    {step === 1 ? 'Select Dates' : step === 2 ? 'Payment Method' : 'Confirmation'}
                </Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-7">
                {step === 1 && (
                    <View className="flex gap-5">
                        <Text className="text-lg font-rubik-bold text-black-300">
                            Select one or more days for your stay
                        </Text>
                        <View className="flex flex-row flex-wrap gap-4 mt-2">
                            {dates.map((date) => {
                                const isSelected = selectedDates.includes(date);
                                return (
                                    <TouchableOpacity
                                        key={date}
                                        onPress={() => toggleDate(date)}
                                        className={`px-6 py-3 rounded-full border ${isSelected ? 'border-primary-300 bg-primary-300' : 'border-primary-200 bg-white'}`}
                                    >
                                        <Text className={`font-rubik-medium ${isSelected ? 'text-white' : 'text-black-200'}`}>
                                            {date}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                        {selectedDates.length > 0 && (
                            <View className="mt-10 p-5 bg-primary-100 rounded-2xl border border-primary-200 flex flex-row justify-between items-center">
                                <Text className="font-rubik-medium text-black-200">{selectedDates.length} night(s) selected</Text>
                                <Text className="font-rubik-bold text-primary-300 text-lg">${totalCost}</Text>
                            </View>
                        )}
                    </View>
                )}

                {step === 2 && (
                    <View className="flex gap-5">
                        <View className="bg-primary-100 p-5 rounded-2xl mb-2 flex flex-row items-center justify-between border border-primary-200 border-dashed">
                            <Text className="text-base font-rubik-medium text-black-300">Total Amount</Text>
                            <Text className="text-xl font-rubik-bold text-primary-300">${totalCost}</Text>
                        </View>

                        <Text className="text-lg font-rubik-bold text-black-300 mt-2">
                            Choose Payment Method
                        </Text>
                        <View className="flex flex-col gap-4 mt-2">
                            {payments.map((method) => (
                                <TouchableOpacity
                                    key={method.id}
                                    onPress={() => setSelectedPayment(method.id)}
                                    className={`flex flex-row items-center justify-between p-5 rounded-2xl border ${selectedPayment === method.id ? 'border-primary-300 bg-primary-100' : 'border-primary-200 bg-white'}`}
                                >
                                    <View className="flex flex-row items-center gap-4">
                                        <Image source={method.icon} className="size-7" tintColor="#0061ff" />
                                        <Text className="text-base font-rubik-medium text-black-300">
                                            {method.title}
                                        </Text>
                                    </View>
                                    <View className={`size-5 rounded-full border flex items-center justify-center ${selectedPayment === method.id ? 'border-primary-300' : 'border-primary-200'}`}>
                                        {selectedPayment === method.id && (
                                            <View className="size-3 rounded-full bg-primary-300" />
                                        )}
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                )}

                {step === 3 && (
                    <View className="flex items-center justify-center mt-10 p-7 bg-green-50 rounded-3xl border border-green-200 shadow-sm shadow-zinc-200">
                        <View className="size-24 rounded-full bg-green-100 flex items-center justify-center mb-5 border-4 border-white shadow-sm">
                            <Image source={icons.calendar} className="size-10" tintColor="#16a34a" />
                        </View>
                        <Text className="text-3xl font-rubik-bold text-green-600 text-center">
                            Success!
                        </Text>
                        <Text className="text-base font-rubik text-black-200 text-center mt-3 leading-6">
                            Your booking for <Text className="font-rubik-bold">{selectedDates.length} nights</Text> is confirmed. We will charge <Text className="font-rubik-bold text-green-600">${totalCost}</Text> to your selected payment method.
                        </Text>
                    </View>
                )}
            </ScrollView>

            <View className="absolute bg-white bottom-0 w-full rounded-t-2xl border-t border-primary-200 p-7">
                <TouchableOpacity
                    onPress={nextStep}
                    disabled={(step === 1 && selectedDates.length === 0) || (step === 2 && !selectedPayment)}
                    className={`flex flex-row items-center justify-center py-4 rounded-full shadow-md shadow-zinc-400 ${(step === 1 && selectedDates.length === 0) || (step === 2 && !selectedPayment) ? 'bg-black-100 opacity-50' : step === 3 ? 'bg-green-600' : 'bg-primary-300'}`}
                >
                    <Text className="text-white text-lg text-center font-rubik-bold">
                        {step === 3 ? 'View My Bookings' : 'Continue'}
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default BookProperty;
