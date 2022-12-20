import React, { useState } from "react";
import { Table, Icon } from "semantic-ui-react";
import DeleteModel from "./DeleteModel";


const TraineesList = ({ trainees, traineeToUpdate, indexOfTrainee }) => {
  let deleteUser=(item)=>{
    indexOfTrainee(item)
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
                      <Icon name="edit" style={{ width: '50px', color: '#F56EB3' }} size='large'
                        onClick={() => {
                          traineeToUpdate(trainee, index);
                        }} />
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
