import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  Form,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createPayrolleeSchema } from "../../lib/validations/payroll-validation";
import { Button } from "../ui/button";
import { useContext } from "react";
import { DashboardContext } from "../../context/dashboard-context";

/**
 * TODO: 
 * 
 * - Add loading state to Create button
 * - Clear state and close dialog after creating payrollee
 * 
 */

const CreatePayrolleeForm = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      walletAddress: "",
      type: "",
      deductions: "",
      salary: "",
    },
    resolver: yupResolver(createPayrolleeSchema),
  });
  const {addPayrollee} = useContext(DashboardContext);

  const onSubmit = async (payrollee) => {
    const res = await addPayrollee(payrollee);
    console.log({res});
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="firstName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Payrollee First Name"
                  invalid={fieldState.invalid}
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Payrollee Last Name"
                  invalid={fieldState.invalid}
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="walletAddress"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">Wallet Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="Payrollee Wallet Address"
                  invalid={fieldState.invalid}
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="type"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">Type</FormLabel>
              <FormControl>
                <Select invalid={fieldState.invalid} {...field} onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Payroll type" className="font-light" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employees">Employees</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="family">Family & Friends</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="salary"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">Payrollee salary (USD)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Payrollee salary"
                  invalid={fieldState.invalid}
                  type="number"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />


<FormField
          control={form.control}
          name="deductions"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">Payrollee Deductions (USD)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Payrollee deductions"
                  invalid={fieldState.invalid}
                  type="number"
                  className="font-light"
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />

        <Button className="w-full h-[48px]">Create Payrollee</Button>
      </form>
    </Form>
  );
};

export default CreatePayrolleeForm;
