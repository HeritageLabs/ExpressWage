import { Briefcase, Contact2, Factory, PlusSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { ALL_PAYROLLEE_URL, BUSINESS_URL, EMPLOYEE_URL, FAMILY_URL, PAYROLL_URL } from "./paths";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import PaySinglePayrolleForm from "../components/forms/pay-single-payrolle";

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
        url: BUSINESS_URL,
      },
      {
        title: 'Family & Friends',
        url: FAMILY_URL,
      },
  
      {
        title: 'Employees Payroll',
        url: EMPLOYEE_URL,
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
    },
    {
      accessorKey: 'action',
      header: 'Action',
      cell: ({ row }) => (

        <Dialog>
        <DialogTrigger asChild>
        <Button className="bg-background text-primary font-light border border-slate-200 hover:bg-slate-50">Pay user</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[525px]">
          <DialogHeader>
            <DialogTitle>Pay Individual User</DialogTitle>
            <DialogDescription className="font-extralight">
              Confirm how much you want to pay {`${row.getValue("firstName")} ${row.getValue("lastName")}`}
            </DialogDescription>
          </DialogHeader>
           <PaySinglePayrolleForm selectedPayrollee={row.original} />
        </DialogContent>
      </Dialog>
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