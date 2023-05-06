import React, { useEffect, useState } from "react";
//use react-bootstrap
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
  const [input5, setInput5] = useState("");
  const [input6, setInput6] = useState("");

  const [preview, setPreview] = useState("");
  const [preview2, setPreview2] = useState("");
  const [preview3, setPreview3] = useState("");
  const [preview4, setPreview4] = useState("");
  const [preview5, setPreview5] = useState("");
  const [preview6, setPreview6] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try{
    const res = await axios.get("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/contact");
    console.log("inside useeffect")
    console.log(res.data);
    setPreview(res.data.name);
    setPreview2(res.data.email);
    setPreview3(res.data.phone);
    setPreview4(res.data.facebook);
    setPreview5(res.data.insagram);
    setPreview6(res.data.linkdin);
    }
    catch(err){
      console.log(err);
    }

  };



  const inputdata = {
    name: `${input1}`
  };
  const inputdata2 = {
    email: `${input2}`
  };
  const inputdata3 = {
    phone: `${input3}`
  };
  const inputdata4 = {
    facebook: `${input4}`
  };
  const inputdata5 = {
    insagram: `${input5}`
  };
  const inputdata6 = {
    linkdin: `${input6}`
  };

  const updateApi = async() => {
    //update the heading using axios.put
    console.log("updateApi called");
    const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/contact", inputdata);
    console.log(res);
    alert("Updated name");
}

  const updateemail = async() => {
    console.log("updateApi called");
    const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/contact", inputdata2);
    console.log(res);
    alert("Updated email");
}
const updatePhone = async() => {
  console.log("updateApi called");
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/contact", inputdata3);
  console.log(res);
  alert("Updated phone");
}
const updateFacebook = async() => {
  console.log("updateApi called");
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/contact", inputdata4);
  console.log(res);
  alert("Updated facebook");
}
const updateInstagram = async() => {
  console.log("updateApi called");
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/contact", inputdata5);
  console.log(res);
  alert("Updated instagram");
}
const updateLinkedIn = async() => {
  console.log("updateApi called");
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/contact", inputdata6);
  console.log(res);
  alert("Updated linkedin");
}



const handleUpdate1 = () => {
  console.log("Updating card 1 with value:", input1);
  updateApi(input1);
  console.log("but clicked");
};
  const handleUpdate2 = () => {
    console.log("Updating card 2 with value:", input2);
    updateemail(input2);
    // Add your update logic here
  };

 const handleUpdate3 = () => {
    console.log("Updating card 3 with value:", input3);
    updatePhone(input3);
 };
  const handleUpdate4 = () => {
    console.log("Updating card 4 with value:", input4);
    updateFacebook(input4);
  };
  const handleUpdate5 = () => {
    console.log("Updating card 5 with value:", input5);
    updateInstagram(input5);
  };
  const handleUpdate6 = () => {
    console.log("Updating card 6 with value:", input6);
    updateLinkedIn(input6);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Form.Group controlId="formInput1">
                <Form.Label>Name</Form.Label>
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
                <Form.Label>Email</Form.Label>
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
      </div>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Form.Group controlId="formInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={preview3}

                  value={input3}
                  onChange={(e) => setInput3(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate3}>
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
                <Form.Label>Facebook</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={preview4}

                  value={input4}
                  onChange={(e) => setInput4(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate4}>
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Card>
            <Card.Body>
              <Card.Title></Card.Title>
              <Form.Group controlId="formInput1">
                <Form.Label>Instagram</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={preview5}

                  value={input5}
                  onChange={(e) => setInput5(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate5}>
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
                <Form.Label>LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={preview6}

                  value={input6}
                  onChange={(e) => setInput6(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate6}>
                Update
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
