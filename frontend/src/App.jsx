import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import { handleDeleteBook } from "./deleteBook";
import { useNavigate } from "react-router-dom";
import "./fonts/Poppins-Light.ttf";
import "./fonts/Poppins-Bold.ttf";
import { rgbToHex } from "@mui/material";

function App() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/getAllBooks").then((response) => {
      setBooks(response.data);
    });
  }, []);

  if (!books) return <>No data</>;

  const deleteBooks = (id) => {
    handleDeleteBook(id, setBooks);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {books.map((book) => (
          <>
            <div key={book._id}>
              <Card
                // variant={"outlined"}

                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "2px solid black",
                  borderRadius: "0.2em",
                  height: 400,
                  width: 300,
                  backgroundColor: "#fff8ef",
                }}
              >
                <div>
                  <Typography
                    onClick={() => {
                      navigate(`/getBookById/${book._id}`);
                    }}
                    textAlign="center"
                    fontFamily="Light"
                    variant="h5"
                    sx={{ mb: 1.5 }}
                    color="black"
                  >
                    {book.title}
                  </Typography>

                  <Typography fontFamily="Light" sx={{ mb: 1.5 }} color="black">
                    {book.author}
                  </Typography>

                  <Typography fontFamily="Light" sx={{ mb: 1.5 }} color="black">
                    {book.publishYear}
                  </Typography>

                  <img
                    src="https://staticg.sportskeeda.com/editor/2020/08/1a2c1-15977865196143-800.jpg"
                    alt="Goku Sans"
                    style={{
                      widht: "100px",
                      height: "200px",
                      paddingBottom: "0.2em",
                      border: "1px solid",
                    }}
                  ></img>
                </div>

                <Stack direction="row" spacing={20}>
                  <Button
                    onClick={() => {
                      navigate(`/updateBook/${book._id}`);
                    }}
                    variant="outlined"
                    style={{
                      color: "black",
                      borderColor: "black",
                      borderRadius: "3px",
                      borderWidth: "2px",
                    }}
                  >
                    Update
                  </Button>
                  <IconButton
                    onClick={() => deleteBooks(book._id)}
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>
              </Card>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default App;
