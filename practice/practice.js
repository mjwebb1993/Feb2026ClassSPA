import axios from "axios";

axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
    .then(response => console.log(`Pikachu's weight is ${response.data.weight}`));

axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
    .then(response => console.log(`Pikachu's height is ${response.data.height}`));

axios.get("https://pokeapi.co/api/v2/location/canalave-city/")
    .then(response => console.log(response.data.region.name))

async function get_weight(name) {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
    console.log(response.data.weight)
}

get_weight("pikachu")
get_weight("clefairy")