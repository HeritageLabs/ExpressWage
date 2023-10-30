import { useState } from "react";
import DashboardLayout from "../../components/layouts/dashboard-layout";
import DataTable from "../../components/data-table";
import { transactionColumn, transactions } from "../../config/dashboard";

const TransactionsPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    return (
        <DashboardLayout>
                                <DataTable
          columns={transactionColumn}
          data={transactions}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={1}
          dataLength={1}
        />
        </DashboardLayout>
    )
};

export default TransactionsPage;
