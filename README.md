# Jooycar - Backend Test - Node Js/MongoDB 


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto para su funcionamiento en tu máquina local y así poder probarla._

### Pre-requisitos 📋


* [Google Chrome](https://www.google.com/chrome/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)
* [Node](https://nodejs.org/es/)


### Instalación 🔧

_Desacarga el proyecto de GitHub_


```
git clone https://github.com/lalolopez2021DEV/nest-api-test.git
```

_Luego ingresas al repositorio donde has descargado el proyecto, abres un terminal e instalas las librerías que requiere:_

```
npm install
```

_Luego para levantar la aplicación:_

```
npm start
```

## Funcionalidades 🖇️

# GET:
*  Solo se deben listar los administradores con estados active y pending
# POST:
*  Todos los campos para la creación de un administrador son requeridos y los
    correos deben ser únicos.
*  Inicialmente cuando se crea un administrador su estado será pending
*  Cuando se cree un nuevo administrador se debe enviar un invitación al
    administrador creado, (enviar un send a la api de notificaciones).
# PATCH:
*  Solo se puede editar el correo de los administradores en estado pending
*  Cuando se cambie el estado de un administrador de pending a active se debe
    enviar un confirm al endpoint de notificaciones.
*  Cuando se cambie el estado de un administrador pending a disable se debe
    enviar un reject al endpoint de notificaciones.
# DELETE:
*  Solo se pueden eliminar administradores con estado pending


## Expecificación técnica 🛠️

* Desarrollado en Node Js
* Base de datos MongoDB

## Documentación 📋

https://app.swaggerhub.com/apis/CONTABILIDAD/JooycarTest/1.0.0#/Notifications/post_api_notifications_v1_actions


## Versionado 📌

Se uso [GitHub](https://github.com/) para el versionado. Para todas las versiones disponibles (https://github.com/lalolopez2021DEV/nest-api-test).

## Autor ✒️

**Eduardo López Hidalgo - Dev Full Stack Senior** - *Backend Test*

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Finalmente 🎁

El presente test se ha realizado con muy buena actitud y deseo de realizar un desarrollo de calidad deseando que se cubran las espectactivas del evaluador. 