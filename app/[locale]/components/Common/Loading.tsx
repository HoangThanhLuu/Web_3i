import React from 'react'
import ClipLoader from "react-spinners/ClipLoader"
const Loading = ({ loading }) => {
  return (
    <ClipLoader
      className="z-[20000]"
      color={'gray'}
      loading={loading}
      //  cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loading