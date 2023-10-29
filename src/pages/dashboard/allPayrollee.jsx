import { useState } from "react";
import DataTable from "../../components/data-table";
import DashboardLayout from "../../components/layouts/dashboard-layout";
import { allPayrollColumns, allPayrolls } from "../../config/dashboard";
import { Button } from "../../components/ui/button";

const AllPayrollee = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <DashboardLayout>
            <div className="flex justify-end">
                <Button className="bg-primary text-white my-2">Add Payrollee</Button>
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