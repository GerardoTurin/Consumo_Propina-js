/* import '../css/bootstrap.min.css';
import '../css/app.css'; */

//! OBJ CLIENTE

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
}






//! OBJ CATEGORIA

const categorias = {
    1: 'Comida',
    2: 'Bebida',
    3: 'Postre'
}







//! FUNSIONES

const guardarCliente = () => {
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    // Validar que los campos no esten vacios
    const camposVacios = [mesa, hora].some(campo => campo === '');
    
    if (camposVacios) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Todos los campos son obligatorios!',
        })

        return;
    }
    
    //Asignamos datos del formulario al obj cliente
    // Copia del obj cliente ( vacio ) y le agrega los valores de los campos

    cliente = {...cliente, mesa, hora };


    ocultarModal();

    mostrarSecciones();

    // Obtener platillos de la API
    obtenerPlatillos();
}


// Ocultar modal
const ocultarModal = () => {
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();
}



// Mostrar secciones
const mostrarSecciones = () => {
    
    const seccionesOcultas = document.querySelectorAll('.d-none');
    seccionesOcultas.forEach(seccion => {
        seccion.classList.remove('d-none');
    })
}



// Obtener platillos de la API
const obtenerPlatillos = async () => {
    const url = 'http://localhost:4000/platillos';

    
    try {
        const respuesta = await fetch(url);
        const platillos = await respuesta.json();
    
        mostrarPlatillos(platillos);
        
    } catch (error) {
        console.log(error);
    }

    /* fetch(url)
        .then(response => response.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error)); */
}



const agregarPlatillo = (producto) => {
    //Extraer el pedido actual
    const { pedido } = cliente;

    // Validar que la cantidad sea mayor a 0
    if (producto.cantidad > 0) {

        // comprobar si el platillo ya existe en el pedido ( array ) true/false.
        if (pedido.some( platillo => platillo.id === producto.id)) {

            // SI EXISTE: sumar la cantidad
            const pedidoActualizado = pedido.map( platillo => {
                if (platillo.id === producto.id) {
                    platillo.cantidad = producto.cantidad;
                }
                return platillo;
            });

            // Se asigna el nuevo array a cliente.pedido
            cliente.pedido = [...pedidoActualizado];

        } else {
            // NO EXISTE: se agrega el platillo al pedido
            cliente.pedido = [...pedido, producto];
        }

    } else {
        // Eliminar el platillo cuendo la cantidad sea 0
        const pedidoEliminado = pedido.filter( platillo => platillo.id !== producto.id);
        cliente.pedido = [...pedidoEliminado];
    }
    
    // Limpiar el HTML previo
    limpiarHTML();

    // Actualizar el resumen
    if (cliente.pedido.length) {
        
        // Mostrar el Resumen ( HTML )
        actualizarResumen();
    } else {
        pedidoVacio();
        
    }

}





// Mostrar platillos
const mostrarPlatillos = ( platillos ) => {
    const contenido = document.querySelector('#platillos .contenido');

    platillos.forEach( platillo => {
        const row = document.createElement('div');
        row.classList.add('row', 'py-3', 'border-top');

        const nombre = document.createElement('div');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('div');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$ ${platillo.precio}`;

        const categoria = document.createElement('div');
        categoria.classList.add('col-md-3');
        categoria.textContent = categorias[ platillo.categoria ];

        const inputCantidad = document.createElement('input');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `cantidad-${platillo.id}`;
        inputCantidad.classList.add('form-control',);

        // Funsion que agrega la cantidad y el platillo al pedido. // hasta que no se seleccione una cantidad , no se agrega al pedido.
        inputCantidad.onchange = () => {
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo, cantidad})
        }


        const agregar = document.createElement('div');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);


        contenido.appendChild(row);
    })
}


const actualizarResumen = () => {
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('div');
    resumen.classList.add('col-md-6', 'card', 'py-5', 'px-3', 'shadow');

    // Creamos mesa
    const mesa = document.createElement('p');
    mesa.textContent = `Mesa: ${cliente.mesa}`;
    mesa.classList.add('fw-bold');

    // Creamos hora
    const hora = document.createElement('p');
    hora.textContent = `Hora: ${cliente.hora}`;
    hora.classList.add('fw-bold');

    // Creamos titulo de seccion
    const titulo = document.createElement('h3');
    titulo.classList.add('my-4', 'text-center');
    titulo.textContent = 'Platillos Consumidos';


    // Iteramos sobre el array de pedidos
    const grupoPedido = document.createElement('ul');
    grupoPedido.classList.add('list-group');

    const { pedido } = cliente;

    pedido.forEach( platillo => {
        const { id, nombre, precio, cantidad } = platillo;

        const item = document.createElement('li');
        item.classList.add('list-group-item');




        // Crear el nombre del platillo
        const nombrePlatillo = document.createElement('h4');
        nombrePlatillo.classList.add('my-4');
        nombrePlatillo.textContent = nombre;


        // Crear la cantidad seleccionada
        const cantidadSelec = document.createElement('h6');
        cantidadSelec.classList.add('my-4');
        cantidadSelec.textContent = `Cantidad: ${cantidad}`;



        // Crear el precio del platillo seleccionado
        const precioPlatillo = document.createElement('h6');
        precioPlatillo.classList.add('my-4');
        precioPlatillo.textContent = `Precio: $ ${precio}`;



        // Crear subtotal del platillo seleccionado
        const subtotal = document.createElement('p');
        subtotal.classList.add('fw-bold','my-4');
        subtotal.textContent = `Subtotal: $ ${precio * cantidad}`;



        // Crear el boton de eliminar platillo
        const btnEliminar = document.createElement('button');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'Eliminar Pedido';

        btnEliminar.onclick = () => {
            eliminarPlatillo(id);
        }





        // Agregar el nombre del platillo al item ( li )
        item.appendChild(nombrePlatillo);
        item.appendChild(cantidadSelec);
        item.appendChild(precioPlatillo);
        item.appendChild(subtotal);
        item.appendChild(btnEliminar);




        // Agregar el li al grupo de pedido ( ul )
        grupoPedido.appendChild(item);
    });




    resumen.appendChild(titulo);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupoPedido);

    contenido.appendChild(resumen);




    // Mostrar formumario de propinas
    formularioPropinas();
}




const limpiarHTML = () => {
    const contenido = document.querySelector('#resumen .contenido');

    while (contenido.firstChild) {
        contenido.removeChild(contenido.firstChild);
    }
}



const eliminarPlatillo = ( id ) => {

    const { pedido } = cliente;
    const pedidoEliminado = pedido.filter( platillo => platillo.id !== id );

    cliente.pedido = [...pedidoEliminado];

    // Limpiar el HTML previo
    limpiarHTML();

    // Actualizar el resumen
    if (cliente.pedido.length) {

        // Mostrar el Resumen ( HTML )
        actualizarResumen();
    } else {

        pedidoVacio();
    }


    // Regresar a 0 la cantidad en el input ( formulario )
    const inputA0 = document.querySelector(`#cantidad-${id}`);
    inputA0.value = 0;



}



const pedidoVacio = () => {
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('p');
    texto.classList.add('text-center');
    texto.textContent = 'Añade los elementos del pedido';

    contenido.appendChild(texto);
}





const formularioPropinas = () => {
    const contenido = document.querySelector('#resumen .contenido');

    const formularioPropinas = document.createElement('div');
    formularioPropinas.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('div');
    divFormulario.classList.add('card', 'py-5', 'px-3', 'shadow');

    // Crear el titulo de seccion
    const titulo = document.createElement('h3');
    titulo.classList.add('my-4', 'text-center');
    titulo.textContent = 'Propinas';


    // Crear radio button de propinas
    // 10%
    const radio10 = document.createElement('input');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');

    radio10.onclick = calcularPropina;

    const label10 = document.createElement('label');
    label10.textContent = '10 %';
    label10.classList.add('form-check-label');

    const radio10div = document.createElement('div');
    radio10div.classList.add('form-check');

    radio10div.appendChild(radio10);
    radio10div.appendChild(label10);




    // 25%
    const radio25 = document.createElement('input');
    radio25.type = 'radio';
    radio25.name = 'propina';
    radio25.value = '25';
    radio25.classList.add('form-check-input');

    radio25.onclick = calcularPropina;

    const label25 = document.createElement('label');
    label25.textContent = '25 %';
    label25.classList.add('form-check-label');

    const radio25div = document.createElement('div');
    radio25div.classList.add('form-check');

    radio25div.appendChild(radio25);
    radio25div.appendChild(label25);




    // 50%
    const radio50 = document.createElement('input');
    radio50.type = 'radio';
    radio50.name = 'propina';
    radio50.value = '50';
    radio50.classList.add('form-check-input');

    radio50.onclick = calcularPropina;

    const label50 = document.createElement('label');
    label50.textContent = '50 %';
    label50.classList.add('form-check-label');

    const radio50div = document.createElement('div');
    radio50div.classList.add('form-check');

    radio50div.appendChild(radio50);
    radio50div.appendChild(label50);



    // Agrega al div principal
    divFormulario.appendChild(titulo);
    divFormulario.appendChild(radio10div);
    divFormulario.appendChild(radio25div);
    divFormulario.appendChild(radio50div);

    // Agregar el div al formulario
    formularioPropinas.appendChild(divFormulario);

    // Agregar el formulario al contenido
    contenido.appendChild(formularioPropinas);
}



const calcularPropina = () => {
    
    const { pedido } = cliente;
    let subtotal = 0;

    pedido.forEach( platillo => {
        subtotal += platillo.precio * platillo.cantidad;
    });

    // Obtener el valor del radio button seleccionado
    const propinaSelec = document.querySelector('input[name="propina"]:checked').value;

    // Calcular la propina
    const propina = subtotal *  parseInt( propinaSelec ) / 100;
    
    const total = subtotal + propina;
    

    // Mostrar el total en el HTML
    mostrarTotales(subtotal, propina, total);
}





const mostrarTotales = ( subtotal, propina, total ) => {

    const totaleslDiv = document.createElement('div');
    totaleslDiv.classList.add('total-pagar');


    // Subtotal
    const subtotalP = document.createElement('p');
    subtotalP.classList.add('fs-5', 'fw-bold', 'mt-2');
    subtotalP.textContent = `Subtotal: $${subtotal.toFixed(2)}`;



    // Propina
    const propinaP = document.createElement('p');
    propinaP.classList.add('fs-5', 'fw-bold', 'mt-2');
    propinaP.textContent = `Propina: $${propina.toFixed(2)}`;


    // Total
    const totalP = document.createElement('p');
    totalP.classList.add('fs-3', 'fw-bold', 'mt-2','bg-light', 'py-3', 'text-center', 'border', 'border-primary');
    totalP.textContent = `Total: $${total.toFixed(2)}`;



    //Eliminar el contenido previo
    const totalPagarDiv = document.querySelector('.total-pagar');
    if (totalPagarDiv) {
        totalPagarDiv.remove();
    }
        



    totaleslDiv.appendChild(subtotalP);
    totaleslDiv.appendChild(propinaP);
    totaleslDiv.appendChild(totalP);
    
    const formularioPropinas = document.querySelector('.formulario > div');
    formularioPropinas.appendChild(totaleslDiv);
}




export { 
    guardarCliente, 
    ocultarModal,
    mostrarSecciones,
    obtenerPlatillos};