/* eslint-disable react-hooks/rules-of-hooks */
import Card from "@mui/material/card";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Button from "@mui/joy/Button";
import Input from "@mui/joy/Input";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function updateBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const updateBook = () => {
    axios
      .put(`http://localhost:3000/updateBook/${id}`, {
        title: title,
        author: author,
        publishYear: publishYear,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error("Error updating book:", err);
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
            <Typography variant="h6"> Update Details</Typography>
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
              onChange={(e) => {
                setTitle(e.target.value);
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
              placeholder="Enter author details..."
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
                updateBook();
              }}
              color="success"
              variant="soft"
            >
              Update
            </Button>
          </div>
        </Card>
      </div>
    </>
  );
}

export default updateBook;
