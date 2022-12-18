import React, { useEffect, useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Navbar.css";
import Modal from 'react-modal';
import { CloseIcon } from '@chakra-ui/icons';
import {Checkbox,useToast} from "@chakra-ui/react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { auth } from "../Firebase";

const customStyles = {
  content: {
    margin:0,
    padding:0,
    width:"1000px",
    height:"650px",
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
  },
};

const Navbar = () => {
  
  const toast = useToast()
    const navigate=useNavigate()
    let arr = JSON.parse(localStorage.getItem("movie-list")) || [];
    const user = auth.currentUser;
    const [values,setValues] = useState({
        email:"",
        pass:""
    })

    const [disable,setDisable] = useState(false)
    const handleSubmit=(e)=>{
      e.preventDefault()
      setDisable(true)
      createUserWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
        setDisable(false)
        const userD = res.user
        console.log(res)
        toast({
          title: 'Congratualtions!',
          description: "Your Account has been created successfully.",
          status: 'success',
          duration: 9000,
          isClosable: true,
          
        })
        navigate("/")
        closeModal()
      }).catch((err)=>{
        setDisable(false)
      })
    }
    const handleLogout = ()=>{
signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/")
}).catch((err) => {
  // An error happened.
  console.log(err)
});
    }
    const handleLogin=()=>{
        setDisable(true)
        signInWithEmailAndPassword(auth,values.email,values.pass).then((res)=>{
          setDisable(false)
          const userD = res.user.email
         console.log(userD.email)
         toast({
          title: 'Login Success',
          description: "Welcome Back!",
          status: 'success',
          duration: 9000,
          isClosable: true,
          
        })
          navigate("/")
          closeModal2()
        }).catch((err)=>{
          setDisable(false)
        })
    }

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpen2, setIsOpen2] = React.useState(false);
  const [load,setLoad] = React.useState(false)
  function openModal() {
    setIsOpen(true);
  }
  function openModal2() {
    setIsOpen2(true);
  }

  useEffect(()=>{
    openModal()
  },[])

  
  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setIsOpen2(false);
  }
  const handle1=()=>{
    openModal2()
    closeModal()

  }
  const handle2=()=>{
    openModal()
    closeModal2()

  }
    return (
        <div  id="Navbar">
            <div style={{fontSize:"24px"}} onClick={()=>navigate("/")} id="logo">
            ＢｅＣｈａｒｍｅｄ
                {/* <img
                    src="https://i.ibb.co/svxTCp9/download.jpg"
                    alt=""
                /> */}
            </div>
            <div className="categories">
                <div className="women" onClick={()=>navigate("/")}> WOMEN</div>
                <div className="womenhide">

                    <h5>SHOP ALL</h5>
                    <h5 className="clothing">CLOTHING</h5>
                    <h5>BAGS</h5>
                    <h5>SHOES</h5>
                    <h5>ACCESSORIES</h5>
                    <h5>BEAUTY</h5>
                    <h5>SALE</h5>
                    <h5>PRE-OWNED</h5>
                    <h5>OCCASION</h5>

                </div>
                <div className="beauty" onClick={()=>navigate("/beauty")}> BEAUTY</div>
                <div className="beautyhide">
                    <h5>SHOP ALL</h5>
                    <h5>WOMEN'S BEAUTY</h5>
                    <h5>MEN'S GROOMING</h5>
                    <h5>KID'S CARE</h5>
                </div>
                <div className="men"> MEN </div>
                <div className="menhide">

                    <h5>SHOP ALL</h5>
                    <h5 >CLOTHING</h5>

                    <h5>BAGS</h5>
                    <h5>SHOES</h5>
                    <h5>ACCESSORIES</h5>
                    <h5>GROOMING</h5>
                    <h5>SALE</h5>
                    <h5>PRE-OWNED</h5>
                    <h5>OCCASION</h5>
                </div>
                <div className="kids"> KIDS</div>
                <div className="kidshide">
                    <h5>SHOP ALL</h5>
                    <h5>BABY GIRL</h5>
                    <h5>BABY BOY</h5>
                    <h5>GIRLS</h5>
                    <h5>BOYS</h5>
                    <h5>SALE</h5>
                </div>
                <div className="home"> HOME</div>
                <div className="homehide">
                    <div className="flex">
                        <div>
                            <h5 style={{ color: "Grey" }}>SHOP BY CATEGORY</h5>
                            <h5>NEW ARRIVALS</h5>
                            <h5>SHOP ALL </h5>
                            <h5>BATH</h5>
                            <h5>BED</h5>
                            <h5>FURNITURE</h5>
                            <h5>HOME DECOR</h5>
                            <h5>KITCHEN & DINING</h5>
                            <h5>PET ACCESSORIES</h5>
                            <h5>TECHNOLOGY</h5>
                            <h5>SALE</h5>
                        </div>
                        <div>
                            <h5 style={{ color: "Grey" }}>DESIGNERS</h5>
                            <h5>GUCCI</h5>
                            <h5>VERSACE</h5>
                            <h5>MAISON MARGIELA</h5>
                            <h5>OFF-WHITE</h5>
                            <h5>MASTER & AMP</h5>
                            <h5>HAY</h5>
                            <h5>VITRA</h5>
                            <h5>FORNASETTI</h5>
                        </div>
                        <div>
                            <h5 style={{ color: "Grey" }}>POPULAR CATEGORY</h5>
                            <h5>TECHNOLOGY</h5>
                            <img src='https://modesens.com/banner/9368/getimg/?img=%2Fbanner%2F20210816Home-Technology-Nav.jpg' alt='' />
                        </div>
                    </div>

                </div>
               
                <div className="community"> COMMUNITY</div>
                <div className="communityhide">
                    <h5>DISCOVER</h5>
                    <h5>MY CLOSET</h5>
                    <h5>EDITORIALS</h5>
                    <h5>INFLUENCER PROGRAM</h5>
                </div>
                <div className="whymodesens"> WHY MODESENS</div>
                <div style={{ color: "red" }} className="offers"> SALE</div>
                <div className="offershide">
                    <h5>COUPONS</h5>
                    <h5>WOMEN'S SALE</h5>
                    <h5>MEN'S SALE</h5>
                </div>
                <div style={{ color: "red" }} className="designer"> GIFT SIDE</div>
            </div>
            <div className="right_side ">
                <div style={{display:"flex",marginTop:"2px"}} className="loginimage" onClick={()=>navigate("/cart")}>
                  
                    <img
                        src="https://cdn.modesens.com/static/img/20200612shopping_bag2.svg"
                        alt=""
                    /><br/>
                </div>
              <div onClick={openModal}  id="login" >
              {user? user.email:  <img  className="loginimage"
                        src="https://cdn.modesens.com/static/img/20200612account_b2.svg"
                        alt=""
                    /> }
                </div>
                <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button style={{marginLeft:"955px",marginTop:"-1px"}} onClick={closeModal}>< CloseIcon w={5} h={8}/></button>
         <div  style={{display:"flex"}}>
            <div className="j"><img className="i" src="https://i.ibb.co/T82y0C4/Screenshot-312.png" alt="" /></div>
            <div style={{width:"500px", textAlign:"center"}}>
            <h1 style={{marginTop:"30px",textAlign:"center",fontSize:"20px"}}>Create an account</h1>
            <p style={{marginTop:"20px",textAlign:"center"}}>Unleash your shopping power.</p><br />
            <p  style={{marginTop:"0px",textAlign:"center"}}>Check ModeSens before you buy.</p>
           <form onSubmit={handleSubmit} action="">
           <input required onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}  style={{marginTop:"40px",padding:"7px 40px",border: "1px solid"}} type="text" placeholder="Email" /><br />
           <input required onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}   style={{marginTop:"20px",padding:"7px 40px",border: "1px solid"}} type="password" placeholder="Password" />
            <Checkbox  style={{marginTop:"20px",fontSize:"5px"}}>Subscribe to personalized sale updates and offers</Checkbox>
            
            <input disabled={disable}  style={{cursor:"pointer",marginTop:"20px",padding:"7px 100px",border: "1px solid",color:"white",backgroundColor:"black"}} type="Submit" name="" id="" value="SIGN UP" />
           </form>
            <p  style={{marginTop:"20px",marginBottom:"20px",textAlign:"center"}}>or</p>
            <div style={{display:"flex",justifyContent:"center"}}>
                <img style={{marginRight:"15px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617google.svg" alt="" />
                <img style={{marginRight:"15px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617facebook.svg" alt="" />
                <img style={{marginRight:"15px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617apple.svg" alt="" />
                <img style={{marginRight:"10px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617wechat.svg" alt="" />
            </div>
            <button onClick={handle1}>Already have an account? Please sign in.</button>
            <p style={{marginTop:"85px",textAlign:"center"}}>By creating an account, I agree to</p>
            <p style={{marginTop:"20px",textAlign:"center"}}>the Terms Of Use and the Privacy Policy</p>




            </div>
         </div>

        </Modal>
        <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button style={{marginLeft:"955px",marginTop:"-1px"}} onClick={closeModal2}>< CloseIcon w={5} h={8}/></button>
         <div  style={{display:"flex"}}>
            <div className="j"><img className="i" src="https://i.ibb.co/T82y0C4/Screenshot-312.png" alt="" /></div>
            <div style={{width:"500px", textAlign:"center"}}>
            <h1 style={{marginTop:"30px",textAlign:"center",fontSize:"20px"}}>Log in to your account</h1>
            <p style={{marginTop:"20px",textAlign:"center"}}>Unleash your shopping power.</p><br />
            <p  style={{marginTop:"0px",textAlign:"center"}}>Check ModeSens before you buy.</p>
           <input required onChange={event=>setValues(prev=>({...prev,email:event.target.value}))}  style={{marginTop:"40px",padding:"7px 40px",border: "1px solid"}} type="text" placeholder="Email" /><br />
           <input required onChange={event=>setValues(prev=>({...prev,pass:event.target.value}))}  style={{marginTop:"20px",padding:"7px 40px",border: "1px solid"}} type="password" placeholder="Password" />
            <p  style={{marginTop:"20px",fontSize:"13px",textAlign:"center"}}>Forgot Password?</p>
            <button disabled={disable} onClick={handleLogin}   style={{marginTop:"20px",padding:"7px 100px",border: "1px solid",color:"white",backgroundColor:"black"}}>LOG IN</button>
            <p  style={{marginTop:"20px",marginBottom:"20px",textAlign:"center"}}>or</p>
            <div style={{display:"flex",justifyContent:"center"}}>
                <img style={{marginRight:"15px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617google.svg" alt="" />
                <img style={{marginRight:"15px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617facebook.svg" alt="" />
                <img style={{marginRight:"15px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617apple.svg" alt="" />
                <img style={{marginRight:"10px",marginBottom:"20px"}} src="https://modesens.com/static/img/login-icon/20210617wechat.svg" alt="" />
            </div>
            <button onClick={handle2}>Don't have an account? Please sign up.</button>




            </div>
         </div>

        </Modal>
                <div id="loginhide">
                    <h5>Earn Points</h5>
                    <hr></hr>
                    <h5>My Likes</h5>
                    <h5>My Alerts</h5>
                    <h5>My Recently Viewed</h5>
                    <hr></hr>
                    <h5>My Closet</h5>
                    <h5>My Orders</h5>
                    <h5>My Save Searches</h5>
                    <h5>My Loyality </h5>
                    <h5>My messages</h5>
                    <h5>Invite Friends</h5>
                    <h5>Settings</h5>
                    <hr></hr>
                    {user ? <h5 onClick={handleLogout} className="inbtn">Logout</h5>: <h5 onClick={openModal2} className="inbtn">Login</h5>}
                </div>
                <div className="loginimage">
                    <img
                        src="https://cdn.modesens.com/static/img/20191109search_b.svg"
                        alt=""
                    />
                </div>
                <div>
                    
                    <input placeholder="SEARCH" id="search"></input>{" "}
                </div>
            </div>
        </div>
    );
};

export default Navbar;