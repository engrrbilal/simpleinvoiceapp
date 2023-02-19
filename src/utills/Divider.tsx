import React from 'react'
import {
    View,
    StyleSheet
} from 'react-native';

export default function Divider({ customStyles }: Record<string, any>) {
    return (
        <View style={[styles.container, customStyles]}/>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        marginVertical: 12,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
})