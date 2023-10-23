import React from 'react';
import { StyleSheet } from 'react-native';
import { windowHeight, windowWidth } from '../utils/globalVariables';
import {
    Icon, GlobeIcon, MobileIcon, TeleIcon, CreditCardIcon, WalletIcon, RightArrowIcon, BulbIcon, 
    NotificationIcon, CallIcon, WalletOutlineIcon, FilterIcon, AccountIcon, WaveIcon, HomeIcon, 
    FileIcon, EyeIcon, DownloadIcon, UploadIcon, MoreIcon, UserIcon, UsersIcon, QuestionIcon,
    SettingsIcon, BookIcon, SignOutIcon, ToggleOffIcon, ToggleOnIcon, BookMarkIcon, AirplaneIcon,
    HotelIcon, CarRentalIcon, CloseIcon, PassengerIcon, CarDoorIcon, AirConIcon, PetrolIcon,
    GearIcon
} from '../utils/Iconexports';


const Icons = ({name, size, color, style}) => {
    switch (name) {
        case 'chevron-left':
            return <Icon name="chevron-left" size={25} color="#000" />
            break;
        case 'chevron-small-right':
            return <RightArrowIcon name="chevron-small-right" size={30} color="#000" />
        break;
        case 'call-outline':
            return <CallIcon name="call" size={35} color={color} style={style}/>
            break;
        case 'television':
            return <TeleIcon name="television" size={30} color="#1000C7" />
            break;
        case 'more-horizontal':
            return <MoreIcon name="more-horizontal" size={35} color="#1000C7" />
            break;
        case 'home-minus-black':
            return <HomeIcon name="home-minus" size={35} color="#000"/> 
            break;
        case 'notifications':
            return <NotificationIcon name="notifications" size={size} color="#fff" />
            break;
        case 'notifications-blue':
            return <NotificationIcon name="notifications" size={35} color="#1000C7" />
            break;
        case 'home-minus-blue':
            return <HomeIcon name="home-minus" style={styles.home} size={32}  color="#1000C7" />
            break;
        case 'filetext1-black':
            return <FileIcon name="filetext1" size={27} color="#000"/>
            break;
        case 'filetext1-blue':
            return <FileIcon name="filetext1" size={30}  color="#1000C7" />
            break;    
        case 'wallet-membership-black':
            return <WalletIcon name="wallet-membership" color="#000" size={30}/>
            break;
        case 'wallet-membership-blue':
            return <WalletIcon name="wallet-membership" size={30}  color="#1000C7" />
            break;
        case 'account-outline-black':
            return <AccountIcon name="account-outline" size={30} color="#000" />
            break;
        case 'account-outline-blue':
            return <AccountIcon name="account-outline" size={30} color="#1000C7" />
            break;
        case 'close':
            return <CloseIcon name="close" style={style} size={size} color={color} />
            break;
        case 'download':
            return <DownloadIcon name="download" style={styles.download} size={25} color="#fff" />
            break;
        case 'hand-wave':
            return <WaveIcon name="hand-wave" size={25} color="#F9C535" />
            break;
        case 'eye-off':
            return <EyeIcon name="eye-off" style={styles.eyeClosed} size={25} color="#6B7280" />
            break;
        case 'eye':
            return <EyeIcon name="eye" style={styles.eyeClosed} size={25} color="#6B7280" />
            break;
        case 'filter':
            return <FilterIcon name="filter" size={35} color="#1000C7" />
            break;
        case 'globe-africa':
            return <GlobeIcon name="globe-africa" size={35} color="#1000C7" />
            break;
        case 'lightbulb-variant':
            return <BulbIcon name="lightbulb-variant" size={35} color="#1000C7" />
            break;
        case 'wallet-outline':
            return <WalletOutlineIcon name="wallet-outline" size={35} color="#000" />
            break;
        case 'credit-card':
            return <CreditCardIcon name="credit-card" size={30} color="#000" />
            break;
        case 'mobile-alt':
            return <MobileIcon name="mobile-alt" size={35} color="#000" />
            break;
        case 'upload':
            return <UploadIcon name="upload" size={25} color="#fff" />
            break;
        case 'user':
            return <UserIcon name="user" size={30} color="#000" />
            break;
        case 'settings':
            return <SettingsIcon name="settings" size={30} color="#5FA8EE" />
            break;
        case 'users':
            return <UsersIcon name="users" size={30} color="#1DAB87" />
            break;
        case 'question':
            return <QuestionIcon name="question" size={30} color="#DEABFF" />
            break;
        case 'book-open':
            return <BookIcon name="book-open" size={30} color="#FF8181" />
        break;
        case 'book-open-black':
            return <BookIcon name="book-open" size={30} color="#000" />
        break;
        case 'book-bookmark':
            return <BookMarkIcon name="book-bookmark" size={32} color="#000" />
        break;
        case 'sign-out':
            return <SignOutIcon name="arrow-top-left-bold-box-outline" size={30} color="#000" />
        break;
        case 'toggle-off':
            return <ToggleOffIcon name="toggle-off" size={30} color="#1000C7" />
        break;
        case 'toggle-on':
            return <ToggleOnIcon name="toggle-on" size={30} color="#1000C7" />
        break;
        case 'airplane':
            return <AirplaneIcon name="airplane" size={30} color="#1000C7" />
        break;
        case 'hotel':
            return <HotelIcon name="hotel" size={30} color="#1000C7" />
        break;
        case 'car':
            return <CarRentalIcon name="car-rental" size={30} color="#1000C7" />
        break;
        case 'seat-passenger':
            return <PassengerIcon name="seat-passenger" size={30} color="#000" />
        break;
        case 'car-door':
            return <CarDoorIcon name="car-door" size={30} color="#000" />
        break;
        case 'air-conditioner':
            return <AirConIcon name="air-conditioner" size={30} color="#000" />
        break;
        case 'gas-station':
            return <PetrolIcon name="gas-station" size={30} color="#000" />
        break;
        case 'car-shift-pattern':
            return <GearIcon name="car-shift-pattern" size={30} color="#000" />
        break;

        default:
            return <Icon name="chevron-left" size={30} color="#0D0" />

    }
}

const styles = StyleSheet.create({
    arrowRight: {
        position: 'absolute',
        top: 3,
        right: -10,
    },
    close: {
        paddingVertical: 13,
        marginLeft: 15,
        backgroundColor: '#034273',
    },
    arrowLeft: {
        position: 'absolute',
        top: 29,
        marginLeft: 15,
    },
    vector_logo: {
        margin: 8,
    },

    eyeClosed: {
        position: 'absolute',
        bottom: windowHeight * 0.04,
        left: windowWidth * 0.72,
        zIndex: 1
    },

});
export default Icons;