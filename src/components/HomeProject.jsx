import React from 'react';

const HomeProject = ({bg, fullWidth}) => {
  return (
    <div className={`text-inherit ${bg} ${fullWidth ? 'basis-full' : 'basis-1/2'} rounded-box`}>HomeProject</div>
  )
}

export default HomeProject;