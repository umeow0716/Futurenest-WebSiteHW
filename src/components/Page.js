import styled from "styled-components"

//頁面標題
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

//頁面標題附註(灰色小字)
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

//段落標題(ex. Overview)
const PortTitle = styled.h5`
    padding-left: 3vmin;
    text-align: start;

    margin-block-start: 0em;
    margin-block-end: 0em;
`

//頁面標題(使用範例: <CustomPageTitle title="this is title" description="this is description"/>)
const CustomPageTitle = (props) => {
    return (
        <PageTitle>
            <h3>{props.title}</h3>
            <Description>{props.description}</Description>
        </PageTitle>
    )
}

//段落標題(使用範例: <CustomPortTitle text="this is port title"/>)
const CustomPortTitle = (props) => {
    return (
        <PortTitle>
            {props.text}
        </PortTitle>
    )
}

//結尾區塊CSS
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

//結尾超連結
const FooterUrl = styled.a`
    herf: "/";
    color: rgba(25, 132, 177, 0.8);
    margin-right: 1vmin;
    margin-left: 1vmin;
`

//結尾懶人包(使用範例: <FooterCompleted />)
//內容都已刻上去
const FooterCompleted = () => (
    <Footer>
        <span>
            Copyright © 2020-2023
            <FooterUrl href="#">Globex Corporation</FooterUrl>
        </span>
        <span>
            <FooterUrl href="#">About Us</FooterUrl>
            <FooterUrl href="#">Contact Us</FooterUrl>
        </span>
    </Footer>
)

const ObjectList = {
    PageTitle,
    Description,
    PortTitle,
    Footer,
    FooterUrl,
    FooterCompleted,
    CustomPageTitle,
    CustomPortTitle
}

export default ObjectList;