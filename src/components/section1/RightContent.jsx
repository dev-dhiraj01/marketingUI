import React from 'react'
import RightCard from './RightCard';


const RightContent = (props) => {
  return (
    <div id='right' className="h-full flex overflow-auto rounded-4xl flex-nowrap gap-10 w-3/4 p-6">
       {
        props.users.map(function(elem,idx){
          return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
        })
       }

    </div>
  );
}

export default RightContent