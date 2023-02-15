// Instanciamos el objeto persona
// Puede contener datos, funciones (method) u otros objetos
let persona = {
    nombre: 'Ricardo',
    apellido: 'Kamey',
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: 'Madero #144',
        colonia: 'Centro',
        cp: 28000,
        municipio: 'Colima',
        getAddress: function () {
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp}, ${this.municipio}`
        }
    },
};

console.log(persona.getName()); // Método
console.log(persona.domicilio.getAddress()); // notación de punto para acceder a domicilio y luego a su método getAddress