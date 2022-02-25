import styles from '../styles/Temporizador.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface TemporizadorProps {
    key: any
    duracao: number
    tempoEsgotado: () => void
}

export default function Temporizador(props: TemporizadorProps) {
    return (
        <div className={styles.temporizador}>
            <CountdownCircleTimer
                duration={props.duracao}//Recebe via propriedade um valor com o tempo de duração do temporizador
                size={120}
                isPlaying
                onComplete={props.tempoEsgotado}//Após termidado o tempo executa a função tempoEsgotado()
                colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                colorsTime={[7, 5, 2, 0]}//Controla o tempo de cada cor
                >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>
        </div>
    )
}