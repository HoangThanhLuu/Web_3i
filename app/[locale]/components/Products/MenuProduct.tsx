import React from 'react'

const MenuProduct = ({data}) => {
  return (
    <div className='flex font-normal text-lg justify-center items-center gap-3'>
      {data?.map((d:{name:string},i:number)=>(
        <div key={i}>{d.name}</div>
      ))}
    </div>
  )
}

export default MenuProduct