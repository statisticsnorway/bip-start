function ResponseView ({ data }) {
  return (
    <div>
      <h1>Resultat</h1>
      <p name='response'>
        {JSON.stringify(data)}
      </p>
    </div>
  )
}

export default ResponseView
