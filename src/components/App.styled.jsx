import styled from '@emotion/styled';
import img from '../images/bgi-home.jpg';


export const MainContainer = styled.div`
    min-width: 320px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    margin-left: auto;
    margin-right: auto;
    @media (min-width: 320px) {
        width: 320px;
    }
    @media (min-width: 768px) {
        width: 768px;
        padding-left: 32px;
        padding-right: 32px;
    }
    @media (min-width: 1200px) {
        width: 1200px;
        padding-left: 16px;
        padding-right: 16px;
    }
`;

export const Title = styled.h1`
    text-align: center;
    color: #7362B9;
    text-shadow: 1px 1px 1px #D393C5;
    
    margin-bottom: 25px;
`;

export const SubTitle = styled.h2`
    text-align: center;
    color: #D393C5;
    text-shadow: 1px 1px 1px #7362B9;

    margin-bottom: 25px;
`;

export const ContactContainer = styled.div`
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
`;


export const BackgroundContainer = styled.div`
    background-image: url(${img});
    background-size: cover;
   
   
    height: 700px;
`;
