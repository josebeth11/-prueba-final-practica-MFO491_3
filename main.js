class Frutas  {
    constructor(nombre, calorias, nutrientes) {
        this.nombre = nombre;
        this.calorias = calorias;
        this.nutrientes = nutrientes;
    }
}

class Verduras extends Frutas {
    constructor(nombre, calorias, nutientes, conservacion) {
        super(nombre, calorias, nutrientes);
        this.conservacion = conservacion;
    }
}

class Carnes extends Frutas {
    constructor(nombre, calorias, nutrientes, temperaturaAgua) {
        super(nombre, calorias, nutrientes);
        this.temperaturaAgua = temperaturaAgua;
    }
}

// Instancias de las clases

// Tres instancias adicionales de la clase Destino
const frutas1 = new Frutas('sandia', '30', ['Visitar la Torre Eiffel', 'Comer queso']);
const frutas2 = new Frutas('platano', '82,5', ['potasio', 'Explorar el Vaticano']);
const frutas3 = new Frutas('fresa', '32', ['hierro', 'Paseo por el barrio de Shibuya']);
/*
// Tres instancias adicionales de la clase Ciudad
const Verduras1 = new Ciudad('Barcelona', 'España', ['Visitar Sagrada Familia', 'Paseo por Las Ramblas'], 'Mediterráneo');
const Verduras2 = new Ciudad('Nueva York', 'EEUU', ['Visita al Empire State', 'Paseo por Central Park'], 'Templado');
const Verduras3 = new Ciudad('Londres', 'Reino Unido', ['Visita al Palacio de Buckingham', 'Recorrido por el British Museum'], 'Templado');
const Verduras4 = new Ciudad('Berlín', 'Alemania', ['Explorar la Puerta de Brandeburgo', 'Visita al Muro de Berlín'], 'Templado');
const Verduras5 = new Ciudad('Praga', 'República Checa', ['Visita al Puente de Carlos', 'Explorar el Castillo de Praga'], 'Templado');

// Tres instancias adicionales de la clase Playa
const playa1 = new Playa('Cancún', 'México', ['Buceo en arrecifes', 'Relax en la playa'], 'Cálida');
const playa2 = new Playa('Harstad', 'Noruega', ['Buceo en glaciares', 'Observar ballenas'], 'Fria');
const playa3 = new Playa('Bora Bora', 'Polinesia Francesa', ['Esquí acuático', 'Nadar con tiburones'], 'Cálida');
const playa4 = new Playa('Maldivas', 'Maldivas', ['Snorkel en arrecifes de coral', 'Relax en resorts de lujo'], 'Cálida');
*/
// verduras1, verduras2, verduras3, verduras4, verduras5, carnes1, carnes2, carnes3, carnes4

const alimentos= [frutas1, frutas2, frutas3];

document.addEventListener("DOMContentLoaded", function() {
    const alimentoSection = document.getElementById('alimento');
    const resultadosSection = document.getElementById('resultados');
    const resultadosComparacion = document.getElementById('resultadosComparacion');

    let duracionTotalMax = 0;

    // Función para agregar campo de destino
    function agregarCampoAlimentos() {
        alert("hola");
        const nuevoCampo = document.createElement('div');
        nuevoCampo.innerHTML = `
            <label for="alimento">Alimentos:</label>
            <select name="alimento" onchange="mostrarOpciones(this)">
                <option value="seleccionar" disabled selected>Seleccionar</option>
                ${crearOpcionesAlimento()}
            </select>
            <div id="opciones"></div>
            <label for="duracion">Duración (días):</label>
            <input type="text" name="duracion" placeholder="Ingrese la duración">
        `;
        alimentoSection.appendChild(nuevoCampo);
    }

    // Función para crear las opciones del desplegable
    function crearOpcionesAlimento() {
        let opciones = '';
        alimentos.forEach(alimento => {
            opciones += `<option value="${alimento.nombre}">${alimento.nombre}</option>`;
        });
        return opciones;
    }

    // Función para mostrar opciones específicas según el destino seleccionado
    function mostrarOpciones(select) {
        const opcionSeleccionada = select.value;
        const opcionesDiv = select.nextElementSibling;

        // Limpiar opciones anteriores
        opcionesDiv.innerHTML = '';

        // Encontrar el destino seleccionado
        const alimentosSeleccionado = alimentos.find(alimento => alimento.nombre === opcionSeleccionada);

    
    }


// Función para calcular el itinerario
    function calcularItinerario() {
        let duracionTotal = 0;

        let resultadosHTML = `
            <h2>Resultados:</h2>
            <table>
                <tr>
                    <th>alimentos</th>
                    <th>Duración (días)</th>
                    <th>Actividades sugeridas</th>
                    <th>Mejor época para viajar</th>
                </tr>
        `;

        const alimentoInputs = document.getElementsByName('alimentos');
        const duracionesInputs = document.getElementsByName('duracion');

        for (let i = 0; i < alimentoInputs.length; i++) {
            const tipoAlimentos = alimentoInputs[i].value;
            const duracion = parseInt(duracionesInputs[i].value);

            // Validar duración ingresada
            if (isNaN(duracion) || duracion <= 0) {
                alert('Por favor, ingrese una duración válida para el destino ' + alimentoInputs[i].value);
                return;
            }

            let actividadesSugeridas = '';
            let mejorEpoca = '';

            // Buscar el destino seleccionado en la lista de destinos
            const alimentosSeleccionado = alimento.find(alimentos=> alimentos.nombre === tipoAlimentos);

            if (alimentosSeleccionado) {
                // Asignar actividades sugeridas según tipo de destino
                if (alimentosSeleccionado instanceof Verduras || alimentosSeleccionado instanceof Carnes || alimentosSeleccionado instanceof alimentos) {
                    actividadesSugeridas = alimentosSeleccionado.actividades.join(', ');
                }

                // Determinar mejor época para viajar
                if (alimentosSeleccionado instanceof Verduras {
                    mejorEpoca = 'Primavera o otoño';
                } else if (alimentosSeleccionado instanceof Carnes) {
                    mejorEpoca = 'Invierno';
                } else if (alimentosSeleccionado instanceof Frutas) {
                    mejorEpoca = 'Todo el año';
                }

                // Agregar fila a la tabla de resultados
                resultadosHTML += `
                    <tr>
                        <td>${alimentosSeleccionado.nombre}</td>
                        <td>${duracion}</td>
                        <td>${actividadesSugeridas}</td>
                        <td>${mejorEpoca}</td>
                    </tr>
                `;

                duracionTotal += duracion;
            }
        }

        resultadosHTML += `</table>`;
        resultadosSection.innerHTML = resultadosHTML;

        // Mostrar duración total del viaje
        alert('La duración total del viaje es de ' + duracionTotal + ' días.');
        duracionTotalMax = duracionTotal;

    }

function calcularComparacion(){

    let diasMaximos = document.getElementById('comparacionDias');
    let valorMaximo = parseFloat(diasMaximos.value);

    if(duracionTotalMax > valorMaximo){
        let diasSobrantes = duracionTotalMax - valorMaximo;
        resultadosComparacion.innerHTML = `<p> ¡Te has pasado de días! (Tienes que eliminar ${diasSobrantes} días de tus vacaciones) </p>`;
    } else if(duracionTotalMax == valorMaximo){
        resultadosComparacion.innerHTML = `<p> ¡Has planificado la duración de tus días de vacaciones a la perfección! No te sobran ni te faltan días. </p>`;
    } else{
        let diasRestantes = valorMaximo - duracionTotalMax;
        resultadosComparacion.innerHTML = `<p> Aún puedes añadir más días a tus vacaciones (${diasRestantes} días restantes). </p>`;
    }
}


// Evento para agregar campo de destino al hacer clic en un botón
document.getElementById('agregar-alimento').addEventListener('click', agregarCampoAlimentos);

// Evento para calcular el itinerario al hacer clic en un botón
document.getElementById('calcular-itinerario').addEventListener('click', calcularItinerario);

// Evento para calcular la comparación de días al hacer clic en un botón
document.getElementById('calcular-comparacion').addEventListener('click', calcularComparacion);

});
