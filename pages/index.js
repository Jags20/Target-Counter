import Head from 'next/head'
// import Image from 'next/image'
import { useState } from 'react'
import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [count, setCount] = useState(0);
  const [fly, setFly] = useState(false);
  const [name, setName] = useState('');

  useEffect ( () => {
    document.title = `${count}`;
  },[count]);

  const animateChange = () => {
    setFly(!fly);
  }
  const handleClickNeg = () => {
    setCount(count-1);
  }
  const handleClick1 = () => {
    setCount(count+1);
  }
  const changeClass = () => {
    setCount(count+2);
  }
  const handleClick3 = () => {
    setCount(count+3);
  }
  const handleClick5 = () => {
    setCount(count+5);
  }
  const zero = () => {
    setCount(0);
  }
  const user = () => {
    setName(prompt("what's your name?"));
  }
 
  return (
    <>
      <Head>
        {/* <title>Create Next App</title> */}
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <div className={styles.hdp1}></div>
        <p className={styles.heading}>Count Your Progress</p>
        <span className={styles.name}>{name}</span>
           <div className={styles.hdp2}></div>
        </div>
        
      <div className={styles.congo}>
      <meter value={count} max="240" className={styles.meter_design}></meter>
      <div>
          {count <0 ? (
            <p>Bhaisahab ye kis line m aa gye hain ap</p>
          ):
          (null)
          }
        </div>
        <div>
          {count >=50 && count < 100 ? (
            <p>Take some break,Snack Time🍨🍨🍨</p>
          ):
          (null)
          }
        </div>

        <div>
          {count >= 100 && count < 180 ? (
            <p>You can do it, push harder</p>
          ):
          (null)
          }
        </div>

        <div >
          {count >= 180 && count < 240 ? (
            <p>Just a few miles away🛣️🛣️</p>
          ):
          (null)
          }
        </div>

        <div>
          {count >= 240 && count < 275 ? (
            <p>Target Completed, Hurray🎉🥳🎉</p>
          ):
          (null)
          }
        </div>

        <div>
          {count >= 275 ? (
           <p className={styles.para}>Bass kar bhai, company ka share leke hi manega kya</p>
          ):
          (null)
          }
        </div>
        </div>
        <div className={styles.outer_line}>
          <div className={styles.center}>
            <b className={styles.b}>{count}</b>
          </div>
        </div>
        <div className={styles.button_cont}>
        <button className={styles.buttonNeg} onClick={handleClickNeg}>-1</button>
        {/* Added multiple class with condition and multiple function */}
          <button className={`${styles.button1} ${fly?null:styles["wwwch"]}`} onClick={() => {
          handleClick1()
          animateChange()
        }} >+1</button>
          <button className={styles.button_change} onClick={changeClass}>+2</button>
          <button className={styles.button3} onClick={handleClick3} >+3</button>
          <button className={styles.button5} onClick={handleClick5} >+5</button>
        </div>

        {/* We add multiple class in next like that */}
        {/* <div className={`${styles.mob} ${styles.mobile}`}> */}
          {/* <div className={fly? styles["wwwch"]: null} onClick={animateChange}>
            <button>gffgffjff</button>
          </div> */}
          {/* <button>hrrrrrr</button> */}
        {/* </div> */}
        
        <button className={styles.button0} 
        // onClick={zero}
        onClick = { () => {
          zero()
          user()
        }}
        >Reset</button>
        <p className={styles.footer_menu}>Made with Love ❤️</p>

      </main>
    </>
  )
}
// className={styles.buttonNeg}
// className={styles.button1} onClick={handleClick1}