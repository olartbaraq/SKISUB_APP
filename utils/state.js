import { useState } from 'react';

export const useAccountType = () => {
const [Email, setEmail] = useState('');
const [Mobile, setMobile] = useState('');
const [Password, setPassword] = useState('');
const [hidePassword, setHidePassword] = useState(true);
const [hideConfirmPassword, setHideConfrimPassword] = useState(true);
const [FirstName, setFirstName] = useState('');
const [LastName, setLastName] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [ newPassword, SetNewPassword ] = useState('');
const [ hideNewPassword, setHideNewPassword ] = useState(true);
const [ account_number, setAccountNumber ] = useState('');
const [ NetworkProvider, setNetworkProvider ] = useState('');
const [ Amount, setAmount ] = useState('');
const [ DataPlan, setDataPlan ] = useState('');

  return { 
    Password,
    hidePassword,
    Email, 
    Mobile, 
    setMobile,
    setEmail,
    setPassword,
    setHidePassword,
    FirstName, 
    setFirstName, 
    LastName, 
    setLastName,
    confirmPassword, 
    setConfirmPassword,
    hideConfirmPassword, 
    setHideConfrimPassword,
    newPassword, 
    SetNewPassword,
    hideNewPassword, 
    setHideNewPassword,
    account_number, 
    setAccountNumber,
    NetworkProvider, 
    setNetworkProvider,
    Amount, 
    setAmount,
    DataPlan, 
    setDataPlan
  };
};