import styled from "styled-components"
import { useState, useEffect } from 'react'
import Embed from './components/Embed'

const SalesRank = Embed.CustomContainer(
    [],
    styled.img`
        max-width: 30vw;
        padding-right: 0.65vw;
        padding-left: 0.65vw;
    `,
    "30vw"
)

const Description = styled.h6`
    width: 30vm;
    display: flex;
    flex-wrap: no-wrap;
    font-size: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.4);
    padding-left: 0.5vmin;

    margin-block-start: 0em;
    margin-block-end: 0em;
`

function App() {
    const [Data, SetData] = useState(<div />)
    useEffect(() => {
        fetch("https://api.metapoly.game/activity/list")
        .then(data => data.json())
        .then(data => SetData(data.map(x => (<SalesRank Title={x.name} src={x.picture}>
            <Description>{x.description}</Description>
        </SalesRank>))))
        
    })
    return (
        <div>
            {Data}
        </div>
    )
}

export default App;