import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Card, Button, Form } from "react-bootstrap";


function Dashboard() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

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
      </div>
    </div>
  );
}

export default Dashboard;
