import React from 'react'
import { Button, Label, Grid, Segment, Input, SegmentGroup } from 'semantic-ui-react'
import { Field, Form, Formik, ErrorMessage } from 'formik'
import useAxios from 'axios-hooks'
import ResponseView from './ResponseView'
import { validationSchema } from './validationschema'

const HRForm = () => {
  const [{ data, loading, isLoading, error }, callGenerator] = useAxios({
    method: 'post',
    url: process.env.REACT_APP_BACKEND_URL,
    timeout: 2500
  })

  return (
    <div>
      <h1>Create HelmRelease</h1>
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
          console.log('Data in state: ', values)
          callGenerator(({ data: values }))
          console.log('Response data: ', data)
        }}
      >

        {({ handleChange, touched, errors, values }) => (
          <Form>
            <Grid columns={2}>
              <Grid.Column>
                <ErrorMessage name='name'>
                  {value => <Label basic color='red' pointing='below'>{value}</Label>}
                </ErrorMessage>
                <Segment>
                  <Input
                    name='name'
                    label='Name'
                    placeholder={`${values.name}`}
                    value={touched.name ? values.name : null}
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
                    label='Namespace'
                    placeholder={`${values.namespace}`}
                    value={touched.namespace ? values.namespace : null}
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
                    value={touched.billingproject ? values.billingproject : null}
                    onChange={handleChange}
                    error={errors.billingproject && touched.billingproject
                      ? (<p class='error'>{errors.billingproject}</p>)
                      : null}
                  />
                </Segment>
                <SegmentGroup horizontal>
                  <Segment>
                    <Label attached='top left'>Application Type</Label>
                    <div>
                      <Field type='radio' name='appType' value='frontend' />
                      <label class='ui label'>Frontend</label>
                      <Field type='radio' name='appType' value='backend' />
                      <label class='ui label'>Backend</label>
                    </div>
                  </Segment>
                  <Segment>
                    <Label attached='top left'>Cluster environment</Label>
                    <div>
                      <Field type='radio' name='cluster' value='prod-bip-app' />
                      <label class='ui label'>Production</label>
                      <Field type='radio' name='cluster' value='staging-bip-ap' />
                      <label class='ui label'>Staging</label>
                    </div>
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
                    value={touched.image_repository ? values.image_repository : null}
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
                    value={touched.flux_image_tag_pattern ? values.flux_image_tag_pattern : null}
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
                    value={touched.image_tag ? values.image_tag : null}
                    onChange={handleChange}
                    error={errors.image_tag && touched.image_tag
                      ? (<p class='error'>{errors.image_tag}</p>)
                      : null}
                  />
                </Segment>-
                <SegmentGroup horizontal>
                  <Segment>
                    <Label attached='top left'>Exposed</Label>
                    <Field type='checkbox' name='exposed' />
                  </Segment>
                  <Segment>
                    <Label attached='top left'>Authenticated</Label>
                    <Field type='checkbox' name='authentication' />
                  </Segment>
                  <Segment>
                    <Label attached='top left'>Health probes</Label>
                    <Field type='checkbox' name='health_probes' />
                  </Segment>
                  <Segment>
                    <Label attached='top left'>Collect metrics</Label>
                    <Field type='checkbox' name='metrics' />
                  </Segment>
                </SegmentGroup>
              </Grid.Column>
              <Grid.Column width={16}>
                <Segment>
                  <Button fluid positive type='submit'>Submit</Button>
                </Segment>
              </Grid.Column>
            </Grid>
          </Form>
        )}
      </Formik>
      {data && !loading && !error && <ResponseView data={data} />}
      {error && <ResponseView data={error.message} />}
    </div>
  )
}

export default HRForm
