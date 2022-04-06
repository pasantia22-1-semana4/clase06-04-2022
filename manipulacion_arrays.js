import {datosColegio} from "./data.js";

/*La cantidad total de estudiantes que hay en el colegio.*/

let datosColegio1 = datosColegio[0].colegio;

function totalEstudiantes() {
    let totalEstudiantes = 0;
    for (let nivel in datosColegio1) {
        for (let grado in datosColegio1[nivel][0]) {
            for (let curso in datosColegio1[nivel][0][grado]) {
                totalEstudiantes += datosColegio1[nivel][0][grado][curso].estudiantes.length;
            }
        }
    }
    return totalEstudiantes;
}

console.log(`Total de estudiantes en el colegio: ${totalEstudiantes()}`)

/*La cantidad total de estudiantes que hay en primaria.*/

function totalEstudiantesPorNivel(datosColegio, nivel) {
    let totalEstudiantesPorNivel = 0;
    let datosNivel = datosColegio1[nivel][0];
    for (let grados in datosNivel) {
        for (let cursos in datosNivel[grados]) {
            totalEstudiantesPorNivel += datosNivel[grados][cursos].estudiantes.length;
        }
    }
    return totalEstudiantesPorNivel;
}

console.log(`Cantidad de estudiantes en primaria: ${totalEstudiantesPorNivel(datosColegio, 'primaria')}`)

/*La cantidad total de estudiantes que hay en bachillerato.*/

console.log(`Cantidad de estudiantes en secundaria: ${totalEstudiantesPorNivel(datosColegio, 'secundaria')}`)

/*La cantidad de niños que hay en el colegio.*/

function totalEstudiantesPorGenero(datosColegio, genero) {
    let totalNiñas = 0;
    let totalNiños = 0;
    if (genero == 'male') {
        for (let nivel in datosColegio1) {
            let datosNivel = datosColegio1[nivel][0];
            for (let grados in datosNivel) {
                for (let cursos in datosNivel[grados]) {
                    let datosCursos = datosNivel[grados][cursos];
                    for (let estudiantes in datosCursos.estudiantes) {
                        let gender = datosCursos.estudiantes[estudiantes].genero
                        if (gender == 'male') {
                            totalNiños ++;
                        }
                    }
                }
            }
        }
        return totalNiños;
    }
    else {
        for (let nivel in datosColegio1) {
            let datosNivel = datosColegio1[nivel][0];
            for (let grados in datosNivel) {
                for (let cursos in datosNivel[grados]) {
                    let datosCursos = datosNivel[grados][cursos];
                    for (let estudiantes in datosCursos.estudiantes) {
                        let gender = datosCursos.estudiantes[estudiantes].genero
                        if (gender == 'female') {
                            totalNiñas ++;  
                        }
                    }
                }
            }
        }
        return totalNiñas;
    }
}

console.log(`Cantidad de niños que hay en el colegio: ${totalEstudiantesPorGenero(datosColegio, 'male')}`)

/*La cantidad de niñas que hay en el colegio.*/

console.log(`Cantidad de niñas que hay en el colegio: ${totalEstudiantesPorGenero(datosColegio, 'female')}`)

/*La cantidad de niños que hay en primaria.*/

function totalPrimariaPorGenero(datosColegio, nivel, genero) {
    let totalNiñasPrimaria = 0;
    let totalNiñosPrimaria = 0;
    let totalNiñosSecundaria = 0;
    let totalNiñasSecundaria = 0;
    let datosNivel = datosColegio1[nivel][0]
    if (genero == 'male' & nivel == 'primaria') {
        for (let grados in datosNivel) {
             for (let cursos in datosNivel[grados]) {
                let datosCursos = datosNivel[grados][cursos];
                for (let estudiantes in datosCursos.estudiantes) {
                    let gender = datosCursos.estudiantes[estudiantes].genero
                    if (gender == 'male') {
                        totalNiñosPrimaria ++;
                        }
                    }
                }
            }
            return totalNiñosPrimaria;
    }
    else if (genero == 'female' & nivel == 'primaria') {
       for (let grados in datosNivel) {
        for (let cursos in datosNivel[grados]) {
            let datosCursos = datosNivel[grados][cursos];
            for (let estudiantes in datosCursos.estudiantes) {
                let gender = datosCursos.estudiantes[estudiantes].genero
                if (gender == 'female') {
                    totalNiñasPrimaria ++;
                    }
                }
            }
        }
        return totalNiñasPrimaria;
    }
    else if (genero == 'male' & nivel == 'secundaria') {
        for (let grados in datosNivel) {
         for (let cursos in datosNivel[grados]) {
             let datosCursos = datosNivel[grados][cursos];
             for (let estudiantes in datosCursos.estudiantes) {
                 let gender = datosCursos.estudiantes[estudiantes].genero
                 if (gender == 'male') {
                     totalNiñosSecundaria ++;
                     }
                 }
             }
         }
         return totalNiñosSecundaria;
     }
     else if (genero == 'female' & nivel == 'secundaria') {
        for (let grados in datosNivel) {
         for (let cursos in datosNivel[grados]) {
             let datosCursos = datosNivel[grados][cursos];
             for (let estudiantes in datosCursos.estudiantes) {
                 let gender = datosCursos.estudiantes[estudiantes].genero
                 if (gender == 'female') {
                     totalNiñasSecundaria ++;
                     }
                 }
             }
         }
         return totalNiñasSecundaria;
     }
}

console.log(`Cantidad de niños que hay en primaria: ${totalPrimariaPorGenero(datosColegio, 'primaria', 'male')}`)

/*La cantidad de niñas que hay en primaria.*/

console.log(`Cantidad de niñas que hay en primaria: ${totalPrimariaPorGenero(datosColegio, 'primaria', 'female')}`)

/*La cantidad de niños que hay en bachillerato.*/

console.log(`Cantidad de niños que hay en bachillerato: ${totalPrimariaPorGenero(datosColegio, 'secundaria', 'male')}`)

/*La cantidad de niñas que hay en bachillerato.*/

console.log(`Cantidad de niñas que hay en bachillerato: ${totalPrimariaPorGenero(datosColegio, 'secundaria', 'female')}`)

/*Obtener notas según cualquier parametro*/

function notas(datosColegio1, nivel, grado, curso) {
    let notas = [];
    //notas globales del colegio
    if (nivel == undefined & grado == undefined & curso == undefined) {
        for (let nivel in datosColegio1) {
            let  datosNivel = datosColegio1[nivel][0];
            for (let grado in datosNivel) {
                let datosGrado = datosNivel[grado];
                for (let curso in datosGrado) {
                    let datosCurso = datosGrado[curso];
                    for (let estudiantes in datosCurso.estudiantes) {
                        let datosEstudiante = datosCurso.estudiantes[estudiantes];
                        for (let materias in datosEstudiante.asignaturas) {
                            let materia = datosEstudiante.asignaturas[materias];
                            for (let periodos in materia) {
                                notas.push(materia[periodos].primerCorte);
                                notas.push(materia[periodos].segundoCorte);
                                notas.push(materia[periodos].tercerCorte);
                                notas.push(materia[periodos].cuartoCorte);
                            }
                        }
                    }
                }
            }
        }
    }
    //notas por nivel: primaria o secundaria
    else if (grado == undefined & curso == undefined) {
        let  datosNivel = datosColegio1[nivel][0];
        for (let grado in datosNivel) {
            let datosGrado = datosNivel[grado];
            for (let curso in datosGrado) {
                let datosCurso = datosGrado[curso];
                for (let estudiantes in datosCurso.estudiantes) {
                    let datosEstudiante = datosCurso.estudiantes[estudiantes];
                    for (let materias in datosEstudiante.asignaturas) {
                        let materia = datosEstudiante.asignaturas[materias];
                        for (let periodos in materia) {
                            notas.push(materia[periodos].primerCorte);
                            notas.push(materia[periodos].segundoCorte);
                            notas.push(materia[periodos].tercerCorte);
                            notas.push(materia[periodos].cuartoCorte);
                        }
                    }
                }
            }
        }
    }       
    //notas por grado: primero - once 
    else if (curso == undefined) {
        let  datosNivel = datosColegio1[nivel][0];
        let datosGrado = datosNivel[grado];
        for (let curso in datosGrado) {
            let datosCurso = datosGrado[curso];
            for (let estudiantes in datosCurso.estudiantes) {
                let datosEstudiante = datosCurso.estudiantes[estudiantes];
                for (let materias in datosEstudiante.asignaturas) {
                    let materia = datosEstudiante.asignaturas[materias];
                    for (let periodos in materia) {
                        notas.push(materia[periodos].primerCorte);
                        notas.push(materia[periodos].segundoCorte);
                        notas.push(materia[periodos].tercerCorte);
                        notas.push(materia[periodos].cuartoCorte);
                    }
                }
            }
        }
    }
    //notas por curso: gradoA (0) o grado B (1)
    else {
        if(curso == 'A'){
            curso = 0
        }
        else if (curso == 'B'){
            curso = 1
        }
        let  datosNivel = datosColegio1[nivel][0];
        let datosGrado = datosNivel[grado];
        let datosCurso = datosGrado[curso];
        for (let estudiante in datosCurso.estudiantes) {
        let datosEstudiante = datosCurso.estudiantes[estudiante];
            for (let materias in datosEstudiante.asignaturas) {
                let materia = datosEstudiante.asignaturas[materias];
                for (let periodos in materia) {
                    notas.push(materia[periodos].primerCorte);
                    notas.push(materia[periodos].segundoCorte);
                    notas.push(materia[periodos].tercerCorte);
                    notas.push(materia[periodos].cuartoCorte);
                }
            }
        }

    }
    notas.sort();
    return notas;
}

/*Función media por parametro*/

function mediaNotas(datosColegio1, nivel, grado, curso) {
    let notas1
    let notasActuales = 0
    let media = 0
    //notas globales del colegio
    if (nivel == undefined & grado == undefined & curso == undefined) {
        notas1 = notas(datosColegio1)
        for (let i = 0; i < notas1.length; i++) {
            notasActuales += notas1[i];
        }
    }
    //notas por nivel: primaria o secundaria
    else if (grado == undefined & curso == undefined) {
        notas1 = notas(datosColegio1,nivel)
        for (let i = 0; i < notas1.length; i++) {
            notasActuales += notas1[i];
        }
    }       
    //notas por grado: primero - once 
    else if (curso == undefined) {
        notas1 = notas(datosColegio1,nivel,grado)
        for (let i = 0; i < notas1.length; i++) {
            notasActuales += notas1[i];
        }
    }
    //notas por curso: gradoA (0) o grado B (1)
    else {
        notas1 = notas(datosColegio1,nivel,grado)
        for (let i = 0; i < notas1.length; i++) {
            notasActuales += notas1[i];
        }
    }

    media = notasActuales / notas1.length ;
    return media;
}

console.log(`Media de las notas en el colegio: ${mediaNotas(datosColegio1)}`);
console.log(`Media de las notas en primaria: ${mediaNotas(datosColegio1,'primaria')}`);
console.log(`Media de las notas en secundaria: ${mediaNotas(datosColegio1,'secundaria')}`);
console.log(`Media de las notas en grado primero: ${mediaNotas(datosColegio1,'primaria','primero')}`);
console.log(`Media de las notas en primero A: ${mediaNotas(datosColegio1,'primaria','primero','A')}`);

function modaNotas(datosColegio1, nivel, grado, curso) {
    let moda;
    let repeticionNota = 0;
    let notas1;
    if (nivel == undefined & grado == undefined & curso == undefined){
        notas1 = notas(datosColegio1);
    }
    else if (grado == undefined & curso == undefined) {
        notas1 = notas(datosColegio1, nivel);
    }
    else if (curso == undefined){
        if (grado != undefined) {
            if (grado == 'primero' || grado == 'segundo' || grado == 'tercero' || grado == 'cuarto' || grado == 'quinto' || grado == 'sexto' || grado == 'septimo' || grado == 'octavo' || grado == 'noveno' || grado == 'decimo' || grado == 'once') {
                notas1 = notas(datosColegio1, nivel, grado);
            }
            else {
                    return String(`El grado ${grado} no existe.`);
                }
        }
    }
    else{
        if (curso == 'A' || curso == 'B') {
            if (curso == 'A') {
                notas1 = notas(datosColegio1, nivel, grado, 0);
            }
            else {
                notas1 = notas(datosColegio1, nivel, grado, 1);
            }
        }
        else {
            return String(`El curso ${curso} no existe.`);
        }
    }

 let   notaInicial = notas1[0];
 let   notaInicialRepeticion = 1;
    for (let iteratorNotas = 1; iteratorNotas < notas1.length; iteratorNotas++) {
        if (notas1[iteratorNotas] == notaInicial) {
            notaInicialRepeticion++;
            if (notaInicialRepeticion > repeticionNota) {
                moda = notas1[iteratorNotas];
                repeticionNota = notaInicialRepeticion;
            }
        }
        else {
            notaInicial = notas1[iteratorNotas];
            notaInicialRepeticion = 1;
        }
    }
    return moda;
}

console.log(`Moda de las notas en el colegio: ${modaNotas(datosColegio1)}`);
console.log(`Moda de las notas en primaria: ${modaNotas(datosColegio1,'primaria')}`);
console.log(`Moda de las notas en secundaria: ${modaNotas(datosColegio1,'secundaria')}`);
console.log(`Moda de las notas en en curso primero: ${modaNotas(datosColegio1,'primaria','primero')}`);
console.log(`Moda de las notas en curso primero A: ${modaNotas(datosColegio1,'primaria','primero','A')}`);

function medianaNotas(datosColegio1, nivel, grado, curso){
    let mediana;
    let datoMitad;
    let notas1;
    if (nivel == undefined & grado == undefined & curso == undefined){
        notas1 = notas(datosColegio1);
    }
    else if (grado == undefined & curso == undefined) {
        notas1 = notas(datosColegio1, nivel);
    }
    else if (curso == undefined){
        if (grado != undefined) {
            if (grado == 'primero' || grado == 'segundo' || grado == 'tercero' || grado == 'cuarto' || grado == 'quinto' || grado == 'sexto' || grado == 'septimo' || grado == 'octavo' || grado == 'noveno' || grado == 'decimo' || grado == 'once') {
                notas1 = notas(datosColegio1, nivel, grado);
            }
            else {
                    return String(`El grado ${grado} no existe.`);
                }
        }
    }
    else{
        if (curso == 'A' || curso == 'B') {
            if (curso == 'A') {
                notas1 = notas(datosColegio1, nivel, grado, 0);
            }
            else {
                notas1 = notas(datosColegio1, nivel, grado, 1);
            }
        }
        else {
            return String(`El curso ${curso} no existe.`);
        }
    }
    let notas2 = []
    notas2 = notas1.sort()
    if (notas2.length % 2 != 0) {
        datoMitad = (notas2.length - 1) / 2;
        mediana = notas2[datoMitad];
    }
    else {
        datoMitad = (notas2.length / 2) - 1;    
        mediana = (notas2[datoMitad] + notas2[datoMitad + 1]) / 2;
    }
    return mediana;
}

console.log(`Mediana de las notas en el colegio: ${medianaNotas(datosColegio1)}`);
console.log(`Mediana de las notas en primaria: ${medianaNotas(datosColegio1,'primaria')}`);
console.log(`Mediana de las notas en secundaria: ${medianaNotas(datosColegio1,'secundaria')}`);
console.log(`Mediana de las notas en grado primero: ${medianaNotas(datosColegio1,'primaria','primero')}`);
console.log(`Mediana de las notas en curso primero A: ${medianaNotas(datosColegio1,'primaria','primero','A')}`);

//Seleccionar el estudiante con mejor nota en promedio en cada materia.
function mejorPromAsignatura(asignaturaDeseada) {
    let estudianteMejorProm = {
        nombre: '',
        grado: '',
        curso: '',
        promedio: 0
    };

    let sumaNotas = 0;
    let conteoNotas = 0;
    
    for (let nivel in datosColegio1) {
        let grados = datosColegio1[nivel][0];
        for (let grado in grados) {
            let cursos = grados[grado];
            for (let curso in cursos) {
                let estudiantes = cursos[curso].estudiantes;
                for (let estudiante in estudiantes) {
                    let asignaturas = estudiantes[estudiante].asignaturas;
                    for (let asignatura in asignaturas) {
                        let cortes = asignaturas[asignatura];
                        for (let corte in cortes) {
                            if (corte === asignaturaDeseada) {
                                let notas = cortes[corte];
                                for (let nota in notas) {
                                    sumaNotas += notas[nota];
                                    conteoNotas += 1;
                                }
                                let promedio = sumaNotas / conteoNotas;
                                if (promedio > estudianteMejorProm.promedio) {
                                    estudianteMejorProm.nombre = estudiantes[estudiante].nombre;
                                    estudianteMejorProm.grado = grado;
                                    estudianteMejorProm.curso = cursos[curso].curso;
                                    estudianteMejorProm.promedio = promedio;
                                }
                                sumaNotas = 0;
                                conteoNotas = 0;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(`El estudiante con mejor promedio en ${asignaturaDeseada} es: ${estudianteMejorProm.nombre}, grado: ${estudianteMejorProm.grado}, curso: ${estudianteMejorProm.curso},  con un promedio de ${estudianteMejorProm.promedio}`);
}

mejorPromAsignatura('historia');
mejorPromAsignatura('matematicas');
mejorPromAsignatura('filosofia');
mejorPromAsignatura('religion');
mejorPromAsignatura('artes');
mejorPromAsignatura('educacion_fisica');
mejorPromAsignatura('biologia');
mejorPromAsignatura('quimica');
mejorPromAsignatura('fisica');

function mejorPromParametro(datosColegio1, nivel, grado, curso) {
    //funcion para obtener el estudiante con mejor nota en promedio en el Colegio
    if (nivel == undefined & grado == undefined & curso == undefined){
        function mejorPromColegio(datosColegio1) {
            let estudianteMejorProm = {
                nombre: '',
                grado: '',
                curso: '',
                promedio: 0
            };
        
            let sumaNotas = 0;
            let conteoNotas = 0;

            for (let nivel in datosColegio1) {
                let grados = datosColegio1[nivel][0];
                for (let grado in grados) {
                    let cursos = grados[grado];
                    for (let curso in cursos) {
                        let estudiantes = cursos[curso].estudiantes;
                        for (let estudiante in estudiantes) {
                            let asignaturas = estudiantes[estudiante].asignaturas;
                            for (let asignatura in asignaturas) {
                                let cortes = asignaturas[asignatura];
                                for (let corte in cortes) {
                                    let notas = cortes[corte];
                                    for (let nota in notas) {
                                        sumaNotas += notas[nota];
                                        conteoNotas += 1;
                                    }
                                }
                            }
                            let promedio = sumaNotas / conteoNotas;
                            if (promedio > estudianteMejorProm.promedio) {
                                estudianteMejorProm.nombre = estudiantes[estudiante].nombre;                            
                                estudianteMejorProm.grado = grado;
                                estudianteMejorProm.curso = cursos[curso].curso;
                                estudianteMejorProm.promedio = promedio;
                            }
                            sumaNotas = 0;
                            conteoNotas = 0;
                        }
                    }
                }
            }
            console.log(`El estudiante con mejor promedio en el colegio es ${estudianteMejorProm.nombre}, curso: ${estudianteMejorProm.grado} ${estudianteMejorProm.curso}, promedio: ${estudianteMejorProm.promedio}`);
        }
        mejorPromColegio(datosColegio1);
    }
    //funcion para obtener el estudiante con mejor nota en promedio en una seccion, ya sea primaria o secundaria
    else if (grado == undefined & curso == undefined){
        function mejorPromNivel(nivel) {
            let estudianteMejorProm = {
                nombre: '',
                grado: '',
                curso: '',
                promedio: 0
            };
            let sumaNotas = 0;
            let conteoNotas = 0;
            let nivelValue = '';
            if (nivel == 'primaria') {
                nivelValue = 'primaria'
            } else if (nivel == 'secundaria') {
                nivelValue = 'secundaria'
            }
            let grados = datosColegio1[nivel][0];
            for (let grado in grados) {
                let cursos = grados[grado];
                for (let curso in cursos) {
                    let estudiantes = cursos[curso].estudiantes;
                    for (let estudiante in estudiantes) {
                        let asignaturas = estudiantes[estudiante].asignaturas;
                        for (let asignatura in asignaturas) {
                            let cortes = asignaturas[asignatura];
                            for (let corte in cortes) {
                                let notas = cortes[corte];
                                for (let nota in notas) {
                                    sumaNotas += notas[nota];
                                    conteoNotas += 1;
                                }
                            }
                        }
                        let promedio = sumaNotas / conteoNotas;
                        if (promedio > estudianteMejorProm.promedio) {
                            estudianteMejorProm.nombre = estudiantes[estudiante].nombre;                            
                            estudianteMejorProm.grado = grado;
                            estudianteMejorProm.curso = cursos[curso].curso;
                            estudianteMejorProm.promedio = promedio;
                        }
                        sumaNotas = 0;
                        conteoNotas = 0;
                    }
                }
            }
            console.log(`El estudiante con mejor promedio en ${nivelValue} es ${estudianteMejorProm.nombre}, curso: ${estudianteMejorProm.grado} ${estudianteMejorProm.curso}, promedio: ${estudianteMejorProm.promedio}`);
        }
        mejorPromNivel(nivel);
    }
     //funcion para obtener el estudiante con mejor nota en promedio en el grado ingresado por parámetro ej 'cuarto'
    else if (curso == undefined){
        function mejorPromGrado(datosColegio1, nivel, grado) {
            let estudianteMejorProm = {
                nombre: '',
                grado: '',
                curso: '',
                promedio: 0
            };
            let sumaNotas = 0;
            let conteoNotas = 0;
            let grados = datosColegio1[nivel][0][grado];
            for (let curso in grados) {
                let estudiantes = grados[curso].estudiantes;
                for (let estudiante in estudiantes) {
                    let asignaturas = estudiantes[estudiante].asignaturas;
                    for (let asignatura in asignaturas) {
                        let cortes = asignaturas[asignatura];
                        for (let corte in cortes) {
                            let notas = cortes[corte];
                            for (let nota in notas) {
                                sumaNotas += notas[nota];
                                conteoNotas += 1;
                            }
                        }
                    }
                    let promedio = sumaNotas / conteoNotas
                    if (promedio > estudianteMejorProm.promedio) {
                        estudianteMejorProm.nombre = estudiantes[estudiante].nombre;
                        estudianteMejorProm.curso = grados[curso].curso;
                        estudianteMejorProm.promedio = promedio;
                    }
                    sumaNotas = 0;
                    conteoNotas = 0;
                }
            }
            console.log(`El estudiante con mejor promedio en el grado ${grado} es ${estudianteMejorProm.nombre}, curso: ${estudianteMejorProm.curso}, promedio: ${estudianteMejorProm.promedio}`);
        }
        mejorPromGrado(datosColegio1, nivel, grado);
    } 
    //funcion para obtener el estudiante con mejor nota en promedio en el curso
    else {
        function mejorPromCurso (datosColegio1, nivel, grado, curso) {
            let estudianteMejorProm = {
                nombre: '',
                promedio: 0,
            };
            let sumaNotas = 0;
            let conteoNotas = 0;
            let cursoPos;
            if(curso == 'A'){
             cursoPos = 0
            }
            else if (curso == 'B'){
             cursoPos = 1
            }
            else {
                console.log('el curso ingresado no es correcto')
                return
            }
            let datosCurso = datosColegio1[nivel][0][grado][cursoPos];
            let estudiantes = datosCurso.estudiantes;
            for (let estudiante in estudiantes) {
                let asignaturas = estudiantes[estudiante].asignaturas;
                for (let asignatura in asignaturas) {
                    let cortes = asignaturas[asignatura];
                    for (let corte in cortes) {
                        let notas = cortes[corte];
                        for (let nota in notas) {
                            sumaNotas += notas[nota];
                            conteoNotas += 1;
                        }
                    }
                }
                let promedio = sumaNotas / conteoNotas
                if (promedio > estudianteMejorProm.promedio) {
                    estudianteMejorProm.nombre = estudiantes[estudiante].nombre;
                    estudianteMejorProm.promedio = promedio;
                }
                sumaNotas = 0;
                conteoNotas = 0;
            }
            console.log(`El estudiante con mejor promedio en el curso ${grado} ${curso} es ${estudianteMejorProm.nombre} con un promedio de ${estudianteMejorProm.promedio}`);
        }
        mejorPromCurso (datosColegio1, nivel, grado, curso);
    }
}

mejorPromParametro(datosColegio1,'secundaria','octavo','A')
mejorPromParametro(datosColegio1,'primaria','segundo');
mejorPromParametro(datosColegio1,'primaria');
mejorPromParametro(datosColegio1,'secundaria');
mejorPromParametro(datosColegio1);

//Buscar un estudiante que pertenezca a un grado seleccionado por parametro.*/
function mostrarEstudiante(datosColegio1, grado){
    let nivel;
    function getRandom(max){
        return Math.round(Math.random()*max);
    }
    if (grado == 'primero' || grado == 'segundo' || grado == 'tercero' || grado == 'cuarto' || grado == 'quinto') {
        nivel = 'primaria';
    }
    else{
         if (grado == 'sexto' || grado == 'septimo' || grado == 'octavo' || grado == 'noveno' || grado == 'decimo' || grado == 'once') {
            nivel = 'secundaria';
         }
        else {
            return String(`El grado ${grado} no existe.`);
        }    
    }
    
    let curso = getRandom(1);
    let posEstudiante = getRandom(datosColegio1[nivel][0][grado][curso].estudiantes.length-1);
    let estudiante = datosColegio1[nivel][0][grado][curso].estudiantes[posEstudiante];

    return estudiante;
}

console.log(`Estudiante que pertezca a grado once: `, mostrarEstudiante(datosColegio1, 'once'));


