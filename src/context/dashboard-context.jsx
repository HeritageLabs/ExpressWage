/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import {fetchBalance, fetchToken} from '@wagmi/core';
import { getContract, parseEther } from "viem";
import instance from "../lib/axios-instance";
import { useToast } from "../components/ui/use-toast";
import { useQueryClient } from "@tanstack/react-query";

export const DashboardContext = createContext({});
const BASE_URL = 'https://express-wage.onrender.com'
const cUSDMainnet = '0x765de816845861e75a25fca122bb6898b8b1282a';
const cUSDTestnet = '0x874069fa1eb16d44d622f2e0ca25eea172369bc1';

export const erc20Abi = [
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [{ type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    name: 'Transfer',
    type: 'event',
    inputs: [
      {
        indexed: true,
        name: 'from',
        type: 'address',
      },
      { indexed: true, name: 'to', type: 'address' },
      {
        indexed: true,
        name: 'tokenId',
        type: 'uint256',
      },
    ],
  }, 
  {
    constant: false,
    inputs: [
        {name:"_to",type:"address"},
        {name:"_value",type:"uint256"}
    ],
    name:"transfer",
    outputs: [{name:"success",type:"bool"}],
    stateMutability: "nonpayable",
    type: "function"
  }
];

export const DashboardProvider = ({ children }) => {
    const { toast } = useToast();
    const [payrollees, setPayrollees] = useState([]);
    const {address} = useAccount();
    const { data: walletClient} = useWalletClient()
    const publicClient = usePublicClient()
    const queryClient = useQueryClient();

    // useEffect(() => {
    //     console.log({walletClient})
    //     if(walletClient) {
    //         getPayrollees();
    //     }
    // }, [walletClient]);

    const fetchData = async(endpoint) => {
        return instance.get(`${endpoint}?signature=${address}`);
    }

    const postData = async(endpoint, data) => {
        data.signature = address;
        return instance.post(endpoint, data);
    }

    const putData = async(endpoint, data) => {
        data.signature = address;
        const response = await fetch(`${process.env.VITE_REACT_APP_BASE_URL}${endpoint}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            const data = await response.json();
            console.log('PUT Request Response:', data);
        } else {
            console.error('Error :', response.statusText);
        }
    }

    // const getPayrollees = async() => {
    //     try {
    //         const _parollees = await fetchData('/employees');
    //         // console.log({_parollee: _parollees}); //
    //         setPayrollees(
    //             _parollees.map((payrollee) => {
    //                 payrollee.lastPaid = new Date(payrollee.lastPaid).toLocaleDateString('en-Gb', {dateStyle: 'long'});
    //                 return payrollee;
    //             })
    //         );
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }

    // const addPayrollee = (payrollee) => {
    //     postData('/employee', payrollee)
    // }

    const payUser = async (payrollee, setLoading, setOpen) => {
        try {
            setLoading(true);
            const balance = fetchBalance({address, token: cUSDTestnet});
            if(payrollee.salary > balance) {
                toast({
                    title: 'Uh oh! Error occurred',
                    description: "Not enough balance!",
                    variant: 'destructive',
                  });
                setLoading(false);
                return false;
            }
            const contract = getContract({
                abi: erc20Abi,
                address: cUSDTestnet,
                publicClient,
                walletClient,
            });
            const amount = parseEther((payrollee.salary - payrollee.deductions).toString());
            const hash = await contract.write.transfer([payrollee.walletAddress, amount]);
            payrollee.lastPaid = new Date().toISOString();
            updatePayrolleeLastPaid(payrollee);
            await publicClient.waitForTransactionReceipt({hash});
            toast({
                title: 'Holla 🎉',
                description: `Money on it's way to ${payrollee.firstName}`,
              });
            setLoading(false);
            setOpen(false);
            return true;
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
            setOpen(false);
            return false;
        } 
    }

    const payAllUsers = async () => {
        try {
            // Implement
        } catch (error) {
            console.error({error})
        }
    }

    const updatePayrolleeLastPaid = async(payrollee) => {
        try {
            await postData(`/employee/paid/${payrollee._id}`, payrollee);
            queryClient.invalidateQueries('allPayrollee');
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // const updatePayrollee = async(payrollee) => {
    //     try {
    //         await putData(`/employee/${payrollee._id}`, payrollee);
    //         getPayrollees();
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // }
    
    const value = { payUser, postData, fetchData };

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}