export default function List({ arr, details }) {
  return (
    <div
      style={{
        marginTop: "10px",
        border: "0.5px solid #F2E5E5",
        height: "250px",
        fontSize: "larger",
        borderRadius: "10px",
        color:'green'
      }}
    >
      <h2 style={{ textAlign: "center" }}>Food Names.... <span></span></h2>
      <ul>
        {arr.map((i) => (
          <li
            key={i}
            onClick={() => {
              details(i);
            }}
          >
            {i.foodName}
          </li>
        ))}
      </ul>
    </div>
  );
}
