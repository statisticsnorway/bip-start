import Form from '@rjsf/core'
//import Form from '@rjsf/semantic-ui'

function HRForm(){
  
  const schema="{\n  \"title\": \"HRValues\",\n  \"type\": \"object\",\n  \"properties\": {\n    \"name\": {\n      \"title\": \"Name\",\n      \"minLength\": 1,\n      \"maxLength\": 63,\n      \"pattern\": \"^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$\",\n      \"type\": \"string\"\n    },\n    \"namespace\": {\n      \"title\": \"Namespace\",\n      \"minLength\": 1,\n      \"maxLength\": 63,\n      \"pattern\": \"^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$\",\n      \"type\": \"string\"\n    },\n    \"flux_image_tag_pattern\": {\n      \"title\": \"Flux Image Tag Pattern\",\n      \"default\": \"glob:main-*\",\n      \"minLength\": 1,\n      \"maxLength\": 128,\n      \"pattern\": \"^(glob|regex|semver):[a-zA-Z0-9][-a-zA-Z0-9._*]*\",\n      \"type\": \"string\"\n    },\n    \"cluster\": {\n      \"title\": \"Cluster\",\n      \"minLength\": 1,\n      \"maxLength\": 63,\n      \"pattern\": \"^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$\",\n      \"type\": \"string\"\n    },\n    \"billingproject\": {\n      \"title\": \"Billingproject\",\n      \"minLength\": 1,\n      \"maxLength\": 63,\n      \"pattern\": \"^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$\",\n      \"type\": \"string\"\n    },\n    \"image_repository\": {\n      \"title\": \"Image Repository\",\n      \"pattern\": \"(https?:\\\\/\\\\/)?(www\\\\.)?[a-zA-Z0-9]+([-a-zA-Z0-9.]{1,254}[A-Za-z0-9])?\\\\.[a-zA-Z0-9()]{1,6}([\\\\/][-a-zA-Z0-9_]+)*[\\\\/]?\",\n      \"type\": \"string\"\n    },\n    \"image_tag\": {\n      \"title\": \"Image Tag\",\n      \"minLength\": 1,\n      \"maxLength\": 128,\n      \"pattern\": \"[a-zA-Z0-9][-a-zA-Z0-9._*]*\",\n      \"type\": \"string\"\n    },\n    \"apptype\": {\n      \"title\": \"Apptype\",\n      \"default\": \"backend\",\n      \"pattern\": \"^(frontend|backend)$\",\n      \"type\": \"string\"\n    },\n    \"exposed\": {\n      \"title\": \"Exposed\",\n      \"default\": false,\n      \"type\": \"boolean\"\n    },\n    \"authentication\": {\n      \"title\": \"Authentication\",\n      \"default\": true,\n      \"type\": \"boolean\"\n    },\n    \"port\": {\n      \"title\": \"Port\",\n      \"default\": 8080,\n      \"minimum\": 1024,\n      \"maximum\": 65535,\n      \"type\": \"integer\"\n    },\n    \"health_probes\": {\n      \"title\": \"Health Probes\",\n      \"default\": true,\n      \"type\": \"boolean\"\n    },\n    \"metrics\": {\n      \"title\": \"Metrics\",\n      \"default\": true,\n      \"type\": \"boolean\"\n    }\n  },\n  \"required\": [\n    \"name\",\n    \"namespace\",\n    \"cluster\",\n    \"billingproject\",\n    \"image_repository\",\n    \"image_tag\"\n  ],\n  \"example\": {\n    \"name\": \"myapp\",\n    \"namespace\": \"stratus\",\n    \"flux_image_tag_pattern\": \"glob:main-*\",\n    \"cluster\": \"staging-bip-app\",\n    \"billingproject\": \"ssb-stratus\",\n    \"image_repository\": \"eu.gcr.io/prod-bip/ssb/stratus/myapp\",\n    \"image_tag\": \"master-imagescan-f5130c78fbcc54fc038d7e0e28cde35da8e791f6\",\n    \"port\": 8080,\n    \"apptype\": \"backend\",\n    \"exposed\": false,\n    \"authentication\": true,\n    \"health_probes\": true,\n    \"metrics\": true\n  }\n}"
  
  /*const uiSchema = {
    "ui:options": {
      "semantic" : {
        "errorOptions": {
          "size": "small",
          "pointing": "above",
        }
      }
    }
  }*/
  const uiSchema = {
    namespace: {
      "ui:help": "The namespace where the app will be running. Use the team name!"
    },
    cluster: {
      "ui:help": "Staging or production"
    }
  };

  const log = (type) => console.log.bind(console, type);
  return (
    <Form schema={JSON.parse(schema)}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />)
   
}
export default HRForm
