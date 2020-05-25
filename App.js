import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

//Componetes criados
import Button from './src/components/Button'
import Display from './src/components/Display'

//States usados na aplicacao
const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0,0],//a calculadora guarda os valores da operacao em um array
  current: 0,
}



export default class App extends Component {
  state = {...initialState}// state receber os estados criados acima 

  addDigit = n =>{//n eh o digito do usuario
    
    const clearDisplay = this.state.displayValue === '0'
    || this.state.clearDisplay//Nao permite que usuario coloque 0000 
    
    if(n === '.' && !clearDisplay &&this.state.displayValue.includes('.')){
      return//nao permite que o usuario coloque ... ou 8.8.9
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !== '.'){//nao permite que o usuario coloque ... ou 8.8.9
      const newValue = parseFloat(displayValue)
      const values = {...this.state.values}
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  clearMemory = () => {
    this.setState({...initialState})//limpa o display
  }

  setOperation = operation =>{
    if(this.state.current === 0){//Setar a operacao e limpa o display quando ocorre o proximo digito
      this.setState({operation, current: 1, clearDisplay: true})
    }
    else{
      const equals = operation === '='
      const values = {...this.state.values}
      try{
        values[0] = 
          eval(`${values[0]} ${this.state.operation} ${values[1]}`)
      }
      catch(e){
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        //clearDisplay: !equal,
        clearDisplay: true,
        values,
      })
    }
  }



  render() {
    return(
      <View style={style.container}>
        <Display value={this.state.displayValue} />
        <View style={style.buttons}>
          <Button label='AC' triple onClick={this.clearMemory}/>
          <Button label='/' operation onClick={this.setOperation}/>
          <Button label='7' onClick={this.addDigit}/>
          <Button label='8' onClick={this.addDigit}/>

          <Button label='9'  onClick={this.addDigit}/>
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4'  onClick={this.addDigit}/>
          <Button label='5'  onClick={this.addDigit}/>

          <Button label='6'  onClick={this.addDigit}/>
          <Button label='-' operation onClick={this.setOperation}/>
          <Button label='1'  onClick={this.addDigit}/>
          <Button label='2'  onClick={this.addDigit}/>
          <Button label='3'  onClick={this.addDigit}/>
          <Button label='+' operation onClick={this.setOperation}/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='0'  onClick={this.addDigit}/>
          <Button label='=' double  onClick={this.setOperation}/>

        </View>
      </View>
    )
  }
}


const style = StyleSheet.create({
  container:{
    flex: 1,
  },
  buttons:{
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
})