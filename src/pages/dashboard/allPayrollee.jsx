import { useState } from "react";
import DataTable from "../../components/data-table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "../../components/ui/dialog"
import DashboardLayout from "../../components/layouts/dashboard-layout";
import { allPayrollColumns, allPayrolls } from "../../config/dashboard";
import { Button } from "../../components/ui/button";
import CreatePayrolleeForm from "../../components/forms/create-payrollee";

const AllPayrollee = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <DashboardLayout>
            <div className="flex justify-end">

            <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary text-white my-2 hover:bg-primary">Add Payrollee</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>Add a new Payrollee</DialogTitle>
          <DialogDescription className="font-extralight">
            Create a new payroll user here with their valid credentials.
          </DialogDescription>
        </DialogHeader>
         <CreatePayrolleeForm />
        <DialogFooter>
          {/* <Button type="submit">Save changes</Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
               
            </div>
                        <DataTable
              columns={allPayrollColumns}
              data={allPayrolls}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pageSize={1}
              dataLength={1}
            />
        </DashboardLayout>
    )
};

export default AllPayrollee;