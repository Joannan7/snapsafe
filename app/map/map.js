const { getJson } = require('serpapi');
const util = require('util');
require('dotenv').config();

const API_KEY = process.env.API_KEY;

getJson({
    api_key: API_KEY,
    engine: 'google_maps',
    q: 'pizza',
    google_domain: "google.com",
    ll: "@40.7455096,-74.0083012,14z",
    type: "search",
    hl: "en",
    start: "20"

}, (results) => {
    results.local_results.forEach(result => {
        console.log(`${result.place_id} | ${result.title} | ${result.address}`);
    });
});