import React from 'react'
import { useParams,Link, useNavigate } from "react-router-dom";
  
const Details = () => {
    const navigate=useNavigate()
   const [product,setProduct] = React.useState({})
   const { id } = useParams();
    React.useEffect(() => {
        fetch(`http://localhost:3000/beauty/${id}`)
          .then((res) => res.json())
          .then((res) => setProduct(res))
      }, [id]);
      const { src,title,sub,rate,st,type } = product;
      let arr = JSON.parse(localStorage.getItem("movie-list")) || [];
      const local=()=>{
        arr.push(product);
        localStorage.setItem("movie-list", JSON.stringify(arr));
        navigate("/cart")
      }
  return (
    <div>
        <h1 style={{marginTop:"50px",marginLeft:"150px",fontWeight:"bold"}}>MODESENS / DESIGNERS / WOMEN / <span style={{cursor:"pointer"}} onClick={()=>{navigate("/beauty")}}>BEAUTY</span></h1>
        <div style={{width:"80%",display:"flex",margin:"auto",marginTop:"20px"}}>
            <div style={{width:"50%",height:"400px",marginRight:"35px"}}>
                <img style={{width:"200px",height:"200px",marginLeft:"180px"}} src={src} alt="" />
                <div style={{marginLeft:"540px",marginTop:"-195px"}}><img width="30px" src="https://cdn.modesens.com/static/img/20210601heart.svg" alt="" /><img style={{marginTop:"9px"}} src="https://cdn.modesens.com/static/img/20210908share.svg" alt="" /><img style={{marginLeft:"4px",marginTop:"9px"}}  src="https://cdn.modesens.com/static/img/20180409right.png" alt="" /></div>
                <div style={{display:"flex",justifyContent:"space-between",marginTop:"100px",fontSize:"14px"}}><p style={{textDecoration:"underline"}}>Visit Nordstrom for more details</p><p>1/10</p><p>First seen in Dec 2022 </p></div>
                <h1 style={{fontWeight:"600",fontSize:"20px",marginTop:"70px"}}>Shop With ModeSens Concierge</h1>
                <p style={{marginTop:"30px",color:"#8E8E8E"}}>ModeSens Concierge helps you shop 500+ stores in one place. A premium</p><br />
                <p style={{color:"#8E8E8E"}}>benefit exclusively reserved for Silver and above members. Learn more</p>
            </div>









            <div style={{width:"50%",height:"400px"}}>
               <h1 style={{fontWeight:"500",fontSize:"23px"}}>{title}</h1>
               <p style={{marginTop:"15px",color:"#8E8E8E"}}>{sub}</p>
               <h1 style={{marginTop:"15px",fontWeight:"500",fontSize:"20px"}}>${rate}-${rate*2}</h1>
               <h1 style={{marginTop:"10px",fontWeight:"500"}}>Earn up to 55 points when you buy.</h1>
               <button style={{marginTop:"10px",color:"white",padding:"8px 29px",backgroundColor:"black"}}>SHOP FROM {st} STORES</button><button style={{marginTop:"10px",marginLeft:"10px",color:"black",padding:"8px 69px",backgroundColor:"white",border:"1px solid"}}>SET ALERT</button>
               <p style={{marginTop:"20px",fontWeight:"500"}}>Product Reviews</p>
               <p  style={{marginTop:"100px",fontWeight:"500"}}>Estimated Price: ${rate}-${rate*2} </p>
               <button  style={{marginTop:"18px",color:"black",border:"1px solid",padding:"8px 77px",backgroundColor:"white"}}>Select Size</button>
               <button onClick={local} style={{marginTop:"10px",marginLeft:"8px",color:"white",padding:"8px 63px",backgroundColor:"black",border:"1px solid"}}>ADD TO BAG</button>

            </div>
        </div>
        <div style={{width:"80%",display:"flex",justifyContent:"space-between",margin:"auto",marginTop:"50px"}}>
            <h1 style={{fontWeight:"bold",fontSize:"25px"}}>Subscribe To Alerts</h1>
            <button style={{marginRight:"130px",color:"black",padding:"8px 69px",backgroundColor:"white",border:"1px solid"}}>SET ALERT</button>

        </div>
        <p style={{width:"80%",color:"#8E8E8E",margin:"auto",lineHeight:"18px",marginTop:"20px"}}>We'll keep our eyes out for you. Subscribe to receive automatic email and app updates to be the first to know when this item becomes available in new <br/>stores, sizes or prices.</p>
      
    </div>
  )
}

export default Details
