import React, { useState } from 'react';
import dice1 from '../assets/images/dice3.png'
import dice2 from '../assets/images/dice-empty.png'
import dice3 from '../assets/images/dice6.png'

export default function Dice(){
    const styles ={
        maxWidth:'300px'
    }
    const [dice,setDice] = useState(dice1)
    const handleDice =()=>{
        setDice(dice2)
        setTimeout(function(){
            setDice(dice3)
        },1000)
    }
        return (
            <img src={dice} alt="" onClick={handleDice} style={styles}/>
        )
}