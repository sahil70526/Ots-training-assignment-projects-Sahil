import React, { useEffect, useState } from 'react'
import { Button, Header, Icon, Modal, Input, Form } from 'semantic-ui-react'

function AddUpadateModel({ userDetail1, userIndex, userUpdateData,addClicked }) {
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [input, setInput] = useState({ firstName: '', lastName: '', email: '', gender: '' });
  const [index, setIndex] = useState(null)
  const [clicked,setClicked]=useState(false)
  function addData(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  // useEffect for adding data ----------------------
   useEffect(()=>{
    console.log(addClicked);
    if(addClicked){
      setClicked(true);
      setInput({firstName: '', lastName: '', email: '', gender: '' })
    }
   },[addClicked]);

  useEffect(() => {
    if (userDetail1) {
      setInput({ ...userDetail1 })
      setIndex(userIndex)
    }
  }, [userDetail1])

  const handleAdd=()=>{
    setOpen1(false)
    setClicked(false)
  }
  

  const handleUpdate = () => {
    setOpen(false);
    userUpdateData(input, index);
  }
  // console.log(Modal.trigger());
  return (
    <>
       {/* <Modal
        closeIcon
        open={open1}
        trigger={<Button active={clicked}></Button>}
        onClose={() => setOpen1(false)}
        onOpen={() => setOpen1(true)}
        size='mini'
      >
        <Header icon>
         Add New User
        </Header>
        <Modal.Content>
          <Input placeholder='First Name' onChange={addData} name='firstName' value={input.firstName} />
        </Modal.Content>
        <Modal.Content>
          <Input placeholder='Last Name' onChange={addData} name='lastName' value={input.lastName} />
        </Modal.Content>
        <Modal.Content>
          <Input placeholder='e-mail can not be changed' disabled='true' onChange={addData} name='email' value={input.email} />
        </Modal.Content>
        <Modal.Content>
          <Input placeholder='Gender' onChange={addData} name='gender' value={input.gender} />
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' onClick={() => setOpen1(false)}>
            Cancel
          </Button>
          <Button color='green' onClick={handleAdd}>
            Add Trainee

          </Button>
        </Modal.Actions>
      </Modal> */}
      <Modal
        closeIcon
        open={open}
        trigger={<Icon name='edit' size='large' />}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        size='mini'
      >
        <Header icon>
          Update the user details..
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
              <input placeholder='e-mail can not be changed' disabled='true' onChange={addData} name='email' value={input.email} />
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
            Update Trainee
          </Button>
        </Modal.Actions>
      </Modal>
    </>

  )
}

export default AddUpadateModel