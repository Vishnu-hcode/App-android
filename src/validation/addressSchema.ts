import * as Yup from 'yup';

export const addressSchema = Yup.object().shape({
  flat: Yup.string().required("Flat/House No. is required").min(4, 'Flat name must be at least 4 characters'),
  area: Yup.string().required("Area/Street is required").min(4, 'area name must be at least 4 characters'),
  landmark: Yup.string().required().min(4, 'landmark must be at least 4 characters'),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required").min(4, 'city name must be at least 4 characters'),
  pincode: Yup
    .string()
    .required("Pincode is required")
    .matches(/^\d{6}$/, "Enter a valid 6-digit Pincode"),
});

export type AddressFormValues = {
  flat: string;
  area: string;
  landmark: string;
  state: string;
  city: string;
  pincode: string;
};