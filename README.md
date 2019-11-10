# Proyecto: Application MEAN Full-stack: Back-End

1. ## Consultas

- ### Users

| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| User | Register | El usuario se registra desde la aplicación cliente |
| User | Login | El usuario se autentica desde la aplicación cliente |
| User | List | El usuario, autenticado como administrador, accede a una lista completa de usuarios |
| User | ListOne | El usuario, autenticado, obtiene su usuario |
| User | Paginator | El usuario, autenticado como administrador, obtiene una sublista de usuarios |
| User | Search | El usuario, autenticado como administrador, obtiene una sublista de usuarios que cumplen el regex|
| User | Update One | El usuario, autenticado, actualiza su usuario|
| User | Update Rol | El usuario, autenticado como administrador, actualiza el rol de un usuario|
| User | Remove One | El usuario, autenticado, elimina su usuario|

- ### Categorías

| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| Categoría | List |El usuario accede a una lista completa de categorías |
| Categoría | Create One | El usuario, autenticado como administrador, crea un producto |



- ### Productos

| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| Producto | Create One | El usuario, autenticado como administrador, crea un producto |
| Producto | Update One | El usuario, autenticado como administrador, actualiza un producto |
| Producto | Remove One | El usuario, autenticado como administrador, elimina un producto |
| Producto | ListOne | El usuario accede a un producto |
| Producto | List |El usuario accede a una lista completa de productos |
| Producto | Paginator | El usuario obtiene una sublista de productos |
| Producto | CategoryList |El usuario accede a una sublista de productos de la categoría introducida |
| Producto | DiscountList |El usuario accede a una sublista de productos en oferta |
| Producto | PromotionList |El usuario accede a una sublista de productos en promoción |

- ### ShoppingCart
| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| ShoppingCart | List |El usuario, autenticado como administrador, accede a la lista completa de ShoppingCarts |
| ShoppingCart | Add Product | El usuario, autenticado, añade un producto en stock a su carro de la compra |
| ShoppingCart | Remove Product | El usuario, autenticado, elimina un producto a su carro de la compra  y añade de nuevo el producto al stock|

- ### Upload
| Entidad | Accion | Descripción
| :---: | :---: | :--- |
| User | Update Image | El usuario, autenticado, actualiza su imagen de perfil|
| User | Get Image | El usuario, autenticado, obtieme su imagen de perfil|

2. ## Información de la API

- ### Auntentificación

endpoint: Registrar un usuario
Método: POST
uri: /register
body parameters:
    email
        string (required) Example: email@myemail.com
        Un email válido

    password
        string (required) Example: mypassword
        Una contraseña válida
Respuestas:
    












