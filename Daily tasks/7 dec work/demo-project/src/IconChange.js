import React,{useState} from 'react'
import {Icon} from 'semantic-ui-react'

function IconChange() {
    const [color, setColor] = useState(null);
    const[clicked,setClicked]=useState(true)
    function update() {
        setClicked(!clicked);
        clicked?setColor('red')
        :setColor(null);
        clicked?alert('item added to wishlist'):alert('item removed to wishlist')
    }

  return (
    <Icon style={{ color: color,fontSize:'22px',margin:'5px' }} name='heart' onClick={update} />
  )
}

export default IconChange;