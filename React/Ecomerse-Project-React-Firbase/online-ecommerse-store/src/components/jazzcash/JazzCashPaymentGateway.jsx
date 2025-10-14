import React from "react";
import CryptoJS from "crypto-js";


export const JazzCashPaymentGateway = ({amount}) => {
  const merchantID = 'MC389333';
  const password = 'd0v29y3085';
  const integritySalt = '22sb861324'
  const returnUrl = 'http://localhost:5173/return';
  const currentDate = new Date()
  const expiry = new Date(currentDate.getTime() + 60 * 60 * 1000)

 const pad = (num) => num.toString().padStart(2, '0');
  const formatDate = (currentDate) => {
    const year = currentDate.getFullYear();
    const month = pad(currentDate.getMonth() + 1);
    const date = pad(currentDate.getDate());
    const hour = pad(currentDate.getHours());
    const minutes = pad(currentDate.getMinutes());
    const seconds = pad(currentDate.getSeconds());
    return `${year}${month}${date}${hour}${minutes}${seconds}`;
  };

  let fields = {
    "pp_Version":"1.1",
    "pp_TxnType":"MWALLET",
    "pp_Language":"EN",
    "pp_MerchantID": merchantID,
    "pp_SubMerchantID":"",
    "pp_Password":password,
    "pp_BankID":"",
    "pp_ProductID":"",
    "pp_TxnRefNo": currentDate.getTime(),
    "pp_Amount":(amount * 100).toString(),
    "pp_TxnCurrency":"PKR",
    "pp_TxnDateTime": formatDate(currentDate),
    "pp_BillReference":"billRef",
    "pp_Description":"Description",
    "pp_TxnExpiryDateTime": formatDate(expiry),
    "pp_ReturnURL":returnUrl,
    "pp_SecureHash":"",
    "ppmpf_1":"03328414414",
  }



  function createHash(){
    const keys = Object.keys(fields).filter((key)=>{
      return key !== 'pp_SecureHash'
    }).sort()

    const finalString = `${integritySalt}&${
      keys.map((key)=>{
        return `${key}=${fields[key]}`
      }).join('&')
    }`

  const hash = CryptoJS.HmacSHA256(finalString, integritySalt)
    .toString(CryptoJS.enc.Hex)
    .toUpperCase();

    return hash;
  }


  function handlePayment(){
    fields.pp_SecureHash = createHash();
    console.table(fields);
    const form  = document.createElement('form')
    form.method = 'POST';
form.action = "https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/";

    for(let key in fields){
      const input = document.createElement('input')
      input.type = 'hidden',
      input.name = key
      input.value = fields[key]

      form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()
  }

  return <button className="p-[10px] w-full bg-green-500" onClick={handlePayment}>Pay Now</button>
}

