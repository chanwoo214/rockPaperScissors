import './App.css';
import Box from "./component/Box"

// 1. 2 boxes (title, picture, result)
// 2. rock paper scissors icon button
// 3. when button is clicked, it shows inside the box
// 4. computer has randomly selects the options
// 5. with the result from 3,4 it will determine the winner
// 6. according to to the result, the box colour changes (win - green, lose - red, tie - black)

function App() {
  return (
    <div >
      <Box/>
    </div>
  );
}

export default App;
 
