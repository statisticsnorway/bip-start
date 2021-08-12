export const helptextHRForm = {
  name: 'This is the name of the \'HelmRelease\' object. It is a good practice that this matches the name of the Helm release itself (i.e. \'spec.releaseName\')',
  namespace: 'Often the team name',
  apptype: 'The type of application to set up. We currently support \'frontend\' and \'backend\'. We set up things automatically based on what you choose here, so remember to use the correct type. A \'backend\' application will',
  exposed: 'This will expose the application as \'<name>.<cluster>.<domain>\'. In this case, the app will be exposed as \'podinfo.staging-bip-app.ssb.no\'. To be able to expose an app, the cluster needs to run Istio (which is normally the default). Default value is \'false\''
}
