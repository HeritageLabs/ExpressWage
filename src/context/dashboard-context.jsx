/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useAccount, usePublicClient, useWalletClient } from "wagmi";
import {fetchBalance, fetchToken} from '@wagmi/core';
import { getContract, parseEther } from "viem";

export const DashboardContext = createContext({});
const BASE_URL = 'http://localhost:4000' //'https://express-wage.onrender.com'
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

    const [payrollees, setPayrollees] = useState([]);
    const {address} = useAccount();
    const { data: walletClient, isError, isLoading } = useWalletClient()
    const publicClient = usePublicClient()

    useEffect(() => {
        console.log({walletClient})
        if(walletClient) {
            getPayrollees();
        }
    }, [walletClient]);

    const fetchData = async(endpoint) => {
        const response = await fetch(`${BASE_URL}${endpoint}?signature=${address}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            console.error('Error fetching data:', response.statusText);
        }
    }

    const postData = async(endpoint, data) => {
        data.signature = address;
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return response.ok
    }

    const putData = async(endpoint, data) => {
        data.signature = address;
        const response = await fetch(`${BASE_URL}${endpoint}`, {
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

    const getPayrollees = async() => {
        try {
            const _parollees = await fetchData('/employees');
            // console.log({_parollee: _parollees}); //
            setPayrollees(
                _parollees.map((payrollee) => {
                    payrollee.lastPaid = new Date(payrollee.lastPaid).toLocaleDateString('en-Gb', {dateStyle: 'long'});
                    return payrollee;
                })
            );
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const addPayrollee = async(payrollee) => {
        try {
            if(await postData('/employee', payrollee)) {
                getPayrollees();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const payUser = async (payrollee) => {
        try {
            const contract = getContract({
                abi: erc20Abi,
                address: cUSDTestnet,
                publicClient,
                walletClient,
            });
            const amount = parseEther((payrollee.salary - payrollee.deductions).toString());
            console.log({amount});
            const hash = await contract.write.transfer([payrollee.walletAddress, amount]);
            payrollee.lastPaid = new Date().toISOString();
            updatePayrolleeLastPaid(payrollee);
            await publicClient.waitForTransactionReceipt({hash});
            return true;
        } catch (error) {
            console.error('Error:', error);
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
        console.log({payrollee});
        try {
            await postData(`/employee/paid/${payrollee._id}`, payrollee);
            getPayrollees();
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const updatePayrollee = async(payrollee) => {
        try {
            await putData(`/employee/${payrollee._id}`, payrollee);
            getPayrollees();
        } catch (error) {
            console.error('Error:', error);
        }
    }
    
    const value = { payrollees, addPayrollee, payUser };

    return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
}