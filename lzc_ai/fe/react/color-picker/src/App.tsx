import { useState } from 'react'
import ColorBrowser  from './components/ColorBrowser'
import { type Color } from './model/color'
import ColorPicker from './components/ColorPicker'
import MemberTable from './components/MemberTable'

function App() {
  // ts适合大型项目开发，代码量大，成员多
  const [color, setColor] = useState<Color>({
    r: 20,
    g: 40,
    b: 180
  });
  return (
    <>
    <div>
      <ColorBrowser color={color} />
      <ColorPicker color={color} onColorUpdated={setColor} />
      <MemberTable />
    </div>
    </>
  )
}

export default App
