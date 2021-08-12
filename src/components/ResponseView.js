import yaml from 'js-yaml'
import {Header, Segment} from 'semantic-ui-react'

function ResponseView ({ data }) {
  return (
    <Segment>
      <Header as='h2'>Resultat</Header>
      <div name='response'>
        <pre>{yaml.dump(data, { indent: 2, sortKeys: true })}</pre>
      </div>
    </Segment>
  )
}

export default ResponseView
