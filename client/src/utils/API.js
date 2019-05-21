import axios from "axios";

export default {
  // Gets all dares
  getDares: function() {
    return axios.get("/api/dares");
  },
  // Gets the dare with the given id
  getDare: function(id) {
    return axios.get("/api/dares/" + id);
  },
  // Deletes the dare with the given id
  deleteDare: function(id) {
    return axios.delete("/api/dares/" + id);
  },
  // Saves a dare to the database
  saveDare: function(dareData) {
    return axios.post("/api/dares", dareData);
  }
};
