import { DASHBOARD_URL } from "./paths";

export const dashboardConfig = {
    sidebarNav: [
      {
        title: 'My Payrolls',
        url: DASHBOARD_URL,
      },
      {
        title: 'Business Payroll',
        url: "#",
      },
      {
        title: 'Family & Friends',
        url: "#",
      },
  
      {
        title: 'Employees Payroll',
        url: "#",
      },
    ],
  };

  export const allPayrollColumns = [
    {
      accessorKey: 'firstName',
      header: 'First Name',
    },
    {
      accessorKey: 'lastName',
      header: 'Last Name',
    },
    {
      accessorKey: 'walletAddress',
      header: 'Wallet Address',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      accessorKey: 'deductions',
      header: 'Deductions',
    },
    {
      accessorKey: 'interval',
      header: 'Interval',
      // cell: ({ row }) => row.getValue('modifiedBy') || '-',
    },
  ]