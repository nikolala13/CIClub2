import React from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements'

const HeroSection = () => {

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Close Investment Club</HeroH1>
            <HeroP>
            NFT collection with a unique idea that hasn't been seen before. We will become the most recognizable and desirable community among crypto enthusiasts.
            </HeroP>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection