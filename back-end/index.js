class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName(){
        console.log('-- USUARIO 1 --');
        console.log(`Nombre Completo: ${this.nombre}  ${this.apellido}  `);
    }

    addMascota(Mascota){
        this.mascotas.push(Mascota)
    }

    countMascotas(){
        console.log('cantidad de mascotas: ', this.mascotas.length)
    }


    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
    }

    getBookNames(){
        this.libros.map(libro => {
            console.log(libro.nombre);
        })
    }
}
const usuario1 = new Usuario('Ignacio', 'Guevara', [], ['perro', 'gato'] );

usuario1.getFullName();
usuario1.addMascota('caballo')
usuario1.countMascotas();
usuario1.addBook('El Señor De Los Anillos', 'J. R. R. Tolkien')
usuario1.getBookNames( )



