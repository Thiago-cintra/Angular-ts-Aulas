export class Produto {

    constructor(
        public nome: string, 
        public preco: number, 
        private desconto: number  = 10

        ){
    }

    public aplicaDesconto = (preco: number) =>{
        return preco - this.desconto
    }
}