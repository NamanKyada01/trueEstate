import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import icons from '@/constants/icons';

const Language = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const languages = [
        { name: 'English', code: 'ENG' },
        { name: 'Spanish', code: 'ESP' },
        { name: 'French', code: 'FRA' },
        { name: 'German', code: 'GER' },
        { name: 'Chinese', code: 'ZHO' },
        { name: 'Japanese', code: 'JPN' },
        { name: 'Arabic', code: 'ARA' },
        { name: 'Hindi', code: 'HIN' },
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
                <Text className="text-xl font-rubik-bold ml-5">Language</Text>
            </View>

            <ScrollView contentContainerClassName="px-7 pb-32 mt-7">
                <Text className="text-lg font-rubik-bold text-black-300 mb-5">
                    Select Preferred Language
                </Text>

                <View className="flex flex-row flex-wrap justify-between gap-y-5">
                    {languages.map((lang) => {
                        const isSelected = selectedLanguage === lang.name;
                        return (
                            <TouchableOpacity
                                key={lang.name}
                                onPress={() => setSelectedLanguage(lang.name)}
                                className={`w-[47%] flex flex-col items-center justify-center p-5 rounded-2xl border ${isSelected ? 'border-primary-300 bg-primary-100 shadow-sm shadow-primary-200' : 'border-primary-200 bg-white'}`}
                            >
                                <View className={`size-16 rounded-full flex items-center justify-center mb-3 ${isSelected ? 'bg-primary-300' : 'bg-primary-100'}`}>
                                    <Text className={`text-xl font-rubik-bold ${isSelected ? 'text-white' : 'text-primary-300'}`}>
                                        {lang.code}
                                    </Text>
                                </View>
                                <Text className={`text-base font-rubik-medium text-center ${isSelected ? 'text-primary-300' : 'text-black-300'}`}>
                                    {lang.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Language;
