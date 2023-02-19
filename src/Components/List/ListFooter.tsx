import React from 'react'
import { View, Text } from 'react-native'
import Spinner from '../Spinner'
export default function ListFooter() {
    return (
        <View style={{ justifyContent:'center',alignItems:'center', marginBottom:10 }}>
            <Spinner size='small'/>
        </View>
    )
}
