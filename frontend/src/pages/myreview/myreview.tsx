
import React, { useState, useEffect } from "react";
import NaLink from 'react-router-dom'
import Header1 from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Input } from 'antd';
import {  Layout } from 'antd';
import { GetReview } from '../../services/https';
import { GetRating } from '../../services/https';
import type { ColumnsType } from 'antd/es/table';
import { Space, Table, Tag } from 'antd';
import { ReviewInterface } from '../../interfaces/lReview';
import { RatingInterface } from '../../interfaces/lRating';


const Myreveiw = () => {

  const [review, setReview] = useState<ReviewInterface[]>([]);
  const [rating, setrating] = useState<RatingInterface[]>([]);
  
  const getReview = async () => {
    let res = await GetReview();
    if (res) {
      setReview(res);
    }
  };
  
  const getRating = async () => {
    let res = await GetRating();
    if (res) {
      setrating(res);
    }
  };
  
  useEffect(() => {
    getReview();
    getRating();
  }, []);
  
  
  
  
  const columns: ColumnsType<ReviewInterface> = [
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "namecommic",
      dataIndex: "namecommic",
      key: "namecommic",
    },
    {
      title: "Comment",
      dataIndex: "Comment",
      key: "Comment",
    },
    {
      title: "RatingID",
      dataIndex: "RatingID",
      key: "RatingID",
      
    },

    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a href="/Createreview">Edit</a>
        </Space>
      ),
    },
  ];
  
  

  return (
    <>
      <Header1 />
      <Navbar />
      <Layout>
        <div className=" h-screen  ">
          <h1 className="text-3xl text-center  card w-96 p-6 shadow-lg m-auto mt-10">
            รีวิวของฉัน
          </h1>
          <div className="m-10">
            <h2 className="text-1xl mt-20 text-left ">
              กรุณากรอกคำที่คุณต้องการค้นหา
            </h2>
            <Input className="  w-64   " placeholder="ค้นหา" />
          </div>
          <Table columns={columns} dataSource={review}   />
       </div>
          
      </Layout>
    </>
  ); 
};

export default Myreveiw;
