import React, { useState } from "react";
import { Table, Icon } from "semantic-ui-react";
import DeleteModel from "./DeleteModel";
import AddUpadateModel from "./AddUpadateModel";


const TraineesList = ({ trainees, traineeToUpdate, indexOfTrainee,addClicked }) => {
  let deleteUser=(item)=>{
    indexOfTrainee(item)
  }
let handleSend=(data,index)=>{
  traineeToUpdate(data,index)
}
  return (
    <>
      {trainees.length > 0 && (
        <Table fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          {trainees.length > 0 &&
            trainees.map((trainee, index) => {
             
              return (
                <Table.Body key={index}>
                  <Table.Row>
                    <Table.Cell>
                      {trainee.firstName} {trainee.lastName}
                    </Table.Cell>
                    <Table.Cell>{trainee.email}</Table.Cell>
                    <Table.Cell>{trainee.gender}
                      {trainee.gender === 'Male' ? <Icon style={{ width: '30px', color: 'green' }} size='large' name="male" /> :
                        <Icon style={{ width: '30px', color: 'red' }} size='large' name="female" />}</Table.Cell>
                    <Table.Cell>
                        <AddUpadateModel userDetail1={trainee} userIndex={index}  userUpdateData={handleSend}/>
                        <DeleteModel  userDetail={index} deleteUser={deleteUser}/>

                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              );
            })}
        </Table>
      )}
      <div>{trainees.length == 0 && <div>No Data Found!</div>}</div>
    </>
  )
};

export default TraineesList;
