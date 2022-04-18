const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://www.yelp.com/search?find_desc=restaurants&find_loc=Kirkland%2C+WA&ns=1';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);
  })

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));
