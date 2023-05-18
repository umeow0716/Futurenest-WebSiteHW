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

const ObjectList = {
    PageTitle,
    Description,
    PortTitle,
    CustomPageTitle,
    CustomPortTitle
}

export default ObjectList;