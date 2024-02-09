import Assignrole from "./Assignrole";

const AssignroleList = () => {
  const listOfPeople = [
    "Mani Poorna",
    "GovindRaj",
    "Ashuthosh",
    "Mani Poorna",
    "GovindRaj",
    "Ashuthosh"
  ];
  return (
    <div className="assign-list">
      {
        listOfPeople && listOfPeople.map((person, index) => (
          <Assignrole key={ index} person={ person}  />
        ))
      }
    </div>
  )
}

export default AssignroleList