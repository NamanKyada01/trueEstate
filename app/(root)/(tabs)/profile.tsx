import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    ImageSourcePropType,
    Alert,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';
import { settings } from '@/constants/data';
import { useGlobalContext } from '@/lib/global-provider';
import { logout } from '@/lib/appwrite';
import { router } from 'expo-router';

interface SettingsItemProps {
    icon: ImageSourcePropType;
    title: string;
    onPress?: () => void;
    textStyle?: string;
    showArrow?: boolean;
}

const SettingItem = ({
    icon,
    title,
    onPress,
    textStyle,
    showArrow = true,
}: SettingsItemProps) => (
    <TouchableOpacity
        className="flex flex-row items-center justify-between py-3"
        onPress={onPress}
    >
        <View className="flex flex-row items-center gap-3">
            <Image source={icon} className="size-6" />

            <Text
                className={`text-lg font-rubik-medium text-black-300 ${textStyle}`}
            >
                {title}
            </Text>
        </View>
        {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
);

const Profile = () => {
    const { user, refetch } = useGlobalContext();
    const handleLogout = async () => {
        const result = await logout();

        if (result) {
            Alert.alert('Success', 'You have been logged out successfully!');
            refetch();
        } else {
            Alert.alert('Error', 'An error occurred while logging out!.');
        }
    };

    const navigateToScreen = (title: string) => {
        switch (title) {
            case 'My Bookings':
                router.push('/(root)/my-bookings');
                break;
            case 'Payments':
                router.push('/(root)/payments');
                break;
            case 'Profile':
                router.push('/(root)/profile-details');
                break;
            case 'Notifications':
                router.push('/(root)/notifications');
                break;
            case 'Security':
                router.push('/(root)/security');
                break;
            case 'Language':
                router.push('/(root)/language');
                break;
            case 'Help Center':
                router.push('/(root)/help-center');
                break;
            case 'Invite Friends':
                router.push('/(root)/invite-friends');
                break;
            default:
                break;
        }
    };

    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerClassName="pb-32 px-7"
            >
                <View className="flex flex-row items-center justify-between mt-5">
                    <Text className="text-x1 font-rubik-bold">Profile </Text>
                    <Image source={icons.bell} className="size-5" />
                </View>
                <View className="flex-row justify-center flex mt-5">
                    <View className="flex flex-col items-center relative mt-5">
                        <Image
                            source={{ uri: user?.avatar }}
                            className="size-44 relative rounded-full"
                        />
                        <TouchableOpacity onPress={() => router.push('/(root)/profile-details')} className="absolute bottom-11 right-2 bg-white rounded-full shadow-sm p-2">
                            <Image source={icons.edit} className="size-6" />
                        </TouchableOpacity>
                        <Text className="text-2xl font-rubik-bold mt-2">
                            {user?.name}
                        </Text>
                    </View>
                </View>
                <View className="flex flex-col mt-10">
                    <SettingItem 
                        icon={icons.calendar} 
                        title="My Bookings" 
                        onPress={() => navigateToScreen('My Bookings')}
                    />
                    <SettingItem 
                        icon={icons.wallet} 
                        title="Payments" 
                        onPress={() => navigateToScreen('Payments')}
                    />
                </View>
                <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
                    {settings.slice(2).map((item, index) => (
                        <SettingItem 
                            key={index} 
                            {...item} 
                            onPress={() => navigateToScreen(item.title)}
                        />
                    ))}
                </View>

                <View className="flex flex-col mt-5 border-t pt-5 border-primary-200">
                    <SettingItem
                        icon={icons.logout}
                        title="Logout"
                        textStyle="text-danger"
                        showArrow={false}
                        onPress={handleLogout}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default Profile;
