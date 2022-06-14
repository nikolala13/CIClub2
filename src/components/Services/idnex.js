import React from 'react'
import Icon1 from '../../images/svg-3.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-4.svg'
import Icon4 from '../../images/svg-6.svg'
import Icon5 from '../../images/svg-7.svg'
import Icon6 from '../../images/svg-8.svg'
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, TopLine } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
    <TopLine>Close Investment Club</TopLine>
        <ServicesH1>Rewards for holders</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2> IRL rewards </ServicesH2>
                <ServicesP> Unique items referring to our collection. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2> Digital rewards </ServicesH2>
                <ServicesP> NFT & Crypto giveaways. </ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2> Live meetups </ServicesH2>
                <ServicesP> Community events in Europe.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon4} />
                <ServicesH2> Merchandise </ServicesH2>
                <ServicesP> Limited edition of our own clothing.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon5} />
                <ServicesH2> Collaborations </ServicesH2>
                <ServicesP> Collaborations with other communities.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon6} />
                <ServicesH2> Personal Impact </ServicesH2>
                <ServicesP> Contributing to the community.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services