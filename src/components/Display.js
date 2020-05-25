import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const style = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f0ffff',
        alignItems: 'flex-end'
    },
    displayValue:{
        fontSize: 60,
        color: '#000000',
    }
})

export default props =>
    <View style={style.display}>
        <Text style={style.displayValue}
            numberOfLines={1}>{props.value}
        </Text>
    </View>