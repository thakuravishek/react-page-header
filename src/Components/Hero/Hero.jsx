import React from 'react'
import "./Hero.css"
import "../../Global.css"
import pause from "../../Assets/pause_icon.png"
import play from "../../Assets/play_icon.png"
import arrow from "../../Assets/arrow_btn.png"

const Hero = ({setPlayStatus,heroData,heroCount,setHeroCount,playStatus}) => {
  return (
    <div className='hero'>
      <div className='hero-text'>
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className='hero-explore'>
        <p>Explore the features</p>
        <img src={arrow} alt="" />
      </div>
      <div className='hero-dot-play'>
        <ul className='hero-dots'>
          <li onClick={()=>{setHeroCount(0)}} className={heroCount===0? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>{setHeroCount(1)}} className={heroCount===1? "hero-dot orange":"hero-dot"}></li>
          <li onClick={()=>{setHeroCount(2)}} className={heroCount===2? "hero-dot orange":"hero-dot"}></li>

        </ul>
        <div className='hero-play'>
          <img src={playStatus?pause:play} onClick={()=>{setPlayStatus(!playStatus)}} alt="" />

        </div>
      </div>
    </div>
  )
}

export default Hero
