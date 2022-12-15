import React, { useState } from "react";
import { Dropdown, Input, Button, Form } from 'semantic-ui-react'

function SearchForm({ filterPokemon ,filterByHeight}) {
  const [value, setValue] = useState('')
  const [btnStyle, setBtnStyle] = useState(false);
  const [findHeight, setFindHeight] = useState(null)

  const options = [
    { key: 1, text: 'Large', value: 'Large' },
    { key: 2, text: 'Medium', value: 'Medium' },
    { key: 3, text: 'Small', value: 'Small' },
  ]


  function getFormData(e) {
    e.preventDefault();
  }

  const search = (e) => {
    setValue(e.target.value)

  };

  const sendData = () => {
    filterPokemon(value)
    setValue('');
    setBtnStyle(true);
  }

  return (
    <div
      style={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '10px'

      }}
    >
      <Form onSubmit={getFormData}>
        <Input focus placeholder="search-in-page" onChange={search} value={value} name="pokemon" />
        <Button content='Search' primary onClick={sendData} disabled={btnStyle} style={{ marginLeft: '5px' }} />
        <Button content='Reset' secondary onClick={() => window.location.reload()} />

      </Form>
      <Dropdown options={options} selection placeholder="Filter-by-height"
       onChange={(e, data) => { setFindHeight(data.value)
       filterByHeight(findHeight) }} />
    </div>
  );
};

export default SearchForm;
