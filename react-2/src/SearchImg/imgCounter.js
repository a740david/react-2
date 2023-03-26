import React from 'react';

function SearchCount(props) {

  return (
    <div>
      <p>Total searches:  {props.searches}</p>
      <p>Total images:  {props.imageSearchCount}</p>
    </div>
  );
}

export default SearchCount;