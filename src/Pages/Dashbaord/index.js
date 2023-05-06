import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Card, Button, Form } from "react-bootstrap";


function Dashboard() {

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token is " + token);
    if (!token || token === "undefined") {
      console.log("inside if");
      window.location.href = "/";
    }
  }, []);
  
  
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");



  const [preview, setPreview] = useState("");
  const [preview2, setPreview2] = useState("");

  const inputdata = {
    heading: `${input1}`
  };
  const inputdata2 = {
    img: `${input2}`
  };
 
  const updateApi = async() => {
    //update the heading using axios.put
    console.log("updateApi called");
    const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/home", inputdata);
    console.log(res);
    alert("Updated");
}

useEffect(() => {
  getData();
}, []);

const getData = async () => {
  try{
  const res = await axios.get("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/home");
  console.log("inside useeffect")
  console.log(res.data);
  setPreview(res.data.heading);
  setPreview2(res.data.img);
  }
  catch(err){
    console.log(err);
  }
};


  const handleUpdate1 = () => {
    console.log("Updating card 1 with value:", input1);
    updateApi(input1);
    console.log("but clicked");
    // Add your update logic here
  };
  const updateApiImg = async() => {
    console.log("updateApi called");
    const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/home", inputdata2);
    console.log(res);
    alert("Updated");
}


  const handleUpdate2 = () => {
    console.log("Updating card 2 with value:", input2);
    updateApiImg(input2);
    // Add your update logic here
  };

  const handleUpdate3 = () => {
    console.log("Updating card 3 with value:", input3);
    // updateContent(input3);
  };

//   const updateContent = async() => {
//     console.log("updateApi called");
//     const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/card", inputdata3);
//     console.log(res);
//     alert("Updated");
// }

useEffect(() => {
  getData1();
}, []);

const getData1 = async () => {
  try{
  const res = await axios.get("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/card/645419297aeaac244ce4b773");
  console.log("inside useeffect")
  console.log(res.data);
  // setPreview3(res.data.content);
  }
  catch(err){
    console.log(err);
  }
};
const inputdata3 = {
  content: `${input3}`,
  img: `${input4}`
};
const senddata = async() => {
  try{
  console.log("updateApi called");
  const res = await axios.post("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/card", inputdata3);
  console.log(res);
  alert("Updated");
  }
  catch(err){
    console.log(err);
  }

}




const handleUpdate4 = () => {
  console.log(input3,input4)
  if(input3==="" || input4===""){
    alert("Please enter both content and image link");
  }
  else{
    console.log("Updating card 4 with value:", input3);
    // setInput3(input3); 
    senddata();
  }
};


const [objs, setObjs] = useState([]);
useEffect(() => {
  getObj();
}, []);

const getObj = async () => {
  try {
    const res = await axios.get("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/home");
    console.log("inside useeffect");
    console.log(res.data.card)
    setObjs(res.data.card);
    // console.log("new data is", res.data);
  } catch (err) {
    console.log(err);
  }
};

const handleDel=async(id)=>{
  console.log("delete called");
  const res = await axios.delete(`https://dynamic-web-ky2ufexra-dtanwer.vercel.app/card/${id}`);
  console.log(res);
  alert("Deleted");
  getObj();
}


  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Form.Group controlId="formInput1">
                <Form.Label>Heading</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={preview}
                  value={input1}
                  onChange={(e) => setInput1(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate1}>
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Form.Group controlId="formInput2">
                <Form.Label>Image Link</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={preview2}
                  value={input2}
                  onChange={(e) => setInput2(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate2}>
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title>Enter Content and Img Link</Card.Title>
              <Form.Group controlId="formInput1">
                <Form.Label>Content</Form.Label>
                <Form.Control
                  type="text"
                  // placeholder={preview3}
                  value={input3}
                  style={{width:"600px"}}
                  onChange={(e) => setInput3(e.target.value)}
                />
                <Form.Label>Image Link</Form.Label>
                 <Form.Control
                  type="text"
                  // placeholder={preview4}
                  value={input4}
                  style={{width:"600px"}}
                  onChange={(e) => setInput4(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate4}>
                Post
              </Button>
            </Card.Body>
          </Card>
        </div>

      </div>

      <div className="table-responsive">
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Id</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {objs && objs.map((item) => (
        <tr key={item}>
          <td>{item}</td>
          <td>
            <button id={item} onClick={() => handleDel(item)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>



      {/* {objs.map((cardId) => (
  <div key={cardId}>
    <h6> Live id = {cardId}</h6>
    <button id={cardId} onClick={()=>handleDel(cardId)} >Delete</button>
  </div>
))} */}




    </div>
  );
}

export default Dashboard;
