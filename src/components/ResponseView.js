import yaml from 'js-yaml'

function ResponseView ({ data }) {
  return (
    <div>
      <h2>Resultat</h2>
      <p name='response'>
        <pre>{yaml.dump(data, {indent: 2, sortKeys: true})}</pre>
      </p>
    </div>
  )
}

export default ResponseView
