## El objeto request express

El objeto request es la forma más sencilla y detallada que tenemos dentro de Express para poder manipular las peticiones que se generen en el uso de nuestra aplicación, así con este objeto podremos capturar las cabeceras, los datos enviados por el usuario, e incluso los datos enviados por Ajax. En Express podemos utilizar varios elementos pertenecientes al objeto request para la manipulación de la data, veamos los más útiles y su explicación correspondiente:

- req.params
    Este objeto nos permite obtener las rutas, nombres y sus parámetros, se utiliza para obtener más que todos los datos que envía una sección de nuestra aplicación.

- req.param.name
    Este objeto nos permite obtener el valor de algún envío en particular ya sea vía POST o GET, es muy útil para recibir solo uno de los valores.

- req.query
    Este es muy útil para obtener el querystring de una URL, normalmente se empareja con el método GET y los valores los obtenemos como una configuración llave-valor, inclusive este objeto nos puede ser útil para llenar algún tipo de Base de Datos al estilo de redis por mencionar alguna.



- req.body
    Esta especificación de nuestro objeto nos permite capturar el contenido de un request hecho con el método POST, sin embargo para poder utilizar este objeto de forma normal en nuestra aplicación necesitamos de un middleware para poder capturar estos datos de una forma que podamos procesarlos.

- req.headers
    Este objeto recibe las cabeceras desde el cliente, es decir, lo que explicábamos con anterioridad que serían los datos que envía el navegador.

- req.xhr
    Con este objeto podemos determinar qué tipo de petición estamos recibiendo, así podremos saber que fue un Ajax o una petición normal del navegador, con ello sabremos qué tipo de procesamiento debemos hacer según la lógica de nuestra aplicación.

- req.url
    Con este podemos recibir la URL del cliente, así obtendremos la ruta especifica que está llegando a nuestra aplicación.

## El objeto response

A pesar que este tutorial es sobre el objeto request, el objeto response va de la mano con este, ya que una vez que recibimos una petición lo más lógico es enviar una respuesta y como tal debemos utilizar algún método en particular para hacer esto. Veamos a continuación los métodos más importantes que podemos utilizar con el objeto response en Express.

- res.status(code)
    Este es quizás el más útil de los métodos que tenemos en Express, con el código de respuesta le podemos decir a un navegador si la petición que envió fue adecuada, si el procesamiento fue correcto, o si no tiene permisos para acceder a esa ruta con esa petición, estos códigos que se manejan son numéricos y estándar, el más conocido es el 200 de aceptación, seguido del 404 que es recurso no encontrado o el 500 que es un fallo del servidor.

- res.set(field, value)
    Con este método podemos enviar un valor a la cabecera del navegador, sin embargo su utilización de forma manual no está recomendada.

- res.send(body)
    Nos permite enviar la respuesta al navegador o al cliente, se utiliza en conjunción con el método set, ya que el primero establece el valor y con este hacemos el envío, por ejemplo al momento de desarrollar una cabecera especifica que deseamos utilizar.

- res.json()
    Este método nos permite enviar nuestra respuesta en forma de JSON, como sabemos o deberíamos saber, este es el formato básico que debemos manejar al trabajar con JavaScript ya que nos permite enviar documentos de forma sencilla y que se puede utilizar en otros lenguajes.

- res.render(view, &#91, callback)']
- Este método nos permite mostrar las vistas de Express, por ejemplo cuando creamos        una ruta y esta debe generar una vista el método render es el encargado de realizar esta operación.

# QUERY STRING
Cadena de consulta 
    
Éste término generalmente se utiliza para hacer referencias a una interacción con una base de datos. Es la parte de la URL que contiene los datos que deben pasar a las aplicaciones web.

Sintaxis:

- La secuencia de petición (query string) se inicia con un signo de interrogación “?”.
- Todos los parámetros se componen de un nombre y un valor: “Nombre=Valor”.
- Si se han de adjuntar varios parámetros, se unen con un signo “&”.
    
    ejemplo:
~~~
www.sitiodeejemplo.net/pagina.php?nombredevalor1=valor1&nombredevalor2=valor2
~~~

~~~
GET /search?platform=Windows&category=office
~~~