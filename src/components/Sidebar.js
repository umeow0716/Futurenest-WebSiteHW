import styled from 'styled-components'
import icon from './icon.svg'
import IconList from './IconList.js'

import right from './right.js'
import down from './down.js'

const Base = styled.div`
    background: #FFFFFF;
    min-height: auto;
    min-width: 15vw;
    box-shadow: 3px 3px 5px #E9E9E9;
    align-items: start;
    justify-items: center;
    padding-top: 2vh;
    flex-direction: column;
`;

const ItemList = styled.div`
    height: 92%;
    width: auto;
    flex-direction: column;

    &:before {
        height: 500px;
        content:"";
    }
`;

const Item = (props) => {
    const Object = styled.div`
        display: flex;
        
        border-radius: 10px;
        margin: 1vmin;
        height: 4vmin;
        width: 83%;
        
        flex-direction: row;
        align-items: center;
        padding: 1vmin;
        margin: 2vmin;
        
        color: #999999;
        transition: background-color 200ms, color 200ms, fill 500ms ease-out 30ms;
        
        & path {
            fill: #999999
        }

        &:hover {
            background-color: #93F0F0;
            color: black;
        }

        &:hover path {
            fill: black;
        }
    `;

    const TextBox = styled.b`
        font-family: Inter;
        font-size: 19px;
        padding: 1vmin;
    `;

    const LastIcon = styled.div`
        display: flex;
        margin-left: auto;
    `;
    return (
        <Object>
            <props.icon alt="icon"/>
            <TextBox>{props.text}</TextBox>
            <LastIcon>{props.LastIcon ? <props.LastIcon /> : ""}</LastIcon>
        </Object>
    )
}



function Sidebar() {
    return (
        <Base>
            <img src={icon} alt="logo" />
            <ItemList>
                <Item icon={IconList.Overview} text="Overview"/>
                <Item icon={IconList.Finance} LastIcon={right} text="Finance" alt="right"/>
                <Item icon={IconList.Sales} LastIcon={right} text="Sales"/>
                <Item icon={IconList.HR} LastIcon={right} text="HR"/>
                <Item icon={IconList.Invoicing} LastIcon={right} text="Invoicing"/>
                <Item icon={IconList.Genuine_AI} LastIcon={right} text="Genuie AI"/>
            </ItemList>
        </Base>
    )
}

export default Sidebar;