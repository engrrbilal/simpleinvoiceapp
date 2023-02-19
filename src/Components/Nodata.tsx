import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import CustomIcon from './CustomIcon'
// import Ionicons from 'react-native-vector-icons/Ionicons'

export default function NoData({ style }: Record<string, any>) {
    return (
        <View style={[styles.container, {
            ...style
        }]}>
            <View style={styles.parentCircle}>
                <View style={styles.childCircle}>
                    <CustomIcon
                        color={'blue'}
                        size={40}
                        name={'search'}
                        IconFamilyType="Ionicons"
                    />
                </View>
            </View>
            <Text style={styles.text}>{"No data found !"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: "10%"
    },
    parentCircle: {
        height: 100,
        width: 100,
        borderWidth: 2,
        borderRadius: 50,
        borderStyle: 'dashed',
        borderColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    childCircle: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        // fontFamily: Fonts.regular,
        color: 'grey',
        fontSize: 12,
        marginTop: 16
    }
})