import React from 'react'
import data from './Data'
import { Card, Icon, Image} from 'semantic-ui-react';
import IconChange from './IconChange';

const CardData = () => {
  
    return (
            <Card.Group itemsPerRow={4}>
            {data.map((curent) => {
                return <Card>
                    <Image src={curent.image} wrapped ui={false} />
                    <IconChange/>
                    <Card.Content>
                        <Card.Header>{curent.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{curent.release}</span>
                        </Card.Meta>
                        <Card.Description>
                            {curent.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {curent.user}
                        </a>
                    </Card.Content>
                </Card>

            })

            }
            </Card.Group>
    )
}

export default CardData;
