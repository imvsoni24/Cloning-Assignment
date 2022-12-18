import { React, useState } from "react";
import "./footer.css"

export const Footer = () => {
    const [formData, setformData] = useState({
        email: "",
        gender: "",
    })

    const handleChange = (e) => {
        setformData({
            ...formData({ ...formData, [e.target.id]: e.target.value, })
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <div className="mainbox">


                <div className="customercare">
                    <h3 style={{marginBottom:"29px"}}>CUSTOMER CARE</h3>
                    <p>Shopper Protection</p><br />
                    <p>Loyalty Program</p><br />
                    <p>Help Center</p><br />
                    <p>Size Guides</p><br />
                    <p>Contact Us / Feedback</p><br />
                    <p>Shipping / Returns</p>
                </div>
                <div className="Information">
                    <h3 style={{marginBottom:"29px"}}>INFORMATION</h3>
                    <p>About Us</p><br />
                    <p>Influencer Program</p><br />
                    <p>Partner Stores</p><br />
                    <p>Sitemap</p><br />
                </div>
                <div className="Legal">
                    <h3 style={{marginBottom:"29px"}}>LEGAL</h3>
                    <p>Terms Of Use</p><br />
                    <p>Disclosure</p><br />
                    <p>Privacy Policy</p><br />
                    <p>Community Guidelines</p><br />
                </div>
                <div className="connect">
                    <h3 style={{marginBottom:"29px"}}>CONNECT WITH US</h3>
                    <div style={{display:"flex",justifyContent:"space-between"}}><img src="https://cdn.modesens.com/static/img/20220815download_android.svg" alt="" />
                    <img src="https://cdn.modesens.com/static/img/20220815download_ios.svg" alt="" />
                    <img src="https://cdn.modesens.com/static/img/20220815down_chromestrore.svg" alt="" /></div>
                  
                </div>
                <div className="News">
                    <h3 style={{marginBottom:"20px",marginTop:"-13px"}}>NEWSLETTER SIGN UP</h3>
                    <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} className="email" type="text" name="email" placeholder="Email Address" id="email" />
                        <div>
                            <input onChange={(e) => {
                                const setGender = e.target.value;
                                setformData({ ...formData, gender: setGender })
                            }} type="checkbox" name="Women's" className="Women's" value={"Women's"} /> &nbsp;
                            Women's  &nbsp;
                            <input onChange={(e) => {
                                const setGender = e.target.value;
                                setformData({ ...formData, gender: setGender })
                            }} type="checkbox" name="Men's" className="Men's" value={"Men's"} /> &nbsp;
                            Men's
                        </div>
                        <input className="inputSubmit" type="submit" value="Submit" />
                    </form>
                </div>


            </div>
            <div style={{textAlign:"center",color:"#8E8E8E",marginTop:"35px",marginBottom:"-25px"}}>When you follow our links to visit a brand or retailer’s website or make a purchase, ModeSens may earn a commission.</div>
            <br /><br />
            <div className="hrTag" ></div>
            <div className="contacticons">
                <div className="leftside">
                    <img src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" alt="" />

                </div>
                <div className="adjust"><p><p>© 2022, ModeSens Inc</p></p></div>
                <div className="rightside">
                        <img style={{marginRight:"10px"}} width="30px" src="https://cdn.modesens.com/static/img/20181008footer-pit.svg" alt="" />
                        <img style={{marginRight:"10px"}} width="30px" src="https://cdn.modesens.com/static/img/20181008footer-tt.svg" alt="" />
                        <img width="46px" src="https://cdn.modesens.com/static/img/footer-p.svg" alt="" />
                        <img width="46px" src="https://cdn.modesens.com/static/img/footer-fb.svg" alt="" />
                        <img width="46px" src="https://cdn.modesens.com/static/img/footer-wb.svg" alt="" />
                        <img width="46px" src="https://cdn.modesens.com/static/img/footer-wx.svg" alt="" />
                </div>
            </div>
        </div>
    )
}