import styled from 'styled-components'

export const FooterContainer = styled.footer`
background-color: #1b1510;
`

export const FooterWrap = styled.div`
padding: 48px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 0 auto;
`

export const SocialMedia =styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display: flex;
justify-content: center;
align-items: center;
max-width: 1100px;
margin: 40px auto 0 auto;

@media screen and (max-width: 820px) {
    flex-direction: column;
}
`

export const WebsiteRights = styled.small`
color: #ff9100;
margin-bottom: 16px;
`