import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Image } from 'semantic-ui-react'

const ListItem = ({pokemon,heightValue}) => {

    const [details, setDetails] = useState(null)
    const [sentHeight,setSentHeight]= useState(null)

 const getPokemonDetail = async ()=> {
    try {
        const {data} = await axios.get(pokemon.url)
        const {weight, height,sprites} = data
        setDetails({weight, height,sprites})
        setSentHeight(height)
        heightValue(sentHeight)
    } catch (error) {
        console.log(error)
    }
 }

  useEffect(()=>{
    getPokemonDetail()
  }, [pokemon])

  return (
        <Card style={{margin:'10px'}}>
    <Image src={details?.sprites.other.home.front_default} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{pokemon.name.toUpperCase()}</Card.Header>
      <Card.Description>
     Weight:  {details?.weight}
      </Card.Description>
      <Card.Description>
      Height: {details?.height}
      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default ListItem

//style="list-style:none; width: 200px; border: 1px solid"
// {listStyle: "none", width:'200px', border:'1px solid', margin:'4px'}