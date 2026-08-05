function List(props) {
//   fruits.sort((a,b)=>a.calories-b.calories)     //Numeric sort
//   fruits.sort((a,b)=>a.name.localeCompare(b.name))      //Alphabetical sort
//   const lowCal=fruits.filter((fruits)=>fruits.calories<100) // filter low cal
//   const highCal=fruits.filter((fruits)=>fruits.calories>100)     //filter high cal 
const fruits=props.items
const category=props.category
  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>{fruit.name} : &nbsp; <b>{fruit.calories}</b>gm/serving</li>
  ));
  return (
  <><h3>&nbsp;{category}</h3><ol>{listItems}</ol>
  </>
  );
}

export default List;
