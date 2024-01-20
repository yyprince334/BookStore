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
        <Typography
          style={{
            color: "black",
            paddingBottom: "30px",
          }}
          textAlign="center"
          fontFamily={"Light"}
          variant="h3"
        >
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
            paddingBottom: "2em",
            paddingRight: "30px",
            position: "relative",
          }}
        ></img>
        <div
          style={{
            // display: "grid",
            // justifyContent: "space-between",
            gap: "1em",
          }}
        >
          <div>
            <Typography
              style={{
                color: "black",
              }}
              variant="h5"
            >
              Author : {book.author}
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                color: "black",
              }}
              variant="h5"
            >
              Publish Year: {book.publishYear}
            </Typography>
          </div>
        </div>
      </div>
      <div>
        <Typography
          style={{
            color: "black",
          }}
          variant="h6"
        >
          Dragon Ball Z[c] is a Japanese anime television series produced by
          Toei Animation. Part of the Dragon Ball media franchise, it is the
          sequel to the 1986 Dragon Ball television series and adapts the latter
          325 chapters of the original Dragon Ball manga series created by Akira
          Toriyama. The series aired in Japan on Fuji TV from April 1989 to
          January 1996, and was later dubbed for broadcast in at least 81
          countries worldwide.[6] Dragon Ball Z continues the adventures of Son
          Goku in his adult life as he and his companions defend the Earth
          against villains including aliens (Vegeta, Freeza), androids (Cell),
          and magical creatures (Majin Boo). At the same time, the story
          parallels the life of Goku's son, Gohan, as well as the development of
          his rivals, Piccolo and Vegeta.
        </Typography>
      </div>
    </>
  );
}

export default getBookById;
