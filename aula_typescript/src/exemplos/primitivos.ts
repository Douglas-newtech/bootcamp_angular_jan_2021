export function exemploTipos() {
    let numero   = 5;           //let numero: number   = 5;         declarando o tipo da variavel
    let nome     = 'Douglas';   //let nome: string     = 'Douglas'; declarando o tipo da variavel
    let ehHumano = false;       //let ehHumano: bolean = false;     declarando o tipo da variavel


    console.log('O numero é ' + numero);
    console.log('O nome é ' + nome);
    console.log('Ele é humano?' + ehHumano);
}

export function exemploIfLoop(){
    let contador = 0;
    
    while (contador <= 5) {
        let nome = 'Douglas';
        if (contador === 2 && nome == 'Douglass') { // ('&&'=AND) ('||'=OR) 
            console.log('Chegou ao dois');
        } else{
            console.log('Nao chegou');
        }
        contador++; // ou contador = contador +1;
        console.log('contador é ' + contador);

    }
}