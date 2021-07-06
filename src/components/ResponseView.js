function ResponseView ({ data }) {
  return (
    <p name='response'>
      {JSON.stringify(data)}
    </p>
  )
}

export default ResponseView
