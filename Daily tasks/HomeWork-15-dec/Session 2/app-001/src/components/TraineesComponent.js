import React, { useEffect, useState } from "react";
import { Header, Input, Button, Dropdown, Form } from "semantic-ui-react";
import TraineesList from "./TraineesList";
import mockTraineesData from "./MockTraineesData";
import AddUpadateModel from "./AddUpadateModel";

const TraineesComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [traineesList, setTraineesList] = useState([]);
  const [searchedTraineesList, setSearchedTraineesList] = useState([]);
  const [filter, setFilter] = useState("");


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

  const handleAdd = (trainee) => {
    if (trainee.firstName && trainee.lastName && trainee.email && trainee.gender) {
      traineesList.push(trainee);
      setTraineesList([...traineesList])
      setSearchedTraineesList([...traineesList])
    }

  }

  const updateFn = (item, index) => {
    let newData2 = traineesList.map((c) => {
      if (traineesList[index] === c) {
        return { ...item }
      }
      return c;
    })
    setTraineesList(newData2);
    setSearchedTraineesList(newData2);
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
      ><div>
          <Input
            style={{ width: "25rem" }}
            icon={{ name: "search", circular: true, link: true }}
            placeholder="Search Name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button.Group color="blue" style={{ marginLeft: "1rem" }}>
            <Button >Sort</Button>
            <Dropdown
              className="button icon"
              floating
              options={options}
              trigger={<></>}
              onChange={(e, value) => { setFilter(value.value) }}
            />

          </Button.Group>
          <Button.Group color="blue" style={{ marginLeft: "0.5rem" }}>
            <Button><AddUpadateModel title='add' name='Add Trainee' userAdd={handleAdd} />Add trainee</Button>
          </Button.Group>

        </div>



      </div>

      <div style={{ margin: "1rem" }}>
        <TraineesList
          trainees={searchTerm == "" ? traineesList : searchedTraineesList}
          indexOfTrainee={deleteTrainee}
          traineeToUpdate={updateFn}

        />
      </div>
    </>
  );
};

export default TraineesComponent;


