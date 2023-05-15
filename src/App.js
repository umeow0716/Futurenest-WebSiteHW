import './App.css'
import styled from 'styled-components'
import Sidebar from './src/components/Sidebar'
import CenterColumn from './components/CenterColumn/CenterColumn'

const Main = styled.div`
  text-align: center;
  background-color: #F9F9F9;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  return (
    <div className='container'>
      <div className='Sideebar'>
      <Main>
      <Sidebar />
      </Main>
      </div>
      <div className='CenterColumn'>
        <div className='top'>

        </div>
        <div className='context'>
          <CenterColumn />
        </div>
        
      </div>  
    </div>
  );
}

export default App;
