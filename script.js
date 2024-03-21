
// API: https://rapidapi.com/worldapi/api/open-weather13

const search = document.getElementById('searchsubmit');
const searchinput = document.getElementById('searchinput');

search.addEventListener('click',handleClick);

async function fetchWeather(city) {
    try{
    let res = await fetch(`https://open-weather13.p.rapidapi.com/city/${city}`, {
        headers: {
            "X-RapidAPI-Key": "b05463f7e5msh3f29a831384f911p14171ajsn406ac12a96ed",
            "X-RapidAPI-Host": "open-weather13.p.rapidapi.com"
        }
    })

    res = await res.json();
    return {
        success: true,
        data: res
    };
}
catch(err){
    return {
        success: false,
        data: null
    }
}
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

async function handleClick(e){
    e.preventDefault();

    const city = searchinput.value;
    if(!city || city.length < 3){
        return;
    }

    console.log(city);

    const data = await fetchWeather(city);
    tempData = data.data.main;
    console.log(fahrenheitToCelsius(tempData.temp))
}