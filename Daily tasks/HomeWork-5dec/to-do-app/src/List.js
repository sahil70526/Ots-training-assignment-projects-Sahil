export default function List({arr,details}) {
  return (
    <div style={{margin:'10px'}}>
      <h2>Food Names.... </h2>
      <ul>
        {
          arr.map((i) => <li key={i}
          onClick={()=>{details(i)}}>{i.foodName}</li>)
        }
      </ul>
    </div>
  )
}
