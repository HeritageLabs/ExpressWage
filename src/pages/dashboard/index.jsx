import { useState } from "react";
import DataTable from "../../components/data-table";
import DashboardLayout from "../../components/layouts/dashboard-layout";
import { allPayrollColumns, allPayrolls } from "../../config/dashboard";

const DashboardHome = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <DashboardLayout>
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

export default DashboardHome;