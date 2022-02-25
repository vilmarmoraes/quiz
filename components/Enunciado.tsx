import styles from '../styles/Enunciado.module.css'

//Propriedades que deve ser implementada no component Enunciado
interface EnunciadoProps {
    texto: string
}

//Componente que contem o texto com enunciado da questão
export default function Enunciado(props: EnunciadoProps) {
    return <div className={styles.enunciado}>
        <span className={styles.texto}>{props.texto}</span>
    </div>
}