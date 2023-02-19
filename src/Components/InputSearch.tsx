import React from 'react'
import {
    View,
    TextInput,
    StyleSheet
} from 'react-native'
import CustomIcon from './CustomIcon'
// import Octicons from 'react-native-vector-icons/Octicons'

export default function InputSearch(props: any) {
    return (
        <View style={[styles.container]}>
            <CustomIcon
                size={14}
                name={'search'}
                IconFamilyType="Octicons"
            />
            <TextInput
                onChangeText={(value) => props?.onChangeText(value)}
                value={props.searchText}
                // placeholderTextColor={ Colors?.placeHolderColor }
                autoCapitalize='none'
                // onSubmitEditing={(e) => props?.onSubmitEditing(e.nativeEvent.text)}
                style={styles.input}
                placeholder={props?.placeholder || "Search"}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 36,
        marginHorizontal: 16,
        alignItems:'center',
        borderRadius: 8,
        // backgroundColor: Colors.themeWhite,
        flexDirection: 'row',
        // alignItems: "center"
    },
    input: {
        paddingLeft:5,
    }
})