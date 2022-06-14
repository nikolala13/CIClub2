import styled from 'styled-components'

export const ServicesContainer = styled.div`
height: 800px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #4d2d029a;

@media screen and (max-width: 768px) {
    height: 1100px;
}

@media screen and (max-width: 480px) {
    height: 1300px;
}
`
export const TopLine = styled.p`
color: #ff9100;
font-size: 16px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const ServicesWrapper = styled.div`
max-width: 1070px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}
`

export const ServicesCard = styled.div`
background: #fff;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 340px;
padding: 30px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`

export const ServicesIcon = styled.img`
height: 160px;
width: 160px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
letter-spacing: 6px;
font-weight: 600;
color: #fff;

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
`
export const ServicesP = styled.p`
font-size: 1rem;
text-align: center;
`