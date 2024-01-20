/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Typography from "@mui/material/Typography";

function getBookById() {
  const [book, setBook] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/getBookById/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <>
      <div>
        <Typography textAlign="center" fontFamily={"Light"} variant="h3">
          {book.title}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <img
          src="https://staticg.sportskeeda.com/editor/2020/08/1a2c1-15977865196143-800.jpg"
          alt="Goku Sans"
          style={{
            widht: "400px",
            height: "400px",
            paddingBottom: "0.2em",
          }}
        ></img>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Typography variant="h5" fontFamily={"Light"}>
              {book.author}
            </Typography>
          </div>
          <div>
            <Typography variant="h5" fontFamily={"Light"}>
              {book.publishYear}
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography variant="h5" fontFamily={"Light"}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
          repellat velit voluptatem dolor sint soluta aspernatur, voluptate,
          rerum, delectus ad nisi perspiciatis illum illo doloribus. Aspernatur
          delectus asperiores doloribus omnis. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Fugiat repellat velit voluptatem dolor
          sint soluta aspernatur, voluptate, rerum, delectus ad nisi
          perspiciatis illum illo doloribus. Aspernatur delectus asperiores
          doloribus omnis. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Fugiat repellat velit voluptatem dolor sint soluta aspernatur,
          voluptate, rerum, delectus ad nisi perspiciatis illum illo doloribus.
          Aspernatur delectus asperiores doloribus omnis. Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Fugiat repellat velit voluptatem
          dolor sint soluta aspernatur, voluptate, rerum, delectus ad nisi
          perspiciatis illum illo doloribus. Aspernatur delectus asperiores
          doloribus omnis.
        </Typography>
      </div>
    </>
  );
}

export default getBookById;
