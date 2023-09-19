## Canvas

path ./src/clases/view

Utiliza la funcion `getCanvas()` para crear el elemento, el contexto y setear su tamaño al momento de instanciarse.
Ofrece tres metodos uno para limpiar el canvas otro para obtener el contexto y otro para obtener la posicion de alguno de sus lados obteniendola como:

`getSizes().top` , `getSizes().left` , etc.

\*`getCanvas()` path ./src/DOM

## Game

path ./src/clases/game

Esta es nuestra clase principal donde al instanciarla se crearan a su vez instancias de:

- canvas / contexto
- keyboard

Unicamente ofrece el metodo `play()` que se encargará de llamar a #startAnimation y setear 'isRunning' a true.

### #startAnimation()

Hace uso de requestAnimationFrame() dandole como argumento el que será nuestro bucle de animacion. Tambien usamos el id de animacion que nos devuelve y lo guardamos como propio para enventualmente poder detenerla.

### #stopAnimation()

Usa el id del cuadro de animacion para detenerla.

### #handleTimers(deltaTime)

Usando el deltaTime recibido para usar nuestros contadores internos podremos manejar actualizaciones segun un tiempo transcurrido ya sea en milisegundos o en 'ticks'. Como valores iniciales ambos pretenden ser de 1 segundo pero eso debe ser configurado a medida del usuiario.

### #clearCanvas

Utiliza el metodo clear() visto en la clase Canvas.

### #draw()

Setea el contador de fps para controlar la cantidad de veces que fue ejecutada en el tiempo deseado.
Debe ocuparse de llamar a los metodos del mismo nombre de los elementos que deban ser renderizados en el canvas.

### #update()

Setea el contador de aps para controlar la cantidad de veces que fue ejecutada en el tiempo deseado.
Este metodo debe ocuparse de actualizar la informacion del juego. Usar grandes bloques de logica en este componente puede resultar confuso rapidamente.

### #loop()

Este es nuestro bucle principal y es quien se encarga de la informacion mas fundamental en la ejecucion
