
/* 
Criando CustomComponent basico
como a classe que estamos criando "Component" herda a classe HTMLElement
ao usarmos o modificador this. temos acesso a todas as propriedades
de um elemento html qualquer, nesse caso ao usar o innerHTML podemos criar
quantos elementos quisermos e de quais tipos quisermos
*/
export class Component extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = `
            <h1>Hello World</h1>
        `
    }
}