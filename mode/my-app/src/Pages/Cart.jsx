import React from 'react'
import CommunitySlider from '../Components/Slider/CommunitySlider';
import { CloseIcon } from '@chakra-ui/icons';
import { useNavigate,useParams} from "react-router-dom";


const Cart = () => {
  let arr = JSON.parse(localStorage.getItem("movie-list")) || [];
   let sum =0;
   arr.forEach((el)=>{
    sum=sum+Number(el.rate)
   })
   console.log(sum)


     
  // let price=0;
  // sum=Number(sum)+Number(price)
  // console.log(sum)
  
const removeData=(data,index)=>{
  arr = data.filter(
    function(el,i){ 
        return i!=index;
    }
  )
  localStorage.setItem("movie-list", JSON.stringify(arr));
}
     
    

  console.log(arr);
  // const [product,setProduct] = React.useState({})
     const navigate=useNavigate()
  //    const { id } = useParams();
  //     React.useEffect(() => {
  //         fetch(`http://localhost:3000/beauty/${id}`)
  //           .then((res) => res.json())
  //           .then((res) => console.log(res))
  //       }, [id]);
  //       const { src,title,sub,rate,st,type } = product;
  return (
    <div>
        <h1 style={{textAlign:"center",fontSize:"40px"}}>MODESENS CONCIERGE</h1>
        <p style={{textAlign:"center",fontWeight:"bold",marginTop:"15px"}}>Let ModeSens determine which store fulfill your request to get the best price for the product you want</p><br />
        <p style={{textAlign:"center",fontWeight:"bold"}}>- enjoy a worry-free experience with no additional cost to you.</p>
        <div style={{display:"flex",justifyContent:"space-between",width:"70%",fontWeight:"bold",margin:"auto",marginTop:"45px",}}><h1>SHOPPING BAG</h1>
        <h1 style={{marginRight:"230px"}}>SUMMARY</h1></div>
        <div style={{display:"flex",width:"70%",margin:"auto",marginTop:"10px",}}>
         
            <div style={{width:"70%",height:"auto",marginRight:"15px"}}>
           {arr.map((el,i)=>(<div style={{display:"flex",justifyContent:"space-around",marginBottom:"15px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
              <div >
                <img style={{height:"200px",width:"150px"}} src={el.src} alt="" />
                </div>
              <div style={{marginTop:"55px"}}>
                <h1>{el.title}</h1>
                <h1>{el.sub}</h1>
                <h1>Quantity: 1</h1>
              </div>
              <div style={{marginTop:"65px",fontWeight:"bold"}}>${(el.rate)}</div>
              {/* {sum = Number(sum)+((el.length)*Number(el.rate))} */}
              <div >< CloseIcon style={{cursor:"pointer"}}  onClick={()=>{
                removeData(arr,i)
                navigate("/cart")
              }} w={5} h={8}/></div>
              </div>
            



            ))} 
            </div>
            <div style={{width:"30%",height:"100px",fontWeight:"500",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
                <div style={{display:"flex",justifyContent:"space-between"}}><h1>Currency</h1><h1>USD</h1></div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"7px"}}><h1>{arr.length} Items</h1><h1>${sum}</h1></div>
                <button  onClick={()=>navigate("/payment")} style={{width:"100%",margin:"auto",border:"1px solid",backgroundColor:"black",color:"white",fontWeight:"bold",marginTop:"9px",padding:"5px 10px"}}>GO TO CHECKOUT</button>
                <h1 style={{marginTop:"9px"}}>Earn up to 1151 points when you buy.</h1>
            </div>
        </div>
        <CommunitySlider/>
      
    </div>
  )
}

export default Cart
