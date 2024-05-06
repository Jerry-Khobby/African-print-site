import axios from "axios";
import { NextResponse } from "next/server";


export default  async function POST(req){
if(req.method!=="POST"){
return NextResponse.json({message:'Unsupported method'},{status:405})
}
try{
  const {email,amount}= await req.json();
  const secretKey="sk_test_fef51ce6992d70124e0ff4fe8e429612d73a0fc4";

  
if(!secretKey){
  throw new Error("Missing PAYSTACK_SECRET_KEY environment variable");
}

const data={
  email,
  amount:amount*100,
  callback_url:"https://african-print-site.vercel.app/",
  currency:"GHS",
};

const response=await axios.post(
  'https://api.paystack.co/transaction/initialize',
  data,
  {
    headers:{
      Authorization:`Bearer${secretKey}`,
      'Content-Type': 'application/json',
    }
  }
);

return NextResponse.json(response.data.toString());

}catch(e){
  console.error("Payment processing error",e);
  NextResponse.json({error:e},{status:500});
}


}