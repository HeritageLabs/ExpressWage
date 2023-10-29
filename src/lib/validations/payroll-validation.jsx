import * as yup from 'yup';

export const createPayrollSchema = yup.object({
    payrollName: yup.string().min(3).required(),
});