import React from 'react';
import { useEffect, useState } from 'react';
import GameWidget from '../components/GameWidget/GameWidget';
import styles from '../styles/GamePage.module.css'

const GamePage = () => {
    const [palavraCerta, setPalavraCerta] = useState('')

    useEffect(()=>{
        fetch("https://api.dicionario-aberto.net/random")
        .then((res)=>{
            return res.json();
        })
        .then((palavra)=>{
            setPalavraCerta(palavra.word)
        })
    },[])
    return (
        <div className={styles.container}>
            <h1>{palavraCerta}</h1>
            {palavraCerta.length > 0?<GameWidget palavraCerta={palavraCerta} />:<></>}
        </div>
    );
};

export default GamePage;