import { ButtonHTMLAttributes } from 'react'; // esse ButtonHTMLAttributes ja tras automaticamente todo tipo de atributo que um botao pode receber, seja o tipo text, submit, radio

import '../styles/buttons.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){ //passando como parametro o tipo do botao
    return (
        <button className="button" {...props}/> // esse {...props} passa todo tipo de propriedade para esse botao, do tipo texto, radio, submit e e tc
    )
}