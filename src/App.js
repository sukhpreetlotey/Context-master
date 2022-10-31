import A from './A'
import {createContext} from 'react';

const LoveName = createContext()
const Wedding = createContext()

function App() {
  return (
    <>
    <LoveName.Provider value={"My Love is Amarjeet Kaur"}>
      <Wedding.Provider value={"Very Soon!!!"}>
    <A/>
    </Wedding.Provider>
    </LoveName.Provider>
    </>
  );
}

export default App;
export {LoveName,Wedding};

