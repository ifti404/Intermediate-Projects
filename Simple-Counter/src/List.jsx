function List(props) {
  // List of Datas
  const category = props.category;
  const itemList = props.items;

  // Sorting algorithm
  itemList.sort((a, b) => a.calories - b.calories);

  // puts all foods under list items
  const listAllItems = itemList.map((item, index) => (
    <li key={index}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h2>{category}</h2>
      <ol>{listAllItems}</ol>
    </>
  );
}

export default List;
