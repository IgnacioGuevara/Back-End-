// ---- DESAFIO NUMERO 1 ---- 
/* class Usuario {
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
usuario1.countMascotas();
usuario1.addBook('El Señor De Los Anillos', 'J. R. R. Tolkien')
usuario1.getBookNames()


 */
// ---- DESAFIO NUMERO 2 ----
const fs = require ('fs')

class contenedor {
    constructor(file){
        this.file = file;
    }

    writeFile = async data => {
        try {
            await fs.promises.writeFile(
                this.file, JSON.stringify(data,null,2)
            )
        }catch (err){
                console.log(`error: ${err}`);
            }
        }

    getAll = async() => {
        try {
            const productos = await fs.promises.readFile(this.file,'utf-8')
            return JSON.parse(productos)
        } catch (err) {
            if (err.message.includes('no such file or directory')) return [];
            console.log(`error: ${err}`);
        }
    }

    save = async obj => { 
        let productos = this.getAll()
        try {
            let newId;
            productos.length === 0 ? newId =1 : productos[productos.length-1].id + 1
            let newObj = {...obj, id: newId};
            productos.push (newObj)
            await this.writeFile(productos)
            return newObj.id
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }
    getById = async id => { 
        let productos = await this.getAll();
        try {
            const obj = productos.find(id => productos.id === id);
            return obj ? obj : null;
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }
    deleteById = async id => { 
        let productos = await this.getAll()
        try {
            productos = productos.filter(producto => producto.id != id); 
            await this.writeFile(productos)
        } catch (err) {
            console.log(`error: ${err}`);
        }
    }
    deleteAll = async() => {
        this.writeFile([]);
    }
}

module.exports = contenedor

