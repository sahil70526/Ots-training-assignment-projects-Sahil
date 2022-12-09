import React, { useEffect, useState } from "react";
import PersonComponent from "./PersonComponent";
import personDetails from "./PersonDetails";

const onlyBoysAllowed = personDetails.filter((currentIteration) => {
  if (currentIteration.gender == "female") {
    return false;
  }
  return true;
});

const onlyGirlsAllowed = personDetails.filter((currentIteration) => {
  if (currentIteration.gender == "male") {
    return false;
  }
  return true;
});

function UseEffectImplementation001() {
  const [personDetailsData, setPersonDetailsData] = useState([]);
  const [isGirlsAllowed, setIsGirlsAllowed] = useState(true);
  const [isBoysAllowed, setIsBoysAllowed] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isBoysAllowed && isGirlsAllowed) {
      setPersonDetailsData(personDetails);
    } else {
      if (isBoysAllowed) {
        setPersonDetailsData(onlyBoysAllowed);
      } else if (isGirlsAllowed) {
        setPersonDetailsData(onlyGirlsAllowed);
      } else {
        setPersonDetailsData([]);
        
      }
    }
    setIsLoading(false);
  }, [isGirlsAllowed, isBoysAllowed]);

  return (
    <div>
      {personDetailsData.length > 0 &&
        personDetailsData.map((currentIteration) => {
          return (
            <PersonComponent
              firstName={currentIteration.firstName}
              lastName={currentIteration.lastName}
              age={currentIteration.age}
              hometown={currentIteration.hometown}
              key={currentIteration.id}
            />
          );
        })}
      {personDetailsData.length == 0 && <div>No one is allowed</div>}
      <div>
        <button
          style={{ margin: "1rem" }}
          onClick={() => setIsGirlsAllowed(false)}
          disabled={!isGirlsAllowed}
        >
          Remove Girls
        </button>
        <button
          style={{ margin: "1rem" }}
          onClick={() => setIsBoysAllowed(false)}
          disabled={!isBoysAllowed}
        >
          Remove Boys
        </button>
      </div>
      <div>
        <button
          style={{ margin: "1rem" }}
          onClick={() => setIsGirlsAllowed(true)}
          disabled={isGirlsAllowed}
        >
          Add Girls
        </button>
        <button
          style={{ margin: "1rem" }}
          onClick={() => setIsBoysAllowed(true)}
          disabled={isBoysAllowed}
        >
          Add Boys
        </button>
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
}

export default UseEffectImplementation001;
