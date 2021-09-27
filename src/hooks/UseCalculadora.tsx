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
  const [operador, setOperador] = useState(undefined);

  const operacion = useRef<Operadores>();

  const clear = () => {
    setNumero('0');
    setNumeroAnterior('0');
    setOperador(undefined);
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
    else if (operador === undefined && numeroAnterior === '0') {
      setNumeroAnterior(numero);
    }

    if (operador === undefined) {
      setNumero('0');
    }
  };

  const btnDividir = () => {
    if (numero !== 'ERROR') {
      if (numeroAnterior !== '0') {
        calcular();
      }
      cambiarNumPorAnterior();
      operacion.current = Operadores.dividir;
      setOperador('/');
    }
    setNumero('0');
  };

  const btnMultiplicar = () => {
    if (numero !== 'ERROR') {
      if (numeroAnterior !== '0') {
        calcular();
      }
      cambiarNumPorAnterior();
      operacion.current = Operadores.multiplicar;
      setOperador('x');
    }
    setNumero('0');
  };

  const btnSumar = () => {
    if (numero !== 'ERROR') {
      if (numeroAnterior !== '0') {
        calcular();
      }
      cambiarNumPorAnterior();
      operacion.current = Operadores.sumar;
      setOperador('+');
    }
    setNumero('0');
  };

  const btnRestar = () => {
    if (numero !== 'ERROR') {
      if (numeroAnterior !== '0') {
        calcular();
      }
      cambiarNumPorAnterior();
      operacion.current = Operadores.restar;
      setOperador('-');
    }
    setNumero('0');
  };

  const calcular = () => {
    const num1 = Number(numero);
    const num2 = Number(numeroAnterior);

    switch (operacion.current) {
      case Operadores.sumar:
        setNumeroAnterior(`${num1 + num2}`);
        break;
      case Operadores.restar:
        setNumeroAnterior(`${num2 - num1}`);
        break;
      case Operadores.multiplicar:
        setNumeroAnterior(`${num1 * num2}`);
        break;
      case Operadores.dividir:
        if (numero === '0') {
          setNumeroAnterior('ERROR');
          break;
        }
        setNumero(`${num2 / num1}`);
        break;
    }
    setNumero('0');
    setOperador(undefined);
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
    operador,
  };
};

export default UseCalculadora;
