import React, { useEffect } from 'react'
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { Card, Button, Form } from "react-bootstrap";

const Inventory = () => {
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
    const [input7, setInput7] = useState("");
    const [input8, setInput8] = useState("");
    const [input9, setInput9] = useState("");
    const [input10, setInput10] = useState("");
    const [input11, setInput11] = useState("");
    const [input12, setInput12] = useState("");

    const [preview, setPreview] = useState();
    const [preview2, setPreview2] = useState(null);
    const [preview3, setPreview3] = useState(null);
    const [preview4, setPreview4] = useState(null);
    const [preview5, setPreview5] = useState(null);
    const [preview6, setPreview6] = useState(null);
    const [preview7, setPreview7] = useState(null);
    const [preview8, setPreview8] = useState(null);
    const [preview9, setPreview9] = useState(null);
    const [preview10, setPreview10] = useState(null);
    const [preview11, setPreview11] = useState(null);
    const [preview12, setPreview12] = useState(null);




  
    const inputdata = {
      title: `${input1}`
    };
    const inputdata2 = {
      description: `${input2}`
    };
    const inputdata3 = {
      price: `${input3}`
    };
    const inputdata4 = {
      img: `${input4}`
    };
    const inputdata5 = {
      title: `${input5}`
    };
    const inputdata6 = {
      description: `${input6}`
    };
    const inputdata7 = {
      price: `${input7}`
    };
    const inputdata8 = {
      img: `${input8}`
    };
    const inputdata9 = {
      title: `${input9}`
    };
    const inputdata10 = {
      description: `${input10}`
    };
    const inputdata11 = {
      price: `${input11}`
    };
    const inputdata12 = {
      img: `${input12}`
    };

const firsttitle = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fe70d76b066932eb10e2", inputdata);
  console.log(res);
  alert("Updated");
}
const firstdescription = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fe70d76b066932eb10e2", inputdata2);

  console.log(res);
  alert("Updated");
}
const firstprice = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fe70d76b066932eb10e2", inputdata3);
  console.log(res);
  alert("Updated");
}
const firstimg = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fe70d76b066932eb10e2", inputdata4);
  console.log(res);
  alert("Updated");
}
const secondtitle = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fec8d76b066932eb10ea", inputdata5);
  console.log(res);
  alert("Updated");
}
const seconddescription = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fec8d76b066932eb10ea", inputdata6);
  console.log(res);
  alert("Updated");
}
const secondprice = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fec8d76b066932eb10ea", inputdata7);
  console.log(res);
  alert("Updated");
}
const secondimg = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fec8d76b066932eb10ea", inputdata8);
  console.log(res);
  alert("Updated");
}
const thirdtitle = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454ff0dd76b066932eb10ef", inputdata9);
  console.log(res);
  alert("Updated");
}
const thirddescription = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454ff0dd76b066932eb10ef", inputdata10);
  console.log(res);
  alert("Updated");
}

const thirdprice = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454ff0dd76b066932eb10ef", inputdata11);
  console.log(res);
  alert("Updated");
}
const thirdimg = async() => {
  const res = await axios.put("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454ff0dd76b066932eb10ef", inputdata12);
  console.log(res);
  alert("Updated");
}


useEffect(() => {
  getData()
}, [])
const getData = async() => {
  const res = await axios.get("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fe70d76b066932eb10e2");
  setPreview(res.data.title);
  setPreview2(res.data.description);
  setPreview3(res.data.price);
  setPreview4(res.data.img);
  const res2 = await axios.get("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454fec8d76b066932eb10ea");
  setPreview5(res2.data.title);
  setPreview6(res2.data.description);
  setPreview7(res2.data.price);
  setPreview8(res2.data.img);
  const res3 = await axios.get("https://dynamic-web-ky2ufexra-dtanwer.vercel.app/featuresdata/6454ff0dd76b066932eb10ef");
  setPreview9(res3.data.title);
  setPreview10(res3.data.description);
  setPreview11(res3.data.price);
  setPreview12(res3.data.img);
}



 
const handleUpdate1 = () => {
  firsttitle(input1);
}
const handleUpdate2 = () => {
  firstdescription(input2);
}
const handleUpdate3 = () => {
  firstprice(input3);
}
const handleUpdate4 = () => {
  firstimg(input4);
}
const handleUpdate5 = () => {
  secondtitle(input5);
}
const handleUpdate6 = () => {
  seconddescription(input6);
}
const handleUpdate7 = () => {
  secondprice(input7);
}
const handleUpdate8 = () => {
  secondimg(input8);
}
const handleUpdate9 = () => {
  thirdtitle(input9);
}
const handleUpdate10 = () => {
  thirddescription(input10);
}
const handleUpdate11 = () => {
  thirdprice(input11);
}
const handleUpdate12 = () => {
  thirdimg(input12);
}




  return (
    <div>
      
      <div className="container">
          <div className="row">
                  <h2>Card 1</h2>
            <div className="col-md-3">
              <Card>
                <Card.Body>
                   
                  <Form.Group controlId="formInput1">
                    <Form.Label>Title</Form.Label>
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
            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput2">
                    <Form.Label>Description</Form.Label>
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
            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput3">
                    <Form.Label>Price</Form.Label>
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

            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput3">
                    <Form.Label>Image</Form.Label>
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
                  <h2>Card 2</h2>
            <div className="col-md-3">
              <Card>
                <Card.Body>
                   
                  <Form.Group controlId="formInput1">
                    <Form.Label>Title</Form.Label>
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
            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput2">
                    <Form.Label>Description</Form.Label>
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
            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={preview7}

                      value={input7}
                      onChange={(e) => setInput7(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleUpdate7}>
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={preview8}

                      value={input8}
                      onChange={(e) => setInput8(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleUpdate8}>
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>


          <div className="row">
                  <h2>Card 3</h2>
            <div className="col-md-3">
              <Card>
                <Card.Body>
                   
                  <Form.Group controlId="formInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={preview9}

                      value={input9}
                      onChange={(e) => setInput9(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleUpdate9}>
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={preview10}

                      value={input10}
                      onChange={(e) => setInput10(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleUpdate10}>
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput3">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={preview11}

                      value={input11}
                      onChange={(e) => setInput11(e.target.value)}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleUpdate11}>
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-md-3">
              <Card>
                <Card.Body>
                  
                  <Form.Group controlId="formInput3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder={preview12}

                      value={input12}
                      onChange={(e) => setInput12(e.target.value)}
                    />
                  </Form.Group>
                  <Button  variant="primary" onClick={handleUpdate12}>
                    Update
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

        
      </div>
 
      
    </div>

  )
}

export default Inventory