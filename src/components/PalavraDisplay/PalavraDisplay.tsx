import { type } from 'os';
import React from 'react';
import LetraWidget from '../LetraWidget/LetraWidget';
import styles from './PalavraDisplay.module.css'

type Props = {
    palavra: string;
    palavraCerta:string;
    erro:boolean;
}

function PalavraDisplay(props: Props) {
    let letras = props.palavra.split('');
    let erro = props.erro
    const palavraCerta = props.palavraCerta
    return (
        <div className={styles.container}>
            <p><b>Dica:</b> a palavra tem {palavraCerta.length} letras</p>
            <div className={!erro?styles.box:styles.boxErro}>
                {letras.map((letra, index)=>{return(<LetraWidget letra={letra} key={index} />)})}
                {console.log(letras)}
            </div>

        </div>
    );
}

export default PalavraDisplay;