import { useState } from "react";
import DashboardLayout from "../../components/layouts/dashboard-layout";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../../components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../../components/ui/alert-dialog";
import { Button } from "../../components/ui/button";
import DataTable from "../../components/data-table";
import { allPayrollColumns, allPayrolls } from "../../config/dashboard";
import CreatePayrolleeForm from "../../components/forms/create-payrollee";

const FamilyPayrollee = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [open, setOpen] = useState(false);
    return (
        <DashboardLayout>
        <div className="flex justify-end my-2">

        <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-background text-primary font-light border border-slate-200 hover:bg-slate-50 mr-4">Pay all payrollee</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription className="font-light">
            This action cannot be undone. This will credit all Family and Friends Payrollee wallet
            account and update your account balance on the servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>


                    <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button className="bg-primary text-white hover:bg-primary">Add payrollee</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                <DialogTitle>Add a new Payrollee</DialogTitle>
                <DialogDescription className="font-extralight">
                    Create a new payroll user here with their valid credentials.
                </DialogDescription>
                </DialogHeader>
                <div className="max-h-[80vh] overflow-scroll px-2">
                <CreatePayrolleeForm />
                </div>

            </DialogContent>
            </Dialog>
                    
        </div>
                    <DataTable
          columns={allPayrollColumns}
          data={allPayrolls.slice(0, 4)}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={1}
          dataLength={1}
        />
    </DashboardLayout>
    )
};

export default FamilyPayrollee