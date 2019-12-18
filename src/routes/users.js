import React from 'react';
const list = [
  {
    firstname: 'Robin',
    lastname: 'Wieruch',
  },
  {
    firstname: 'Dave',
    lastname: 'Davidds',
  },
];
const ComplexList = () => (
  <ul>
    {list.map(item => (
      <li key={item.id}>
        <div>{item.firstname}</div>
        <div>{item.lastname}</div>
      </li>
    ))}
  </ul>
);
export default ComplexList;