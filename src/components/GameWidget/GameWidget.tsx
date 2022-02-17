import React from 'react';
import { useEffect, useState } from 'react';
import PalavraDisplay from '../PalavraDisplay/PalavraDisplay';
import WinWidget from '../WinWidget/WinWidget';
import styles from './GameWidget.module.css'

type Props = {
    palavraCerta: string
}

const GameWidget = (props:Props) => {
    const [palavra, setPalavra] = useState<string>('')
    const [palavraCerta, setPalavraCerta] = useState<string>(props.palavraCerta)
    const [venceu, setVenceu] = useState<boolean>(false)
    const [erro, setErro] = useState<boolean>(false)
    const [tentaivas, setTentativas] = useState<number>(0)
    const venceufun = ()=>{
        if(palavra === palavraCerta){
            setVenceu(true)
        }else if(palavra.length === palavraCerta.length){
            setErro(true)
            setTentativas(tentaivas+1)
        }else{
            setErro(false)
        }
    }
    const keyPressHandle = ({key}:{key:string})=>{
        console.log(key)

        if(key === 'Delete' || key === 'Backspace'){
            setPalavra(palavra.slice(0, -1))
        }
        if(palavra.length<palavraCerta.length && key.length === 1){
            setPalavra((palavra+key).toLocaleLowerCase())

        }

    }


    useEffect(()=>{
        window.addEventListener('keydown',keyPressHandle)
        return ()=>{
            window.removeEventListener('keydown',keyPressHandle)
        }
    })
    useEffect(()=>{
        venceufun()
    }, [palavra])

    
    return (
        <div className={styles.container}>
            {venceu? <WinWidget palavraCerta={palavraCerta} />:<PalavraDisplay palavraCerta={palavraCerta} palavra={palavra} erro={erro}/>}
        </div>
    );
};

export default GameWidget;