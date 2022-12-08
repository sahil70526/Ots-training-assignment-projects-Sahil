export default function List({ arr, details }) {
  return (
    <div
      style={{
        marginTop: "10px",
        border: "0.5px solid #F8FFDB",
        width: "400px",
        height: "400px",
        fontSize: "larger",
        borderRadius: "10px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Food Names.... </h2>
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
