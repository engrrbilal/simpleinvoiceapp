import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Foundation from 'react-native-vector-icons/Foundation'
import Octicons from 'react-native-vector-icons/Octicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Zocial from 'react-native-vector-icons/Zocial'
import { DefaultVariables } from '@/Theme'

export default function CustomIcon({ 
    IconFamilyType='FontAwesome', 
    name = "", 
    color = DefaultVariables.Colors.blue, 
    size=20 
}: ICustomIcon) {
    if (IconFamilyType === "FontAwesome") {
        return <FontAwesome
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "AntDesign") {
        return <AntDesign
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "MaterialIcons") {
        return <MaterialIcons
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "Ionicons") {
        return <Ionicons
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "Entypo") {
        return <Entypo
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "MaterialCommunityIcons") {
        return <MaterialCommunityIcons
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "EvilIcons") {
        return <EvilIcons
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "Feather") {
        return <Feather
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "FontAwesome5") {
        return <FontAwesome5
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "Fontisto") {
        return <Fontisto
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "Foundation") {
        return <Foundation
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "Octicons") {
        return <Octicons
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "Zocial") {
        return <Zocial
            size={size}
            color={color}
            name={name}
        />
    } else if (IconFamilyType === "SimpleLineIcons") {
        return <SimpleLineIcons
            size={size}
            color={color}
            name={name}
        />
    } 
    return <FontAwesome
        size={size}
        color={color}
        name={name}
    />
}