import './App.css'
import styled from 'styled-components'
import Sidebar from './components/Sidebar.js'
import CenterColumn from './components/CenterColumn/CenterColumn'
import SalesAnalysis from './components/SalesAnalysis/SalesAnalysis'
import Notification from './Notification.svg'
import Cloud from './Cloud.svg'

const Main = styled.div`
  text-align: center;
  background-color: #F9F9F9;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: black;
  overflow: auto;

  height: 100vh;
  width: 100vw;
`;

const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 100px;
  object-fit: cover;
`;

function App() {
  return (
      <Main>
        <Sidebar />
        <div className='CenterColumn'>
            <div className='top'>
              <img src={Cloud} alt="Cloud" />
              <img src={Notification} alt="Notification" />
              <Avatar src="/avatar.jpg" alt='Avatar' />
              Johnson Finch
            </div>
        
            <div className='context'>
                <SalesAnalysis />
            </div>
        </div>  
      </Main>
  );
}

export default App;
