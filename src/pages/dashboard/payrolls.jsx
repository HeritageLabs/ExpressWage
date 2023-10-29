import { useState } from "react";
import DashboardLayout from "../../components/layouts/dashboard-layout";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "../../components/ui/dialog";
import { payrolls } from "../../config/dashboard";
import CreatePayrollForm from "../../components/forms/create-payroll";

const Payrolls = () => {
    const [open, setOpen] = useState(false)

    return (
        <DashboardLayout>
            <div className="w-full flex gap-16 flex-wrap px-6 py-8">
                {payrolls({ setOpen }).map((payroll) => (
                    <div className="border bg-[#FAFAFA] rounded-lg w-[29%] h-fit py-28 justify-center flex cursor-pointer hover:bg-white" key={payroll.name} onClick={payroll.onclick}>
                        <div className="mx-auto w-full text-center">
                            <div className="w-full flex justify-center">{payroll.icon}</div>
                            <p className="mt-1">{payroll.name}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Dialog  onOpenChange={setOpen} open={open}>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add a new Payroll Type</DialogTitle>
          <DialogDescription className="font-extralight">
            Create a new payroll type here.
          </DialogDescription>
        </DialogHeader>
                <CreatePayrollForm />
        <DialogFooter>
        </DialogFooter>
      </DialogContent>
    </Dialog>
        </DashboardLayout>
    )
};

export default Payrolls;
