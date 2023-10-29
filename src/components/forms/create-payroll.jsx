import { Input } from "../ui/input";
import {
    FormControl,
    FormField,
    FormItem,
    Form,
    FormLabel,
    FormMessage,
  } from "../ui/form"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { createPayrollSchema } from "../../lib/validations/payroll-validation";

const CreatePayrollForm = () => {
    const form = useForm({
        defaultValues: {
            payrollName: '',
        },
        resolver: yupResolver(createPayrollSchema),
      });
    return (
        <Form {...form}>
            <form>
                        <FormField
            control={form.control}
            name="payrollName"
            // eslint-disable-next-line no-unused-vars
            render={({ field }) => (
                <FormItem>
                <FormLabel>Payroll Name</FormLabel>
                <FormControl>
                <Input placeholder="Name of payroll" />
                </FormControl>
                {/* <FormDescription>
                    This is your public display name.
                </FormDescription> */}
                <FormMessage />
                </FormItem>
            )}
            />
                
            </form>
        </Form>
    )
};

export default CreatePayrollForm;
