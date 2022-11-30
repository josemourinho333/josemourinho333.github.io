import React from 'react';

const WorkItem = ({children, year, months, position, company}) => {
  return (
    <div className="flex w-full gap-5 my-5">
      {children}
    </div>
  )
}

export default WorkItem;