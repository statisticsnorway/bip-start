function ResponseView ({ data }) {
  return (
    <div>
      <h2>Resultat</h2>
      <p name='response'>
        {JSON.stringify(data)}
      </p>
    </div>
  )
}

export default ResponseView
