import * as Yup from 'yup'

const qnameCharFmt = '^[A-Za-z]([-A-Za-z0-9]*[A-Za-z0-9])?$'
const qImageTagFmt = '^[a-zA-Z0-9][-a-zA-Z0-9._*]*$'
const qFluxImageTagFmt = '^(glob|regex|semver):[a-zA-Z0-9][-a-zA-Z0-9._*]*$'
const qurlFmt = '^(https?://)?(www.)?[a-zA-Z0-9]+([-a-zA-Z0-9.]{1,254}[A-Za-z0-9])?.[a-zA-Z0-9()]{1,6}([/][-a-zA-Z0-9_]+)*[/]?'

export const validationSchema = Yup.object({
  name:
    Yup.string()
      .max(63, 'Max length: 63 characters')
      .required('Required field')
      .matches(qnameCharFmt, 'Value must match RegEx: ' + qnameCharFmt),
  namespace:
    Yup.string()
      .max(63, 'Max length: 63 characters')
      .required('Required field')
      .matches(qnameCharFmt, 'Value must match RegEx: ' + qnameCharFmt),
  billingproject:
    Yup.string()
      .max(63, 'Max length: 63 characters')
      .required('Required field')
      .matches(qnameCharFmt, 'Value must match RegEx: ' + qnameCharFmt),
  flux_image_tag_pattern:
    Yup.string()
      .max(128, 'Max length: 128 characters')
      .required('Required field')
      .matches(qFluxImageTagFmt, 'Value must match RegEx: ' + qFluxImageTagFmt),
  image_repository:
    Yup.string()
      .matches(qurlFmt, 'Value must match RegEx' + qurlFmt),
  image_tag:
    Yup.string()
      .max(128, 'Max length: 128 characters')
      .matches(qImageTagFmt, 'Value must match RegEx: ' + qImageTagFmt)
      .required('Required field')
})
