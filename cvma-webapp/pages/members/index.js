import { getSession } from "next-auth/client";
import {PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import UploadFiles from "../../components/upload/upload";
import MemberUpdate from "../../components/members/memberUpdate";
import MemberNew from "../../components/members/memberNew";
import Documents from "../../components/documents/documents";
import MemberRole from "../../components/members/memberRolls";
import Modal from "../../components/modal/modal";
import classes from "../../styles/member.module.css";
import { connectDatabase } from "../../helpers/db-util";
import { useState, useEffect } from 'react';
import { useExcelDownloder } from 'react-xls';
function Members(props) {
  // ----------------------------------------------------------------
  // Paypal States
     const [ show, setShow ] = useState(false);
     const [success, setSuccess] = useState(false);
     const [ orderId , setOrderId ] = useState(false);
     const [showTrigger, setShowTrigger ] = useState(false);
    //  const [ paymentAmmount, setPaymentAmmount ] = useState()
  // ----------------------------------------------------------------
 
  const membersObj = JSON.parse(props.members);
  const member = membersObj.find(
    (element) => element.memberId === props.session.user.name
  );

  //----------------------------------------------------------------
  // Paypal Payment codec
  // This is where we will idenfiy the member type FM AUX S SAUX
    useEffect(() => {
      if(member.duesPayments === false){
      
        setShow(true)
       
      }
      
    },[])
  
    
    let payment
    let memberName
    let fullMember
    const memberNumber = props.session.user.name
    const memberType = memberNumber.replace(/[0-9]/g, '')
    if(memberType === "FM"){
      memberName = member.memberId + " " + member.firstName + " " + member.lastName;
      payment = 21.23;
      fullMember = true;
    } else {
      memberName = member.memberId + " " + member.firstName + " " + member.lastName;
      payment = 10.87;
      fullMember = false;
    }

    const updatePayments = async () => {
      const date = new Date();
      const currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
      
     
      const response = await fetch("/api/dues/dues", {
        method: "PATCH",
        body: JSON.stringify({
          memberId: member.memberId,
          dues: currentDate,
          duesPayment: true
        }),
        headers: { "Content-Type": "application/json" },
      });
      const update = await response.json(); 
    }
  //----------------------------------------------------------------
  // Admin role and modal settings
  const roleSetting = member.role
  const [ adminRole, setAdminRole ] = useState(false);
  const [ showUpdate, setShowUpdate ] = useState(false);
  const [ showAdmin, setShowAdmin ] = useState(false);
  const [ memberId, setMemberId ] = useState();
  const [ modal, setModal ] = useState(true);
  const [ effect, setEffect ] =useState(false);
   useEffect(() => {
    setModal(!modal)
   
   },[effect])
  useEffect(() => {
    if(roleSetting === 'admin'){
      setAdminRole(!adminRole);
     }
  },[])
  const modalOpen = () =>{
    setEffect(!effect)
  }
  const modalClose = () =>{
    setEffect(!effect)
  }
  const buttonStyle = {
    margin: "2rem",
    cursor: "pointer",
    font: "inherit",
    color: "rgb(255,204,1)",
    backgroundColor: "#840303",
    border: "1px solid #840303",
    borderRadius: "4px",
    padding:" 0.5rem 2.5rem",
  }
  //----------------------------------------------------------------
  // Paypal Functions
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units:[
        {
          description: `Membership Dues for ${memberName}`,
          amount: {
            currency_code: 'USD',
            value: payment
          }
        }
      ],
      application_context: {
        shipping_preference: 'NO_SHIPPING'
      }
    }).then((orderId) => {setOrderId(orderId); return orderId})
  }

  const onApprove = (data, actions) => {
    return actions.order.capture().then(
      function (details) {
        const { payer } = details
        setShow(false)
        setSuccess(true)
      }
    )
  }
      
  const clientID = 'AUMLEgeC9aLqXH8x_vlNTkwRexBt8RRlZ3zQjhcDZEW9ypBn7w2ligev4FoKp7CHjuDTgVxlbdkI_XpI'
 //------------------------------------------------------------------------------------------------
// function to update the database.


 if(success){
  updatePayments();
 }

  //----------------------------------------------------------------
  // xls download for admin and membership
  const { ExcelDownloder, Type } = useExcelDownloder();

  const adminData = membersObj.map(({_id,password, ...rest}) => {return rest})
  
  const contactData = membersObj.map(({_id, role, password, driverLicence, insurance, registration, dues, duesPayment, ...rest}) => { return rest})
      
  const data = { 
    Members: adminData
  }
  const contactRoster = {
    Members: contactData
  }

  //------------------------------------------------------------------------------------------------
  return (
    <section>
      <div>
        <h1>Members Area</h1>
      </div>
      <div className={classes.adminouterbox}>
        <div className={classes.memberUpdate}>
          <PayPalScriptProvider options={
            {"client-id": clientID}
          }>         
         {show ? (<div> 
          <h1 style={{textAlign:"center"}}>Chapter Dues</h1>
          <p style={{textAlign:"center"}}>{fullMember ? "Note there is a $1.23 service fee" : "Note there is a $0.87 service fee"}</p>
          <PayPalButtons style={{ layout: 'vertical' }} createOrder={createOrder}
            onApprove={onApprove}/></div>
          ): null}
          </PayPalScriptProvider>
          <br/>
        
        </div>
      </div>
      <div className={classes.adminouterbox}>
      {adminRole ? (  <button style={buttonStyle} onDoubleClick={() => setShowAdmin(!showAdmin)}>Admin Feautures</button>  ): null}
        <button style={buttonStyle} onClick={() => setShowUpdate(!showUpdate)}>Update Information</button>
       {adminRole ? <ExcelDownloder
        data={data}
        filename={'members_admin_sheet'}
        type={Type.Link} // or type={'link'}
        style={buttonStyle}
      >Admin Sheet</ExcelDownloder> : null}
     { adminRole ? null :<ExcelDownloder
        data={contactRoster}
        filename={'Contact_Roster'}
        type={Type.Link} // or type={'link'}
        style={buttonStyle}
      >Contact Roster</ExcelDownloder> }
      </div>
      <div className={classes.adminouterbox}>
      
      {adminRole ? (showAdmin ? <UploadFiles />: null): null}
      <Documents adminRole={adminRole}/>
      {adminRole ?  (showAdmin ? <MemberNew /> : null ): null}
      { showUpdate ?  <MemberUpdate user={member} />: null}
      
     <MemberRole members={props.members} setMemberId={setMemberId} modalOpen={modalOpen}/> 
      </div>
      <Modal  memberId={memberId} show={modal} setEffect={setEffect} modalClose={modalClose} members={props.members} member={member} adminRole={adminRole}/>
    </section>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  const client = await connectDatabase();
  const collection = client.db().collection("members");
  const data = await collection.find({}).sort({ memberId: 1}).collation({locale: "en_US", numericOrdering: true}).toArray();
  const members = JSON.stringify(data);
  const collection1 = client.db().collection("events");
  const data1 = await collection1.find({}).sort({ memberId: 1}).collation({locale: "en_US", numericOrdering: true}).toArray();
  const events = JSON.stringify(data1);
  client.close();
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return { props: { session, members: members, events: events } };
}

export default Members;
