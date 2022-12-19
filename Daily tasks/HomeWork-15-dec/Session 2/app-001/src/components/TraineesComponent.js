import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown, Form } from "semantic-ui-react";
import TraineesList from "./TraineesList";
import mockTraineesData from "./MockTraineesData";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  const [filter, setFilter] = useState("");
  const [toUpdate,setToUpdate]=useState(false)
  const [update,setUpdate]=useState({firstName:'',lastName:'',email:'',gender:''});
  const [toIndex,setToIndex]=useState(null);

  
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

  useEffect(() => {
    if(update.firstName){
      setToUpdate(true);
    }
    
  }, [update]);

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



  let handleUpdate=(item,index)=>{
     setUpdate({...item});
     setToIndex(index);
  }
  function addData(e) {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  }
  let updatefn=()=>{
    let newData2= traineesList.map((c)=>{
       if(traineesList[toIndex]===c){
        return {...update}
       }
       return c;
    })
    setSearchedTraineesList(newData2);
    setTraineesList(newData2);
    setToUpdate(false);
    setUpdate({firstName:'',lastName:'',email:'',gender:''});
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
              <input placeholder='First Name' onChange={addData} name='firstName' value={update.firstName}/>
            </Form.Field>
            <Form.Field>
              <input placeholder='Last Name' onChange={addData} name='lastName' value={update.lastName}/>
            </Form.Field>
            <Form.Field>
              <input placeholder='e-mail can not be changed' disabled='true' onChange={addData} name='email' value={update.email}/>
            </Form.Field>
            <Form.Field>
              <input placeholder='Gender' onChange={addData} name='gender' value={update.gender}/>
            </Form.Field>
            <Button primary onClick={updatefn}>Update</Button>
            <Button primary onClick={()=>setToUpdate(false)}>Cancel</Button>
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
          traineeToUpdate={handleUpdate}

        />
      </div>
    </>
  );
};

export default TraineesComponent;
