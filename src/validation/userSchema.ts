import * as Yup from 'yup';

export const userSchema= Yup.object().shape({
    firstName:Yup.string()
        .required('First name is required')
        .min(4, 'First name must be at least 4 characters'),
    lastName:Yup.string()
        .required('Last name is required')
        .min(4, 'last name must be at least 4 characters'),
    address:Yup.string()
        .required('Address is required')
        .min(4, 'Address must be at least 4 characters'),
    phone:Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone must be 10 digits')
        .required('Phone number is required'),
});


export type UseFormValues= {
    firstName: string;
    lastName: string;
    address: string;
    phone: string;
}