/*
WebComponents - basico
Consiste em 3 pilares centrais:

* Custom elements
* Shadow DOM
* HTML templates

*/
export class WebComponent extends HTMLElement {
    constructor() {
        super();
        this.build();
    }
    //Nao é obrigatório separar dessa forma, porem fica mais organizado
    build() {
        //Aqui criamos a shadowDom que sera inserida na pagina html atraves do
        //uso do customElement criado nesta classe
        const shadow = this.attachShadow({ mode: "open" });
        const h1 = document.createElement("h1");
        h1.textContent = `Ola turma`;
        shadow.append(h1);
    }
}
