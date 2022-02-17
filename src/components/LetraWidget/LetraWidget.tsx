import { KeyboardEventHandler, useEffect, useState } from 'react';
import styles from './LetraWidget.module.css'

type Props = {
    letra: string;
}

const LetraWidget = (props:Props) => {
    let letra = props.letra
    const [key, setKey] = useState<string>(letra);
    return (
        <div className={styles.letraContainer}>
           <div className={styles.letraBox}>
               {key}
           </div>
        </div>
    );
};



export default LetraWidget;