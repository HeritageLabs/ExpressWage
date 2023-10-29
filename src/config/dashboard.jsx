import { Button } from "../components/ui/button";
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
      cell: ({ row }) => `${row.getValue('walletAddress').substring(0, 12)}...`,
    },
    {
      accessorKey: 'type',
      header: 'Type',
    },
    {
      accessorKey: 'salary',
      header: 'Salary'
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
    {
      accessorKey: 'action',
      header: 'Action',
      cell: () => (
        <Button>Pay user</Button>
      )
    },
  ];

  export const allPayrolls = [
    {
      firstName: 'Temitope',
      lastName: 'Moses',
      walletAddress: 'xv023hjslsowndkdo332mndkd',
      type: 'Business',
      deductions: '5 USDC',
      interval: 'Monthly',
      salary: '10 USDC'
    },
    {
      firstName: 'Hexdee',
      lastName: 'Hex',
      walletAddress: 'xv023hjslsowndkdo332mndkd',
      type: 'Business',
      deductions: '2 USDC',
      interval: 'Weekly',
      salary: '10 USDC'
    },
    {
      firstName: 'Papi',
      lastName: 'Chuks',
      walletAddress: 'xv023hjslsowndkdo332mndkd',
      type: 'Business',
      deductions: '2 USDC',
      interval: 'Fortnight',
      salary: '10 USDC'
    },
    {
      firstName: 'Temitope',
      lastName: 'Moses',
      walletAddress: 'xv023hjslsowndkdo332mndkd',
      type: 'Business',
      deductions: '5 USDC',
      interval: 'Monthly',
      salary: '10 USDC'
    },
    {
      firstName: 'Hexdee',
      lastName: 'Hex',
      walletAddress: 'xv023hjslsowndkdo332mndkd',
      type: 'Business',
      deductions: '2 USDC',
      interval: 'Weekly',
      salary: '10 USDC'
    },
    {
      firstName: 'Papi',
      lastName: 'Chuks',
      walletAddress: 'xv023hjslsowndkdo332mndkd',
      type: 'Business',
      deductions: '2 USDC',
      interval: 'Fortnight',
      salary: '10 USDC'
    },
    {
      firstName: 'Temitope',
      lastName: 'Moses',
      walletAddress: 'xv023hjslsowndkdo332mndkd',
      type: 'Business',
      deductions: '5 USDC',
      interval: 'Monthly',
      salary: '10 USDC'
    }
  ]