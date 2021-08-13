import yaml from 'js-yaml'
import { Header, Segment } from 'semantic-ui-react'

function ResponseView ({ data, allOK }) {
  if (allOK) {
    return (
      <Segment>
        <Header as='h2'>Generated HelmRelease</Header>
        <p>Copy the following HelmRelease to a text file, eg. name.yaml<br />
        This file should be checked in to the platform-dev git repository.</p>
        <div name='response'>
          <pre>{yaml.dump(data, { indent: 2, sortKeys: true })}</pre>
        </div>
      </Segment>
    )
  }
  return (
    <Segment>
      <Header as='h2'>Failed HelmRelease generation</Header>
      <div name='response'>
        <pre>{yaml.dump(data, { indent: 2, sortKeys: true })}</pre>
      </div>
    </Segment>
  )
}

export default ResponseView
