import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
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
import { createPayrollSchema } from "../../lib/validations/payroll-validation";
import { Button } from "../ui/button";

const CreatePayrollForm = () => {
  const form = useForm({
    defaultValues: {
      payrollName: "",
      payrollDescription: "",
    },
    resolver: yupResolver(createPayrollSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="payrollName"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">Payroll Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name of payroll"
                  invalid={fieldState.invalid}
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="payrollDescription"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormLabel className="text-black">Payroll Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter payroll desciption"
                  invalid={fieldState.invalid}
                  {...field}
                />
              </FormControl>
              <FormMessage className="font-extralight text-sm" />
            </FormItem>
          )}
        />

        <Button className="w-full h-[48px]">Create Payroll Type</Button>
      </form>
    </Form>
  );
};

export default CreatePayrollForm;
