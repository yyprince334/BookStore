import axios from "axios";

export const handleDeleteBook = async (id, setBooks) => {
  axios
    .delete(`http://localhost:3000/deleteBook/${id}`)
    .then((res) => {
      if (res.status === 200) {
        axios.get("http://localhost:3000/getAllBooks").then((response) => {
          setBooks(response.data);
        });
        console.log("Book deleted successfully");
      } else {
        console.error("Failed to delete book:", res.data.message);
      }
    })
    .catch((err) => {
      console.error("Error deleting book:", err);
      // console.log();
    });
};
