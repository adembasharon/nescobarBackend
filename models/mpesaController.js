require("dotenv").config();
const datetime=require("node-datetime");
const passKey=process.env.PASSKEY;
const shortcode=process.env.SHORTCODE;
const consumerKey=process.env.CONSUMERKEY;
const consumerSecret=process.env.CONSUMERSECRETE

const newPassword=()=>{
    const dt=datetime.create();
    const formartted=dt.format("YmdHMS");
const passString=shortcode + passKey + formartted;
const base64EncodedPassword=Buffer.from(passString).toString("base64")
return passString
}

exports.token=(req,res,next)=>{
    const url="https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials"
    const auth="basic" + Buffer.from(consumerKey + ":" + consumerSecret)
    const headers={
        Authorization:auth,
    }
axios.get(url,{
    headers:headers,
})
.then((res)=>{
    let data=res.data;
    let access_token=data.access_token;
    req.token=access_token;
    next();
})
.catch((err)=>console.log(err))
};
exports.mpesaPassword=(req,res)=>{
    res.send(newPassword());
};
exports.stkPush=(req,res)=>{
    const token=req.token;

    const stkURL="https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"

    let data={
        BusinessShortCode:"174379",
        Password:newPassword(),
        Timestamp:formartted,
        TransactionType:"CustomerPayBillOnline",
        Amount:"1",
        PartyA:"254708374149",
        PartyB:"174379",
        PhoneNumber:"254708374149",
        callBackURL:"https://mydomain.com/path",
        AccountReference:"Nesco_Bar",
        TransactionDesc:"Lipa Na M-PESA"
    };
    res.send(token)
};





//password
// bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919


// security credential i.e sandbox
// WPEEiBA72b5kjODS1218CRGS6n1F2WFzouyWJjqYXQdz71KTbWPp3g7u3g8OMXIzPvPDJu2O4wctjWXAPtpNKW7lWBFCxNzukfHNNm2F6mou/79kwBsAt7/Yf6p/SZrYBdKocGKWA4mj6o5TAURP4NbFICjw8kLizjxRqXTwZxvUXB+GuB23Rb8cazBNIIpx9tH4JVH/Vlqdsh9xynfEWHW/BciIqJujj/+aulqzO7abxFXwWXJM6FO7xvuon1c/d8RHX7sUaYKKndte1L71ofoxK+vhY0cgv1MKXeH9sXujP0T5Hp2K1GnrOkF0G31Uso/xIR2XrkHt8O+BVpKg8w==

// production

// VTPGMV33m+NWGuYzWbOg+miWERl3P0hGwoJGf4lWKhn66qODbTJMKnMe/eMVj/SGguk9jwWdBfJ+N5upihcr5U9mpjVQ8PWIf0w+rmE0DIc4AwfVIZg+e5ldOiejxy0b5gSlTxJn/mzQvOatpkbzRm7NzAhPgOodTN1cZ0sKKx8bEedIGC/QxAQhkGbZssrFij5svWw5SWVrls3IQ35mHx55Lk90Q7wULzt4MSGlv1Zvp14oHB61Ve/8B1CPdSTmeJig9Y2rstaLLUVzfOy+kprgLwLhmXZ6MBX/zsaNNuhv8NM4N5SFLuuhaWXSfx2/FeedifwbOgvNj2lv4+Qkow==

// basic authorization
// UEZxU2NSZmtBOUdkVjNiQzJHSU1lS0E2WTh3UnlJcEw6YUs5eGpiTUFFMkNDcGZVOA==