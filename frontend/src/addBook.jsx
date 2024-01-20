/* eslint-disable react-hooks/rules-of-hooks */
import Card from "@mui/material/card";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const addBook = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  const addNewBook = () => {
    axios
      .post("http://localhost:3000/addBook", {
        title: title,
        author: author,
        publishYear: publishYear,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
        }
        const addedBook = response.data;

        console.log("Book added successfully:", addedBook);
      })
      .catch((err) => {
        console.error("Error adding book:", err);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            width: "500px",
            height: "300px",
            border: "1px soft",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography variant="h6"> Add Book</Typography>
          </div>
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <Input
              color="neutral"
              variant="soft"
              size="lg"
              placeholder="Enter title details..."
              // value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></Input>
          </div>
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <Input
              color="neutral"
              variant="soft"
              size="lg"
              placeholder="Enter author details..."
              // value={author}
              onChange={(e) => {
                setAuthor(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              paddingTop: "20px",
            }}
          >
            <Input
              color="neutral"
              variant="soft"
              size="lg"
              placeholder="Enter publish year"
              // value={publishYear}
              onChange={(e) => {
                setPublishYear(e.target.value);
              }}
            />
          </div>

          <div
            style={{
              paddingTop: "40px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              onClick={() => {
                addNewBook();
              }}
              color="success"
              variant="soft"
            >
              Push
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default addBook;
