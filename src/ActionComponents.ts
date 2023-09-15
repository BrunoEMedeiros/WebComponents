

export class AciotnComponent extends HTMLElement{
    constructor(){
        super();
        this.build();
    }

    build(){
        const shadow = this.attachShadow({mode: "open"});
        const botao: HTMLButtonElement = document.createElement("button");
        botao.id = "btn"
        botao.textContent = "Clique em mim"
        botao.onclick = this.acao;
        shadow.append(botao);
    }

    acao(){
        console.log("Clicou em mim!")
    }

    styles(){
        const style = document.createElement(`style`);
        style.textContent = `
            #btn{
                height: 40px;
                width: 80px;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 10px;
                background-color: blue;
                border: 1px solid blue;
                border-radius: 20%;
            }
        `
        return style;
    }
}