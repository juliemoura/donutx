type ButtonProps = { // estamos adicionando ao botao um tipo
    children?: string; // esse ? significa opcional, o botao pode ter um texto ou não
}

export function Button(props: ButtonProps){ //passando como parametro o tipo do botao
    return (
        <button>{props.children || 'Default'}</button> // aqui atribui um texto ao botao, OU(||) se ele nao tiver um texto deixa como default
    )
}