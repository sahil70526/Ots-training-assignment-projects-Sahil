import React, { useRef} from 'react'
import { Button,TextArea, Form } from 'semantic-ui-react'


function InputForm({ parentBag }) {
    const inputref1 = useRef();
    const inputref2 = useRef();
    const inputref3 = useRef();
    return (
        <div style={{width:'500px',marginTop:'10px'}}>
            <Form>
                <Form.Field>
                    <input className='search' type='text' placeholder='Enter Food name' ref={inputref1} />
                </Form.Field>
                <Form.Field>
                    <input className='search' type='text' placeholder='Enter Chiefs name' ref={inputref2} />
                </Form.Field>
                <Form.Field>
                    <input className='search' type='text' placeholder='Enter description of your recipy' ref={inputref3} />
                    {/* <TextArea  placeholder='Enter description of your recipy' ref={inputref3}/> */}
                </Form.Field>
                <Button className='btn' onClick={() => {
                    const detailsOfFood = {
                        foodName: inputref1.current.value,
                        chief: inputref2.current.value,
                        description: inputref3.current.value
                    }
                    parentBag(detailsOfFood)
                    inputref1.current.value = '';
                    inputref2.current.value = '';
                    inputref3.current.value = '';
                }}>Add</Button>
            </Form>
        </div>
    )
}

export default InputForm


