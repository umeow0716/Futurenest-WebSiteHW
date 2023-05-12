import styled from 'styled-components'
import icon from './icon.svg'
import overviewIcon from './overview.svg'
import money from './money.svg'

const Base = styled.div`
    background: #FFFFFF;
    min-height: auto;
    min-width: 13vw;
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
        
        align-items: center;
        justify-items: center;
        padding: 1vmin;
        margin: 2vmin;

        transition: background-color 200ms ease-out 30ms;

        &:hover {
            background-color: #93F0F0;
        }
    `;

    const TextBox = styled.b`
        font-family: Inter;
        font-size: 19px;
        color: black;
        padding: 1vmin
    `;

    const LastIcon = styled.img`
        justify-items: end;
    `;
    return (
        <Object>
            <img src={props.icon} alt="icon"/>
            <TextBox>{props.text}</TextBox>
        </Object>
    )
}



function Sidebar() {
    return (
        <Base>
            <img src={icon} alt="logo" />
            <ItemList>
                <Item icon={overviewIcon} text="Overview"/>
                <Item icon={money} text="Item"/>
                <Item icon={overviewIcon} text="Item"/>
            </ItemList>
        </Base>
    )
}

export default Sidebar;