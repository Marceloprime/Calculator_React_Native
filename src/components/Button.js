import React from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

const style = StyleSheet.create({
    button:{
        fontSize: 35,
        height: Dimensions.get('window').width/4,
        width: Dimensions.get('window').width/4,
        padding: 20,
        backgroundColor: '#f5f5dc',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231',
    },
    buttonDouble:{
        color: '#fff',
        backgroundColor: '#00ced1',
        width: (Dimensions.get('window').width/4)*2,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width/4)*3,
    },
})

export default props =>{
    const styleButton = [style.button]
    if(props.double) styleButton.push(style.buttonDouble)
    if(props.triple) styleButton.push(style.buttonTriple)
    if(props.operation) styleButton.push(style.operationButton)
    return(//usar o proprio botao para passa o valor para a funcao
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}