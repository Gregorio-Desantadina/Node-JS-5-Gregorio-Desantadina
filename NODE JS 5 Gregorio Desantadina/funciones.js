function Programa(){
    const datos = "100 200 50 330 250 180 190 200 150 90 165 240 20 340"; 
    const secuencia = Cuadrante(datos);
    const ciclos = Ciclos(secuencia);
    const porcentajes = Porcentajes(secuencia);
    

    alert("Cuadrantes: " + secuencia);
    alert("Ciclos completos: " + ciclos);
    alert("Porcentajes: Norte: " + porcentajes[0] + " Sur: " + porcentajes[1] + " Este: " + porcentajes[2] + " Oeste: " + porcentajes[3]);

}

function Cuadrante(datos) {
    const señales = datos.split(' ').map(Number);
    let cuadrantes = [];
    for (let señal of señales) {
        if (señal < 0) {
            break;
        }
        let cuadrante = "";
        if (señal <= 45 || señal > 315) {
            cuadrante = 'E';
        } else if (señal > 45 && señal <= 135) {
            cuadrante = 'N';
        } else if (señal > 135 && señal <= 225) {
            cuadrante = 'O';
        } else if (señal > 225 && señal <= 315) {
            cuadrante = 'S';
        }
        cuadrantes.push(cuadrante);
    }
    return cuadrantes.join(' ');
}

function Ciclos(cuadrantes) {
    const ciclosCompletos = ['NESO', 'NOSE', 'OSEN', 'ESON', 'SENO', 'SONE', 'ENOS', 'ONES'];
    let ciclos = 0;
    let secuencia = cuadrantes.replace(/ /g, ""); 
    for(let i = 0; i < ciclosCompletos.length;i++){
        if(secuencia.match(ciclosCompletos[i]) != null){ 
            ciclos++;                                      
        }
    }
    return ciclos;
}

function Porcentajes(cuadrantes) {
    let secuencia = cuadrantes.replace(/ /g, ""); 
    const total = secuencia.length;
    const N = ((secuencia.match(/N/g)).length / total * 100).toFixed(2);
    const S = ((secuencia.match(/S/g)).length / total * 100).toFixed(2);
    const E = ((secuencia.match(/E/g)).length / total * 100).toFixed(2);
    const O = ((secuencia.match(/O/g)).length / total * 100).toFixed(2);
    return [N, S, E, O];
}