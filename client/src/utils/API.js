import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  getLines: function() {
    return axios.get("/api/lines").then(response => response.data)
  },
  getNbaLines: function() {
    return axios.get("/api/nbaLines").then(response => response.data)
  },
  getGames: function (){
    return axios.get("/api/nba/games")
  },
    
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};


/*
ES6 => response => response.data
ES5 => function(response) {
        return response.data
      }
*/