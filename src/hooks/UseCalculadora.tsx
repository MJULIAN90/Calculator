import {useRef, useState} from 'react';

enum Operadores {
  sumar,
  restar,
  multiplicar,
  dividir,
}

const UseCalculadora = () => {
  const [numero, setNumero] = useState('0');
  const [numeroAnterior, setNumeroAnterior] = useState('0');

  const operacion = useRef<Operadores>();

  const clear = () => {
    setNumero('0');
    setNumeroAnterior('0');
  };

  const armarNumero = (numeroTexto: string) => {
    // No aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0')) {
      // Punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto);

        // Evaluar si es otro cero, y hay un punto
      } else if (numeroTexto === '0' && numero.includes('.')) {
        setNumero(numero + numeroTexto);

        // Evaluar si es diferente de cero y no tiene un punto
      } else if (numeroTexto !== '0' && !numero.includes('.')) {
        setNumero(numeroTexto);

        // Evitar 0000.0
      } else if (numeroTexto === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroTexto);
      }
    } else {
      setNumero(numero + numeroTexto);
    }
  };

  const positivoNegativo = () => {
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''));
    } else {
      setNumero('-' + numero);
    }
  };

  const del = () => {
    if (numero.startsWith('-') && numero.length === 2) setNumero('0');
    else if (numero.length === 1) setNumero('0');
    else {
      setNumero(numero.slice(0, -1));
    }
  };

  const cambiarNumPorAnterior = () => {
    if (numero.endsWith('.')) setNumeroAnterior(numero.slice(0, -1));
    else setNumeroAnterior(numero);

    setNumero('0');
  };

  const btnDividir = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.dividir;
  };

  const btnMultiplicar = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.multiplicar;
  };

  const btnSumar = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.sumar;
  };

  const btnRestar = () => {
    cambiarNumPorAnterior();
    operacion.current = Operadores.restar;
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (operacion.current) {
      case Operadores.sumar:
        setNumero(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumero(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumero(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        setNumero(`${num2 / num1}`);
        break;
    }
    setNumeroAnterior('0');
  };

  return {
    calcular,
    btnRestar,
    btnSumar,
    btnMultiplicar,
    btnDividir,
    del,
    positivoNegativo,
    armarNumero,
    numero,
    setNumero,
    numeroAnterior,
    setNumeroAnterior,
    clear,
  };
};

export default UseCalculadora;
