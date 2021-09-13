export const helptextHRForm = {
  name: 'This is the name of the \'HelmRelease\' object',
  namespace: 'The namespace where this will be deployed. Usually the same name as the team name',
  billingproject: 'This is used to be able to see the cloud cost for a team. It is important to set this consistently for all team apps',
  apptype: 'The type of application to set up. We currently support \'frontend\' and \'backend\'. We set up things automatically based on what you choose here, so remember to use the correct type',
  cluster: 'The Kubernetes cluster this application will be deployed to',
  containerrepo: 'Where the Docker image is located. Usually \'eu.gcr.io/prod-bip/ssb/<name>\' for SSB applications',
  tagpattern: 'The pattern of the tag used to find what images to deploy automatically. The filter can either be a glob, semver or regex pattern. \'glob:master-*\' is a common pattern used to deploy all new images on the master branch',
  imagetag: 'The tag of the Docker image that is to be deployed',
  exposed: 'Enale this will expose the application as \'<name>.<cluster>.<domain>\'',
  metrics: 'Enable this to let Prometheus collect metrics from the application\'s \'/metrics\' endpoint'
}
