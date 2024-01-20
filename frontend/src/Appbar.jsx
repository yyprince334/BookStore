import { Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import "./index.css";
import { useNavigate } from "react-router-dom";
import "./fonts/Poppins-Light.ttf";

function Appbar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          padding: "10px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          fontFamily="Light"
          onClick={() => {
            navigate("/");
          }}
          variant={"h4"}
        >
          Goodreads
        </Typography>
      </div>
      <div
        style={{
          padding: "10px",
        }}
      >
        <Button
          color="warning"
          variant="soft"
          onClick={() => {
            navigate("/addBook");
          }}
          size="lg"
        >
          Add Book
        </Button>
      </div>
    </div>
  );
}

export default Appbar;
