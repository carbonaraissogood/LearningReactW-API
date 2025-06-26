import { useState } from 'react'
import Square from './Square';
import Input from './Input';

const ColorSearcher = () => {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div>
      
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      >
      </Square>

      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}>
      </Input>

    </div>
  )
}

export default ColorSearcher