const fin = () => console.log('terminé');

function mostrarLetras(str,cb) {
    let i =0;
    const timer = setInterval(() => {
        if (i < str.length) {
            console.log(str[i]);
            i++
        } else {
            clearInterval(timer)
            cb()
        }
    }, 0500);
}

setTimeout(() => {
    mostrarLetras('hola', fin )
}, 0);
setTimeout(() => {
    mostrarLetras('hola', fin )
}, 0250);
setTimeout(() => {
    mostrarLetras('hola', fin )
}, 0500);


