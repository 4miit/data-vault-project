import { CredentialsFormData } from '@/interfaces/Credentials';
import React from 'react'

interface CredentialsFormProps{
    type: "create" | "update";
    setCredentialsData: (data:CredentialsFormData)=>void;
    submitForm: ()=>void;
    credentialsData: CredentialsFormData;
} 
function CredentialsForm({type,setCredentialsData, submitForm, credentialsData}:CredentialsFormProps) {
    return (
            <form onSubmit={submitForm} className='flex_center flex-col gap-4 mt-4'>
                <input type="text" id="website" name="website" className='input_1' placeholder='Enter website' value={credentialsData.website} onChange={(e)=>setCredentialsData({...credentialsData,website: e.target.value})} />
                <input type="text" id="email" name="email" className='input_1' placeholder='Enter Your Email/UserName/Phone' value={credentialsData.email} onChange={(e)=>setCredentialsData({...credentialsData,email: e.target.value})} />
                <input type="password" id="pass" name="pass" className='input_1' placeholder='Enter your password' value={credentialsData.password} onChange={(e)=>setCredentialsData({...credentialsData,password: e.target.value})} />

                <button className='btn_primary_1' type='submit'>
                    {type.toLocaleUpperCase()} crdentials
                </button>
            </form>
    )
}

export default CredentialsForm