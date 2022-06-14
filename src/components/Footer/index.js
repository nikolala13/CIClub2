import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, WebsiteRights} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
        <SocialMedia>
            <SocialMediaWrap>
                <WebsiteRights>Close Investment Club © {new Date().getFullYear()} All right reserved.</WebsiteRights>
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer