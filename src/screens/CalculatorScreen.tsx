import React from 'react';
import {View, Text} from 'react-native';
import BotonCalc from '../components/BotonCalc';
import {styles} from '../theme/appTheme';
import UseCalculadora from '../hooks/UseCalculadora';

const CalculatorScreen = ({}) => {
  const {
    calcular,
    btnRestar,
    btnSumar,
    btnMultiplicar,
    btnDividir,
    del,
    positivoNegativo,
    armarNumero,
    numero,
    numeroAnterior,
    clear,
  } = UseCalculadora();
  return (
    <View style={styles.container}>
      {numeroAnterior !== '0' && (
        <Text style={styles.resultadoPeque}> {numeroAnterior}</Text>
      )}
      <Text
        style={styles.resultado}
        numberOfLines={1}
        adjustsFontSizeToFit={true}>
        {numero}{' '}
      </Text>
      <View style={styles.fila}>
        <BotonCalc text="c" color="#9B9B9B" action={clear} />
        <BotonCalc text="+/-" color="#9B9B9B" action={positivoNegativo} />
        <BotonCalc text="del" color="#9B9B9B" action={del} />
        <BotonCalc text="/" color="#FF9427" action={btnDividir} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="7" action={armarNumero} />
        <BotonCalc text="8" action={armarNumero} />
        <BotonCalc text="9" action={armarNumero} />
        <BotonCalc text="x" color="#FF9427" action={btnMultiplicar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="4" action={armarNumero} />
        <BotonCalc text="5" action={armarNumero} />
        <BotonCalc text="6" action={armarNumero} />
        <BotonCalc text="-" color="#FF9427" action={btnRestar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="1" action={armarNumero} />
        <BotonCalc text="2" action={armarNumero} />
        <BotonCalc text="3" action={armarNumero} />
        <BotonCalc text="+" color="#FF9427" action={btnSumar} />
      </View>
      <View style={styles.fila}>
        <BotonCalc text="0" action={armarNumero} ancho />
        <BotonCalc text="." action={armarNumero} />
        <BotonCalc text="=" color="#FF9427" action={calcular} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
