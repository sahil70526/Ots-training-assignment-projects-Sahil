import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown, Form } from "semantic-ui-react";
import TraineesList from "./TraineesList";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  const [filter, setFilter] = useState("");
  const [toUpdate,setToUpdate]=useState(false)

  const mockTraineesData = [
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Rahul",
      lastName: "Rauniyar",
      email: "rahul@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Saurabh",
      lastName: "Singh",
      email: "saurabh@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Mohd.",
      lastName: "Ehtesham",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Arun",
      lastName: "Kumar",
      email: "ehtesham@otssolutions.com",
      gender: "Male",
    },
    {
      firstName: "Shikha",
      lastName: "Singh",
      email: "singh.shikha14300@gmail.com",
      gender: "Female",
    }, {
      firstName: "Neha",
      lastName: "Yadav",
      email: "nehayadav4354@gmail.com",
      gender: "Female",
    }, {
      firstName: "Manisha",
      lastName: "More",
      email: "manisha@otssolutions.com",
      gender: "Female",
    },
    {
      firstName: "Supriya",
      lastName: "Patil",
      email: "supriya@otssolutions.com",
      gender: "Female",
    },
    {
      firstName: "Sahil",
      lastName: "Singh",
      email: "sahil.singh@otssolutions.com",
      gender: "Male",
    },
  ];

  const options = [
    {
      key: "ascending",
      text: "Sort-By-First-Name",
      value: "first-name",
    },
    {
      key: "descending",
      text: "Sort-By-Last-Name",
      value: "last-name",
    },
  ];

  useEffect(() => {
    setTraineesList(mockTraineesData);
  }, []);

  useEffect(() => {
    if (searchTerm != "") {
      const filteredData = mockTraineesData.filter((trainee) =>
        trainee.firstName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchedTraineesList(filteredData);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (filter != "") {
      let Name = mockTraineesData.map((c) => {
        return c.firstName;
      });
      let name = Name.sort();
      let result1 = [];
      let result2 = [];
      if (filter === 'first-name') {
        for (let i = 0; i < name.length; i++) {
          for (let j = 0; j < mockTraineesData.length; j++) {
            if (name[i] === mockTraineesData[j].firstName) {
              result1.push(mockTraineesData[j])
              break;
            }
          }
        }
        setSearchedTraineesList(result1);
        setTraineesList(result1)
      }
      else if (filter === 'last-name') {
        for (let i = 0; i < name.length; i++) {
          for (let j = 0; j < mockTraineesData.length; j++) {
            if (name[i] === mockTraineesData[j].firstName) {
              result2.push(mockTraineesData[j])
              break;
            }
          }
        }
        let result3 = [];
        for (let k = result2.length - 1; k >= 0; k--) {
          result3.push(result2[k])
        }
        setSearchedTraineesList(result3)
        setTraineesList(result3)
        console.log(searchedTraineesList);
      }
    }

  }, [filter]);

  let deleteTrainee = (index) => {
    let newData = traineesList.filter((c) => {
      if (traineesList[index] === c) {
        return false
      } else {
        return true;
      }

    })
    setSearchedTraineesList(newData);
    setTraineesList(newData);
  }

  const filterByName = () => {

  }

  let handleClick=(clicked)=>{
   if(clicked){
    setToUpdate(true)
   }
  }

  let handleUpdate=(item,index)=>{

  }

  return (
    <>
      <Header as="h1">Trainees</Header>
      
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "1rem",
        }}
      >{toUpdate?
        <div >
          <h1>Update the user details..</h1>
          <Form>
            <Form.Field>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <input placeholder='Last Name' />
            </Form.Field>
            <Form.Field>
              <input placeholder='e-mail can not be changed' disabled='true'/>
            </Form.Field>
            <Button primary>Update</Button>
          </Form>
        </div>:<div>
          <Input
            style={{ width: "25rem" }}
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search Name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button onClick={filterByName}>Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
              onChange={(e, value) => { setFilter(value.value) }}
            />
          </Button.Group>
        </div>

      }
          
      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          trainees={searchTerm == "" ? traineesList : searchedTraineesList}
          indexOfTrainee={deleteTrainee}
          isClicked={handleClick}
          traineeToUpdate={handleUpdate}

        />
      </div>
    </>
  );
};

export default TraineesComponent;
