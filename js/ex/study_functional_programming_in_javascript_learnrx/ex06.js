var listsOfItems = [
  {
    name: "list01",
    items: [
      {
        "id": 1,
        "title": "a",
        "rating": 4.0,
      },
      {
        "id": 2,
        "title": "b",
        "rating": 5.0,
      },
    ]
  },
  {
    name: "list02",
    items: [
      {
        "id": 5,
        "title": "e",
        "rating": 3.0,
      },
      {
        "id": 7,
        "title": "f",
        "rating": 5.0,
      },
    ]
  }
];
var result = [];
listsOfItems.forEach( list => {
  list.items.forEach( e => 
    result.push(e.id) 
  );
});
console.log(result);
