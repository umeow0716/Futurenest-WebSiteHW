import styled from "styled-components"

const PageTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-left: 3vmin;

    & h3 {
        margin-block-start: 0.5em;
        margin-block-end: 0.5em;
    }

    &::after {
        content: '';
        width: 100%;
        height: 1vmin;
    }
`

const Description = styled.h6`
    font-size: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
    padding-left: 1.5vmin;

    margin-block-start: 1.8em;
    margin-block-end: 1.8em;
`

const PortTitle = styled.h5`
    padding-left: 3vmin;
    text-align: start;

    margin-block-start: 0em;
    margin-block-end: 0em;
`

const CustomPageTitle = (props) => {
    return (
        <PageTitle>
            <h3>{props.title}</h3>
            <Description>{props.description}</Description>
        </PageTitle>
    )
}

const CustomPortTitle = (props) => {
    return (
        <PortTitle>
            {props.text}
        </PortTitle>
    )
}

const Footer = styled.span`
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    padding-bottom: 2vmin;

    justify-content: space-between;
    align-items: center;
`
const Footer_Url = styled.a`
    herf: "/";
    color: rgba(25, 132, 177, 0.8);
    margin-right: 1vmin;
    margin-left: 1vmin;
`

const Footer_completed = () => (
    <Footer>
        <span>
            Copyright © 2020-2023
            <Footer_Url href="#">Globex Corporation</Footer_Url>
        </span>
        <span>
            <Footer_Url href="#">About Us</Footer_Url>
            <Footer_Url href="#">Contact Us</Footer_Url>
        </span>
    </Footer>
)

const ObjectList = {
    PageTitle,
    Description,
    PortTitle,
    Footer,
    Footer_Url,
    Footer_completed,
    CustomPageTitle,
    CustomPortTitle
}

export default ObjectList;