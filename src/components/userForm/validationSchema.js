import * as yup from 'yup';

const schema =  yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup
    .string()
    .email(),
    
    
  email: yup.string().email()
});

export default schema;