//Vamos criar web components com estilos css imbutidos
export class StyledWebComponent extends HTMLElement {
    constructor() {
        super();
        this.build();
    }
    build() {
        const shadow = this.attachShadow({ mode: "open" });
        const elemento = document.createElement("div");
        elemento.textContent = `Ola turma`;
        elemento.id = `minha-div`;
        //Colocando meu elemento e o CSS na ShadowDOM que sera inserida
        //onde a tag do customElement for chamada
        shadow.append(elemento, this.styles());
    }
    //Criando o estilo CSS como uma funcao TS(JS)
    styles() {
        const style = document.createElement(`style`);
        style.textContent = `
            #minha-div{
                height: 100px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px;
                background-color: red;
                border: 1px solid red;
                border-radius: 20%;
            }
        `;
        return style;
    }
}
