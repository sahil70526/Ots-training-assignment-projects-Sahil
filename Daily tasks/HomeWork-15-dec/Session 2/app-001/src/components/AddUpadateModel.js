import React, { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal, Input, Form } from 'semantic-ui-react'
import "./styles.css";

function AddUpadateModel({ userDetail1, userIndex, userUpdateData, title, name, userAdd }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState({ firstName: '', lastName: '', email: '', gender: '' });
  const [index, setIndex] = useState(null)
  function addData(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  // useEffect for adding data ----------------------
  useEffect(() => {
    if (title === 'add') {
      setInput({ firstName: '', lastName: '', email: '', gender: '' })
    }
  }, [title]);

  useEffect(() => {
    if (userDetail1) {
      setInput({ ...userDetail1 })
      setIndex(userIndex)
    }
  }, [userDetail1])


  const handleUpdate = () => {
    setOpen(false);
    if (title === 'edit') {
      userUpdateData(input, index);
    } else if (title === 'add') {
      userAdd(input)
      setInput({ firstName: '', lastName: '', email: '', gender: '' })
    }
  }
  // console.log(Modal.trigger());
  return (
    <>
      <Modal
        closeIcon
        open={open}
        trigger={<Icon name={title} size='large' className='onHoverColor' />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        size='mini'
      >
        <Header icon>
          {name}
        </Header>
        <Modal.Content>
          <Form>
            <Form.Field>
              <input placeholder='First Name' onChange={addData} name='firstName' value={input.firstName} />
            </Form.Field>
            <Form.Field>
              <input placeholder='Last Name' onChange={addData} name='lastName' value={input.lastName} />
            </Form.Field>
            <Form.Field>
              <input placeholder='e-mail ' onChange={addData} name='email' value={input.email} />
            </Form.Field>
            <Form.Field>
              <input placeholder='Gender' onChange={addData} name='gender' value={input.gender} />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button color='green' onClick={handleUpdate}>
            {name}
          </Button>
        </Modal.Actions>
      </Modal>
    </>

  )
}

export default AddUpadateModel