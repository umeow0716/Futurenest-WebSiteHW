import styled from 'styled-components'
import Sidebar from './components/Sidebar'

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
    <Main>
        <Sidebar />
    </Main>
  );
}

export default App;
