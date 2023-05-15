import './App.css'
import styled from 'styled-components'
import Sidebar from './components/Sidebar.js'
import CenterColumn from './components/CenterColumn/CenterColumn'

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

function App() {
  return (
      <Main>
        <Sidebar />
        <div className='CenterColumn'>
            <div className='top' />
        
            <div className='context'>
                <CenterColumn />
            </div>
        </div>  
      </Main>
  );
}

export default App;
