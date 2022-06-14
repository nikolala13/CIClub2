import React from 'react'
import { InfoContainer, InfoRow, InfoWrapper, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img, Subtitle2, Subtitle3, Subtitle4 } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, description2, description3, description4, alt, img }) => {
  return (
    < >
        <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <Subtitle2 darkText={darkText}>{description2}</Subtitle2>
                        <Subtitle3 darkText={darkText}>{description3}</Subtitle3>
                        <Subtitle4 darkText={darkText}>{description4}</Subtitle4>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
        </InfoContainer>
        </>
  )
}

export default InfoSection