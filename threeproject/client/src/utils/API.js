import React from "react";
import axios from "axios";

const BASEURL = "https://deezerdevs-deezer.p.rapidapi.com/search";
const APIKEY = "https://deezerdevs-deezer.p.rapidapi.com/search";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get("https://api.deezer.com/search?q=" + query);
  }
};