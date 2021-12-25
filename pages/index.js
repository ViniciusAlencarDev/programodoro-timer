import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [timer, setTimer] = useState(0);
  const [timerTotal] = useState(7800)
  const [progress, setProgress] = useState(0)
  const [timerInterval, setTimerInterval] = useState(null)
  const [timeLeft, setTimeLeft] = useState('')

  function startInterval() {
    setTimerInterval(setInterval(() => {
      increment()
    }, 1000))
  }

  function increment() {
    if(timer <= timerTotal) {
      setTimer(timer++)
    } else {
      pause()
      console.log('Timer acabout');
    }
  }

  useEffect(() => {
    setProgress((timer / timerTotal) * 100)

    let totalSegundos = timerTotal - timer

    var horas   = Math.floor(totalSegundos / 3600)
    var minutos = Math.floor(totalSegundos / 60) % 60
    var segundos = totalSegundos % 60

    setTimeLeft(`${(horas < 10 ? '0' : '')+horas}:${(minutos < 10 ? '0' : '')+minutos}:${(segundos < 10 ? '0' : '')+segundos}`)

  }, [timer])

  function play() {
    pause()
    startInterval();
  }

  function pause() {
    clearInterval(timerInterval)
  }

  function stop() {
    clearInterval(timerInterval)
    setTimer(0)
    setProgress(0)
  }

  return (
    <div className={styles.container}>

    <h1><span>PROGRA</span><span>MODORO</span></h1>

      {/* <span>Temporizador: {timer}  </span> */}
      <span>Temporizador: {timeLeft}  </span>

      <button onClick={() => play()}>Play</button>
      <button onClick={() => pause()}>Pause</button>
      <button onClick={() => stop()}>Stop</button>
  
      <br />
      <br />
      
      <div className={styles.pomodoro}>

          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <div className={styles.boxTimeDescription}>Tempo do descanço</div>
          </div>
          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <textarea className={styles.boxTimeDescription} placeholder='Descrição'></textarea>
          </div>
          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <div className={styles.boxTimeDescription} placeholder='Descrição'>Tempo do descanço</div>
          </div>
          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <textarea className={styles.boxTimeDescription} placeholder='Descrição'></textarea>
          </div>
          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <div className={styles.boxTimeDescription} placeholder='Descrição'>Tempo do descanço</div>
          </div>
          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <textarea className={styles.boxTimeDescription} placeholder='Descrição'></textarea>
          </div>
          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <div className={styles.boxTimeDescription} placeholder='Descrição'>Tempo do descanço</div>
          </div>

          <div className={styles.boxTime}>
            <div className={styles.boxTimeFocus}></div>
            <textarea className={styles.boxTimeDescription} placeholder='Descrição'></textarea>
          </div>
          
          <div className={[styles.progress]} style={{ height: `${progress}%` }}></div>
    
      </div>

    </div>
  )
}
