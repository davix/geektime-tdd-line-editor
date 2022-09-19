import {Layer, Line, Stage} from 'react-konva'

function App() {

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer><Line points={[30, 75, 82, 93]} stroke={'black'} strokeWidth={4}/></Layer>
    </Stage>
  )
}

export default App
