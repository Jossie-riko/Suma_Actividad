function sumarDosNumeros(num1, num2) {
    console.log("La suma es igual a " + (num1 + num2));
}
sumarDosNumeros(5, 3); 
// 2. 
function cuadradoNumero(num) {
    console.log("El cuadrado es " + (num * num));
}
cuadradoNumero(4); 
// 3. 
function areaRectangulo(base, altura) {
    console.log("El área del rectángulo es " + (base * altura));
}
areaRectangulo(5, 10);

// 4. 
function verificarEdad(edad) {
    if (edad >= 18) {
        console.log("Es mayor de edad");
    } else {
        console.log("Es menor de edad");
    }
}
verificarEdad(17); 

// 5.
function numerosConsecutivos(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}
numerosConsecutivos(5);

// 6. 
function mostrarArray5() {
    let arr = ["uno", "dos", "tres", "cuatro", "cinco"];
    arr.forEach(item => console.log(item));
}
mostrarArray5();

// 7.
function mayoresQueParametro(num) {
    let arr = [3, 7, 12, 5, 20, 8, 15, 2, 30, 9];
    arr.forEach(item => {
        if (item > num) console.log(item);
    });
}
mayoresQueParametro(10); 

// 8. 
function mostrarObjeto() {
    let persona = { nombre: "Jossie", edad: 25, ciudad: "Bogotá" };
    console.log("Nombre: " + persona.nombre);
    console.log("Edad: " + persona.edad);
    console.log("Ciudad: " + persona.ciudad);
}
mostrarObjeto();

// 9
function mostrarArrayObjetos() {
    let personas = [
        { nombre: "Ana", edad: 20, ciudad: "Medellín" },
        { nombre: "Luis", edad: 30, ciudad: "Cali" },
        { nombre: "Marta", edad: 25, ciudad: "Bogotá" },
        { nombre: "Carlos", edad: 40, ciudad: "Barranquilla" }
    ];
    personas.forEach(p => {
        console.log("Nombre: " + p.nombre + ", Edad: " + p.edad + ", Ciudad: " + p.ciudad);
    });
}
function ejecutarTodo() {
    alert("¡El botón funciona y el JS está conectado!");
}
