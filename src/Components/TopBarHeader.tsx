import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from './CustomIcon';

export default function TopBarHeader({ 
    titleText = "",
    leftIconName = "keyboard-arrow-left",
    leftIconFamilyType = "MaterialIcons",
    leftClickHandler,
    rightClickHandler,
    rightIconName = "",
    rightComponent,
    noLeftIcon = false,
    rightIconFamilyType = "MaterialIcons" }: ITopbarHeader) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                {!noLeftIcon ?
                    <TouchableOpacity onPress={leftClickHandler ? leftClickHandler : () => navigation.goBack()}>
                        <CustomIcon
                            size={24}
                            name={leftIconName}
                            IconFamilyType={leftIconFamilyType}
                        />
                    </TouchableOpacity>
                    : <View />
                }
            </View>
            <Text style={styles.title}>
                {titleText}
            </Text>
            <View>
                {rightIconName && rightIconFamilyType ?
                    <TouchableOpacity onPress={rightClickHandler && rightClickHandler }>
                        <CustomIcon 
                            size={24}
                            name={rightIconName}
                            IconFamilyType={rightIconFamilyType}
                        />
                    </TouchableOpacity>
                    : <View />
                }
                {rightComponent ?
                    rightComponent
                    : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 16,
        paddingRight: 16,
        flexDirection: "row",
        paddingTop: 36,
        height: 76,
        justifyContent: 'space-between',
    },
    contentContainer: {
        flexDirection: "row",
        justifyContent: 'flex-start',
    },
    title: {
        fontSize: 16,
    }
})