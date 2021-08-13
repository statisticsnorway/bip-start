import React from 'react'
import { Button, Label, Grid, Segment, Input, SegmentGroup, Header, Popup, Icon } from 'semantic-ui-react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import useAxios from 'axios-hooks'
import ResponseView from './ResponseView'
import { validationSchema } from './validationschema'
import { helptextHRForm } from './helptext'

const HRForm = () => {
  const [{ data, loading, error }, callGenerator] = useAxios({
    method: 'post',
    url: window.__ENV.REACT_APP_BE_GENERATE,
    timeout: 2500
  }, {
    manual: true
  })

  return (
    <div id='hrform'>
      <Header as='h2'>Create HelmRelease</Header>
      <Formik
        initialValues={{
          name: 'HelmReleasename',
          namespace: 'Teamname',
          billingproject: 'Sirius',
          appType: 'frontend',
          cluster: 'prod-bip-app',
          image_repository: 'https://eu.gcr.io/prod-bip/ssb/',
          flux_image_tag_pattern: 'glob:master-*',
          image_tag: 'Initial image tag',
          exposed: false,
          health_probes: true,
          authentication: true,
          metrics: true
        }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log('Data in form: ', values)
          callGenerator(({ data: values }))
          console.log('Response data: ', { data })
        }}
      >

        {({ handleChange, touched, errors, values }) => (
          <Form>
            <Grid stackable columns={2}>
              <Grid.Column>
                <ErrorMessage name='name'>
                  {value => <Label basic color='red' pointing='below'>{value}</Label>}
                </ErrorMessage>
                <Segment>

                  <Input
                    name='name'
                    label={
                      <Label>Name
                        <Popup
                          trigger={<Icon name='info' color='green' size='small' circular />}
                          content={helptextHRForm.name}
                          position='top left'
                        />
                      </Label>
}
                    placeholder={`${values.name}`}
                    onChange={handleChange}
                    error={errors.name && touched.name
                      ? (<p class='error'>{errors.name}</p>)
                      : null}
                  />
                </Segment>
                <ErrorMessage name='namespace'>
                  {value => <Label basic color='red' pointing='below'>{value}</Label>}
                </ErrorMessage>
                <Segment>
                  <Input
                    name='namespace'
                    label={
                      <Label>Namespace
                        <Popup
                          trigger={<Icon name='info' color='green' size='small' circular />}
                          content={helptextHRForm.namespace}
                          position='top left'
                        />
                      </Label>
}
                    placeholder={`${values.namespace}`}
                    onChange={handleChange}
                    error={errors.namespace && touched.namespace
                      ? (<p class='error'>{errors.namespace}</p>)
                      : null}
                  />
                </Segment>
                <ErrorMessage name='billingproject'>
                  {value => <Label basic color='red' pointing='below'>{value}</Label>}
                </ErrorMessage>
                <Segment>
                  <Input
                    name='billingproject'
                    label='Billing project'
                    placeholder={`${values.billingproject}`}
                    onChange={handleChange}
                    error={errors.billingproject && touched.billingproject
                      ? (<p class='error'>{errors.billingproject}</p>)
                      : null}
                  />
                </Segment>
                <SegmentGroup horizontal>
                  <Segment>
                    <Label attached='top'>Application Type<Popup
                      trigger={<Icon name='info' color='green' size='small' circular />}
                      content={helptextHRForm.apptype}
                      position='top left'
                                                          />
                    </Label>
                    <Field type='radio' name='appType' value='frontend' />
                    <Label>Frontend</Label>
                    <Field type='radio' name='appType' value='backend' />
                    <Label>Backend</Label>
                  </Segment>
                  <Segment>
                    <Label attached='top'>Cluster environment</Label>
                    <Field type='radio' name='cluster' value='prod-bip-app' />
                    <Label>Production</Label>
                    <Field type='radio' name='cluster' value='staging-bip-ap' />
                    <Label>Staging</Label>
                  </Segment>
                </SegmentGroup>
              </Grid.Column>
              <Grid.Column>
                <ErrorMessage name='image_repository'>
                  {value => <Label basic color='red' pointing='below'>{value}</Label>}
                </ErrorMessage>
                <Segment>
                  <Input
                    name='image_repository'
                    label='Container repository'
                    type='text'
                    placeholder={`${values.image_repository}${values.releaseName}`}
                    onChange={handleChange}
                    error={errors.image_repository && touched.image_repository
                      ? (<p class='error'>{errors.image_repository}</p>)
                      : null}
                  />
                </Segment>
                <ErrorMessage name='flux_image_tag_pattern'>
                  {value => <Label basic color='red' pointing='below'>{value}</Label>}
                </ErrorMessage>
                <Segment>
                  <Input
                    name='flux_image_tag_pattern'
                    label='Tag pattern'
                    placeholder={`${values.flux_image_tag_pattern}`}
                    onChange={handleChange}
                    error={errors.flux_image_tag_pattern && touched.flux_image_tag_pattern
                      ? (<p class='error'>{errors.flux_image_tag_pattern}</p>)
                      : null}
                  />
                </Segment>
                <ErrorMessage name='image_tag'>
                  {value => <Label basic color='red' pointing='below'>{value}</Label>}
                </ErrorMessage>
                <Segment>
                  <Input
                    name='image_tag'
                    type='text'
                    label='Image tag'
                    placeholder={`${values.image_tag}`}
                    onChange={handleChange}
                    error={errors.image_tag && touched.image_tag
                      ? (<p class='error'>{errors.image_tag}</p>)
                      : null}
                  />
                </Segment>
                <SegmentGroup horizontal>
                  <Segment textAlign='center'>
                    <Label attached='top'>Exposed<Popup
                      trigger={<Icon name='info' color='green' size='small' circular />}
                      content={helptextHRForm.exposed}
                      position='top left'
                                                 />
                    </Label>
                    <Field type='checkbox' name='exposed' />
                  </Segment>
                  <Segment textAlign='center'>
                    <Label attached='top'>Authenticated</Label>
                    <Field type='checkbox' name='authentication' />
                  </Segment>
                  <Segment textAlign='center'>
                    <Label attached='top'>Health probes</Label>
                    <Field type='checkbox' name='health_probes' />
                  </Segment>
                  <Segment textAlign='center'>
                    <Label attached='top'>Collect metrics</Label>
                    <Field type='checkbox' name='metrics' />
                  </Segment>
                </SegmentGroup>
              </Grid.Column>
              <Grid.Column width={16}>
                <Button fluid positive type='submit'>Submit</Button>
              </Grid.Column>
            </Grid>
          </Form>
        )}
      </Formik>
      {data && !loading && !error && <ResponseView data={data} allOK={true} />}
      {error && <ResponseView data={error.message} allOK={false} />}
    </div>
  )
}

export default HRForm
