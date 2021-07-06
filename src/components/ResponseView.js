import React from 'react'

function ResponseView ({ data }) {
  return (
    <p>
      {JSON.stringify(data)}
    </p>
  )
}

export default ResponseView
