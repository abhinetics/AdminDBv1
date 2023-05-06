import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsPDF from 'jspdf';
import './style.css'

const Customers = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token is " + token);
    if (!token || token === "undefined") {
      console.log("inside if");
      window.location.href = "/";
    }
  }, []);
  
  
  const [msg, setMsg] = useState('');

  const getQuery = async () => {
    try {
      const response = await axios.get('https://dynamic-web-api.vercel.app/message');
      setMsg(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getQuery();
  }, []);

  const handleDownload = () => {
    const doc = new jsPDF();
    let y = 10;
    msg.forEach((item) => {
      doc.text(`Name: ${item.userName}`, 10, y);
      doc.text(`Email: ${item.UserEmail}`, 10, y + 10);
      doc.text(`Message: ${item.Message}`, 10, y + 20);
      y += 40;
    });
    doc.save('messages.pdf');
  };

  return (
    <div className="container">
      <button onClick={handleDownload} className='btn btn-primary' style={{ marginTop: '10px' }} >Download PDF</button>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Query</th>
          </tr>
        </thead>
        <tbody>
          {msg && msg.map((item) => (
            <tr key={item.id}>
              <td>{item.userName}</td>
              <td>{item.UserEmail}</td>
              <td>{item.Message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
