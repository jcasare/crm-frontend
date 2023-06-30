import * as Yup from 'yup'

export const validationSchema = Yup.object({
  subject: Yup.string()
    .required('Subject is required')
    .min(3, 'Subject must be at least 3 characters long'),
  issueDate: Yup.date().required('Issue date is required '),
  details: Yup.string()
    .required('Details are required')
    .min(3, 'Details must be at least 3 characters long'),
})
