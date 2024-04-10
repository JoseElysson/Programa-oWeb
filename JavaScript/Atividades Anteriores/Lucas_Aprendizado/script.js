    // Arrays são estruturas de dados heterogeneas(float, string, boolean, inteiro/interger)
    // associados a um indentificador para armazenar valores indexados.

    let arrayCadastro = ["Maria José", 27, 1.7,true];
    console.log(arrayCadastro[0]); //Maria josé
    arrayCadastro[2] = 1.8; //charge 
    console.log(arrayCadastro);
    console.log(arrayCadastro.length); // size of arraycadastro
    arrayCadastro.pop(); //remove
    arrayCadastro.push(false); //add
    delete arrayCadastro[1]; //remove
    console.log(arrayCadastro);
    console.log(arrayCadastro.reverse()); //inverte

    //Objetos: Uma coleção de dados(estrutura) no formato par e valor.
    const funcionario ={
        nome:"José Roberto",
        idade:30,
        altura:1.70,
        filhos:true,
        endereco:{
            rua:"13 de maio",
            numero:"S/N",
            cep:63500773
        }
    }
    console.log(funcionario.nome); //acess
    funcionario.idade = 25; //change
    funcionario.clt = false;
    console.log(funcionario);
    console.log(arrayCadastro)

    console.log(funcionario.endereco.rua); //acess