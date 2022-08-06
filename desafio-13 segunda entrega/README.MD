# Desafios-11  Mi primera base de datos 

Para  inciar:

* npm init


## Elegir la base de datos

1. Carpeta Config

2. Editar database.js

3. Elegir la base de datos en .env (BASE_dATOS)


# Iniciar el proyecto 

* npm run dev

## estructura json producto
* {
		"nombre": "432!!!",
		"descripcion": "232323",
		"codigo": "3",
		"foto": "3://img.icons8.com/ios/452/calculator--v1.png",
		"precio": 200,
		"stock": 22
	}

## estructura json carrito
* {
    id:1
    "productos":[{},{},{}]
}



### Productos
1.Guardar: http://localhost:8080/api/productos/guardar

2.Listar: http://localhost:8080/api/productos/listar

3.Listar por Id: http://localhost:8080/api/productos/listar/:id

4.Actualizar: http://localhost:8080/api/productos/actualizar/:id

5.Borrar: http://localhost:8080/api/productos/borrar/:id


### Carritos
1.Crear: http://localhost:8080/api/carrito

2.Obtener productos por Id de carrito: http://localhost:8080/api/carrito/:id/productos

3.Actualizar: http://localhost:8080/api/carrito/:id/productos

4.Borrar carrito: http://localhost:8080/api/carrito/:id

5.Borrar producto del carrito: http://localhost:8080/api/carrito/:id/productos/:id_prod






