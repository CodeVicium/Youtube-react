import axios from "axios";

const apiKey = "AIzaSyAI5qJHdmumRjEC1eCsaIiiiylpPUAUQFE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    key: apiKey
}

});

