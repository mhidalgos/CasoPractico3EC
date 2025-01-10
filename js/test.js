global.alert = jest.fn();


/**
 * Importa la función `mostrarMensaje` desde el archivo correspondiente.
 */
const { mostrarMensaje } = require('./script');
/**
 * Prueba que la función `mostrarMensaje` devuelve el mensaje por defecto cuando no se pasa ningún argumento.
 */
test('mostrarMensaje debe devolver el mensaje correcto', () => {
  const mensaje = mostrarMensaje();
  expect(mensaje).toBe("¡Hola! Este es un mensaje.");
});
/**
 * Prueba que la función `mostrarMensaje` devuelve el mensaje proporcionado como argumento.
 */
test('mostrarMensaje debe devolver el mensaje correcto', () => {
    const mensaje = mostrarMensaje('Añadida Hamburguesa Vegana de la Dehesa');
    expect(mensaje).toBe("Añadida Hamburguesa Vegana de la Dehesa");
  });

  