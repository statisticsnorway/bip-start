import yaml from 'js-yaml'

function ResponseView ({ data }) {
  return (
    <div>
      <h2>Resultat</h2>
      <div name='response'>
        <pre>{yaml.dump(data, { indent: 2, sortKeys: true })}</pre>
      </div>
    </div>
  )
}

export default ResponseView
