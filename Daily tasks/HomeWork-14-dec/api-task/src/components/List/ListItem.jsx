import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Image } from 'semantic-ui-react'

const ListItem = ({ pokemon, data1 }) => {

  const [details, setDetails] = useState(null)


  const getPokemonDetail = async () => {
    console.log(pokemon.url);
    try {
      const { data } = await axios.get(pokemon.url)
      const { weight, height, sprites, name } = data
      setDetails({ weight, height, sprites, name })
      data1(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPokemonDetail();
  }, [pokemon])

  return (
    <>{
      pokemon.height ? <Card style={{ margin: '10px' }}>
        <Image src={pokemon?.sprites.other.home.front_default} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{pokemon.name.toUpperCase()}</Card.Header>
          <Card.Description>
            Weight:  {pokemon?.weight}
          </Card.Description>
          <Card.Description>
            Height: {pokemon?.height}
          </Card.Description>
        </Card.Content>
      </Card>
        : <Card style={{ margin: '10px' }}>
          <Image src={details?.sprites.other.home.front_default} wrapped ui={false} />
          <Card.Content>
            <Card.Header>{details?.name.toUpperCase()}</Card.Header>
            <Card.Description>
              Weight:  {details?.weight}
            </Card.Description>
            <Card.Description>
              Height: {details?.height}
            </Card.Description>
          </Card.Content>
        </Card>
    }
    </>
  )
}

export default ListItem

//style="list-style:none; width: 200px; border: 1px solid"
// {listStyle: "none", width:'200px', border:'1px solid', margin:'4px'}