import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultadoPeque: {
    color: '#9B9B9B',
    fontSize: 30,
    textAlign: 'right',
  },
  resultado: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    height: 80,
    width: 80,
    //backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  textoBoton: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
