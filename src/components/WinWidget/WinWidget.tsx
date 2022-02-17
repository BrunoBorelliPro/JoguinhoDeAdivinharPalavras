import Link from 'next/link';
import React from 'react';
import styles from './WinWidget.module.css'

type Props = {
    palavraCerta:string
}

const WinPage = (props:Props) => {
    const palavraCerta = props.palavraCerta;
    return (
        <div className={styles.container}>
            <h1>Parabéns, você ganhou! A palavra correta era {palavraCerta}.</h1>
            <Link href="/game">Próximo</Link>
        </div>
    );
};

export default WinPage;