import React from 'react'

import RightCardContent from './RightCardContent';

const RightCard = (props) => {
  return (
    <div className="h-full w-50 overflow-hidden shrink-0 relative rounded-3xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt="Image"
      />
    <RightCardContent id={props.id} tag={props.tag} />
    </div>
  );
}

export default RightCard