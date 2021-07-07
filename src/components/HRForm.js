import Form from '@rjsf/core'
// TODO: Use semantic-ui again
// import Form from '@rjsf/semantic-ui'
import useAxios from 'axios-hooks'
import { useState } from 'react'
import ResponseView from './ResponseView'

const { REACT_APP_BACKEND_URL } = process.env

function HRForm () {
  const schema = '{\n  "title": "HRValues",\n  "type": "object",\n  "properties": {\n    "name": {\n      "title": "Name",\n      "minLength": 1,\n      "maxLength": 63,\n      "pattern": "^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$",\n      "type": "string"\n    },\n    "namespace": {\n      "title": "Namespace",\n      "minLength": 1,\n      "maxLength": 63,\n      "pattern": "^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$",\n      "type": "string"\n    },\n    "flux_image_tag_pattern": {\n      "title": "Flux Image Tag Pattern",\n      "default": "glob:main-*",\n      "minLength": 1,\n      "maxLength": 128,\n      "pattern": "^(glob|regex|semver):[a-zA-Z0-9][-a-zA-Z0-9._*]*",\n      "type": "string"\n    },\n    "cluster": {\n      "title": "Cluster",\n      "minLength": 1,\n      "maxLength": 63,\n      "pattern": "^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$",\n      "type": "string"\n    },\n    "billingproject": {\n      "title": "Billingproject",\n      "minLength": 1,\n      "maxLength": 63,\n      "pattern": "^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$",\n      "type": "string"\n    },\n    "image_repository": {\n      "title": "Image Repository",\n      "pattern": "(https?:\\\\/\\\\/)?(www\\\\.)?[a-zA-Z0-9]+([-a-zA-Z0-9.]{1,254}[A-Za-z0-9])?\\\\.[a-zA-Z0-9()]{1,6}([\\\\/][-a-zA-Z0-9_]+)*[\\\\/]?",\n      "type": "string"\n    },\n    "image_tag": {\n      "title": "Image Tag",\n      "minLength": 1,\n      "maxLength": 128,\n      "pattern": "[a-zA-Z0-9][-a-zA-Z0-9._*]*",\n      "type": "string"\n    },\n    "apptype": {\n      "title": "Apptype",\n      "default": "backend",\n      "pattern": "^(frontend|backend)$",\n      "type": "string"\n    },\n    "exposed": {\n      "title": "Exposed",\n      "default": false,\n      "type": "boolean"\n    },\n    "authentication": {\n      "title": "Authentication",\n      "default": true,\n      "type": "boolean"\n    },\n    "port": {\n      "title": "Port",\n      "default": 8080,\n      "minimum": 1024,\n      "maximum": 65535,\n      "type": "integer"\n    },\n    "health_probes": {\n      "title": "Health Probes",\n      "default": true,\n      "type": "boolean"\n    },\n    "metrics": {\n      "title": "Metrics",\n      "default": true,\n      "type": "boolean"\n    }\n  },\n  "required": [\n    "name",\n    "namespace",\n    "cluster",\n    "billingproject",\n    "image_repository",\n    "image_tag"\n  ],\n  "example": {\n    "name": "myapp",\n    "namespace": "stratus",\n    "flux_image_tag_pattern": "glob:main-*",\n    "cluster": "staging-bip-app",\n    "billingproject": "ssb-stratus",\n    "image_repository": "eu.gcr.io/prod-bip/ssb/stratus/myapp",\n    "image_tag": "master-imagescan-f5130c78fbcc54fc038d7e0e28cde35da8e791f6",\n    "port": 8080,\n    "apptype": "backend",\n    "exposed": false,\n    "authentication": true,\n    "health_probes": true,\n    "metrics": true\n  }\n}'

  const uiSchema = {
    name: {
      'ui:help': 'The name of the application.'
    },
    namespace: {
      'ui:help': 'The namespace where the application will be running. You should probably use the team name'
    },
    flux_image_tag_pattern: {
      'ui:help': 'Pattern used to decide which container images to automatically deploy. (Based on image tag)'
    },
    cluster: {
      'ui:help': 'The cluster where the application should run; staging-bip-app or prod-bip-app'
    },
    billingproject: {
      'ui:help': 'Describes cost allocation. If unsure, ask your team manager/product owner'
    },
    image_repository: {
      'ui:help': 'The container image repository containing the applicationcontainer image. (Where your pipeline pushes images to.) Usually https://eu.gcr.io/ssb/<team>/<app>'
    },
    image_tag: {
      'ui:help': 'The first deployment of the application will use the container image with this tag'
    },
    apptype: {
      'ui:help': 'What kind of application; frontend or backend. Frontend enables user authentication. Backend enables service-to-service authentication'
    },
    exposed: {
      'ui:help': 'Whether it should be possible to access the application from public Internet'
    },
    authentication: {
      'ui:help': 'If selected, service-to-service authentication is enabled and required. Relevant only for backends'
    },
    port: {
      'ui:help': 'The TCP port exposed from the container. Use the same port as defined in your Dockerfile'
    },
    health_probes: {
      'ui:help': 'Whether the application exposes health info (at endpoints /health/alive and /health/ready and the same port as the application port)'
    },
    metrics: {
      'ui:help': 'Whether the application exposes metrics (at endpoint /metrics and the same port as the application port)'
    }
  }

  const [inputData, setInputData] = useState('noe random: "Tull"')

  const [{ data, loading, error }, callGenerator] = (inputParam) => {
    console.log('Hei', inputParam)
  }

  const onSubmit = ({ formData }, e) => {
    console.log('##### Data submitted: ', formData)
    // setInputData(formData)
    console.log('Data in state: ', inputData)
    callGenerator(formData)
  }

  return (
    <div>
      <Form
        schema={JSON.parse(schema)}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        onError={onError}
      />
      {data && !loading && !error && <ResponseView data={data} />}
      {error && <ResponseView data={error.message} />}
    </div>
  )
}

function onError (errors) {
  console.log('There are ', errors.length, ' errors to fix')
  console.log(errors)
}

export default HRForm
