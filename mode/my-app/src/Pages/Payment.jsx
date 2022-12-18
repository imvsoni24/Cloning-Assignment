import React from 'react'
import { useNavigate} from "react-router-dom";
import {Accordion,AccordionItem,AccordionButton,Box,AccordionIcon,AccordionPanel,useToast} from "@chakra-ui/react"

const Payment = () => {
  const navigate=useNavigate()
  const toast = useToast()
  let arr = JSON.parse(localStorage.getItem("movie-list")) || [];
   let sum =0;
   arr.forEach((el)=>{
    sum=sum+Number(el.rate)
   })
   let total = sum+403+15
  return (
    <div>
      <h1 style={{textAlign:"center",fontSize:"30px",marginTop:"20px"}}>MODESENS CONCIERGE</h1>
        <p style={{textAlign:"center",fontWeight:"bold",marginTop:"15px"}}>Let ModeSens determine which store fulfill your request to get the best price for the product you want</p><br />
        <p style={{textAlign:"center",fontWeight:"bold"}}>- enjoy a worry-free experience with no additional cost to you.</p>
        <h1 onClick={()=>{navigate("/cart")}} style={{cursor:"pointer",color:"#8E8E8E",marginLeft:"230px",marginTop:"45px"}}>Back To Bag</h1>
        <div style={{display:"flex",justifyContent:"space-between",width:"70%",fontWeight:"bold",margin:"auto",marginTop:"20px",}}><h1>YOUR SHIPPING ADDRESS</h1>
        <h1 style={{marginRight:"233px"}}>SUMMARY</h1></div>
        <div style={{display:"flex",width:"70%",margin:"auto",marginTop:"10px",}}>
        <div style={{width:"70%",height:"600px",marginRight:"15px"}}>

       <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",padding:"30px 10px"}}>
       <input style={{borderBottom:"1px solid",marginRight:"60px",marginTop:"20px",marginLeft:"10px"}} placeholder='First Name' type="text" /> 
       <input style={{borderBottom:"1px solid",marginRight:"60px"}}  placeholder='Last Name' type="text" />
        <input style={{borderBottom:"1px solid"}}  placeholder='Country' type="text" /><br />
       <input style={{width:"300px",borderBottom:"1px solid",marginTop:"30px",marginLeft:"10px"}}  placeholder='Address 1' type="text" />
        <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"100px",marginTop:"30px"}}  placeholder='Address 2' type="text" /><br />
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"10px",marginTop:"30px"}}  placeholder='Zip Code' type="text" /> 
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"100px",marginTop:"30px"}}  placeholder='City' type="text" /><br />
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"10px",marginTop:"30px"}}  placeholder='State' type="text" /> 
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"100px",marginTop:"30px"}}  placeholder='Phone Number' type="text" /><br />
       </div>

       <div style={{fontWeight:"bold",margin:"auto",marginTop:"20px",}}><h1>YOUR BILLING ADDRESS</h1></div>
       <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",padding:"20px 10px",marginTop:"40px"}}>
       <input style={{borderBottom:"1px solid",marginRight:"60px",marginTop:"20px",marginLeft:"10px"}} placeholder='First Name' type="text" /> 
       <input style={{borderBottom:"1px solid",marginRight:"60px"}}  placeholder='Last Name' type="text" />
        <input style={{borderBottom:"1px solid"}}  placeholder='Country' type="text" /><br />
       <input style={{width:"300px",borderBottom:"1px solid",marginTop:"30px",marginLeft:"10px"}}  placeholder='Address 1' type="text" />
        <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"100px",marginTop:"30px"}}  placeholder='Address 2' type="text" /><br />
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"10px",marginTop:"30px"}}  placeholder='Zip Code' type="text" /> 
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"100px",marginTop:"30px"}}  placeholder='City' type="text" /><br />
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"10px",marginTop:"30px"}}  placeholder='State' type="text" /> 
       <input style={{width:"300px",borderBottom:"1px solid",marginLeft:"100px",marginTop:"30px"}}  placeholder='Phone Number' type="text" /><br />
       </div>





        </div>
        <div style={{width:"30%",height:"auto",fontWeight:"500",padding:"5px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}><h1>Currency</h1><h1>USD</h1></div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"11px"}}><h1>{arr.length} Items</h1><h1>${sum}</h1></div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"11px"}}><h1>Store Shipping Fee</h1><h1>$15.00</h1></div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"11px"}}><h1>Tax</h1><h1>$0.00</h1></div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"11px",marginBottom:"5px"}}><h1>Duty</h1><h1>$403.00</h1></div>
                
                <hr />
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"11px",marginBottom:"15px"}}><h1>ESTIMATED TOTAL</h1><h1>${total}</h1></div>

                <Accordion allowMultiple>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <img width="25px" src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/debit-card-icon.svg" alt="" />
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <input placeholder='Card Number' type="Password" /><br /><br /><input placeholder='Expiration Date (MM/YY)' type="date" /><br /><br /><input placeholder='CVV' type="Password" /><br /><br /><input placeholder='Postal Code' type="text" />
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <img width="55px" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/paypal-icon.svg" alt="" />
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <button style={{width:"100%",padding:"5px 10px",color:"white" ,backgroundColor:"black"}}>PayPal</button>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          <img width="25px" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-pay-icon.svg" alt="" />
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <button style={{width:"100%",padding:"5px 10px",color:"white" ,backgroundColor:"black"}}>G Pay</button>
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
         <img width="25px" src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-logo-icon.png" alt="" />
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <button style={{width:"100%",padding:"5px 10px",color:"white" ,backgroundColor:"black"}}>Phone Pay</button>
    </AccordionPanel>
  </AccordionItem>
  
</Accordion>
               
               


                <button  onClick={() =>{
        toast({
          title: 'Your Order is Complete!',
          description: "You will be receiving a confirmation email with order details",
          status: 'success',
          duration: 9000,
          isClosable: true,
          
        })
      navigate("/")
      }
      } style={{width:"100%",margin:"auto",border:"1px solid",backgroundColor:"black",color:"white",fontWeight:"bold",marginTop:"9px",padding:"5px 10px"}}>PLACE ORDER</button><br /><br />
                <p style={{color:"black",marginTop:"25px"}}>By placing order you agree to ModeSens</p><br />
                <p>Terms An authorization hold will be</p><br />
                <p>payment method. The funds will only be</p><br />
                <p>captured if your order can be confirmed.</p>
        </div>
        </div>
    </div>
  )
}

export default Payment
