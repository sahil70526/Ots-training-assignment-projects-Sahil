import React,{useState} from 'react'
import {Icon} from 'semantic-ui-react'

function IconChange() {
    const [color, setColor] = useState(null);
    const[clicked,setClicked]=useState(1)
    function update() {
        setClicked(clicked+1);
        clicked%2?setColor('red')
        :setColor(null);
    }

  return (
    <Icon style={{ color: color }} name='heart' onClick={update} />
  )
}

export default IconChange;