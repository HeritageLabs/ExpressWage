import { Briefcase, Contact2, Factory, PlusSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { ALL_PAYROLLEE_URL, PAYROLL_URL } from "./paths";

export const dashboardConfig = {
    sidebarNav: [
      {
        title: 'Payrolls',
        url: PAYROLL_URL,
      },
      {
        title: 'My Payrollees',
        url: ALL_PAYROLLEE_URL,
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
        <Button className="bg-background text-primary font-light border border-slate-200 hover:bg-slate-50">Pay user</Button>
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

  export const payrolls = ({ setOpen }) => [
    {
        id: 0,
        name: 'Business Payroll',
        href: "#",
        icon: <Factory />,
        onclick: () =>  null,
    },
    {
        id: 1,
        name: 'Family & Friends Payroll',
        href: "#",
        icon: <Contact2 />,
        onclick: () =>  null,
    },
    {
        id: 2,
        name: 'Employees Payroll',
        href: "#",
        icon: <Briefcase />,
        onclick: () =>  null,
    },
    {
        id: 3,
        name: 'Add New payroll',
        href: "#",
        icon: <PlusSquare />,
        onclick: setOpen,
    },
]