import React, { useState } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
const DeleteModel=({userDetail,deleteUser})=> {
    const [open, setOpen] =useState(false)
    let action =()=>{
      setOpen(false);
      deleteUser(userDetail);
    }
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      trigger={<Icon name="zip" style={{ width: '50px' }} size='large'/>}
    >
      <Header icon>
        <Icon name='archive' />
        Delete Trainee
      </Header>
      <Modal.Content>
        <p>
        Are you sure ...
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic color='red' inverted onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' inverted onClick={action}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteModel