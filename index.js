var players_url = 'https://data.jdfgc.net/names.json'
var pools_url = 'https://data.jdfgc.net/pools.json'

var pools = Object()
var players = Object()

fetch(pools_url)
    .then(response=> response.json())
    .then(json => {
        pools = json
        console.log(pools)
    })

fetch(players_url)
    .then(response=> response.json())
    .then(json => {
        players = json
        console.log(players)
        fetch(pools_url)
    .then(response=> response.json())
    .then(json => {
        pools = json
        console.log(pools)
        for(const [key, value] of Object.entries(players)){
            console.log(`${key} : ${value}`)
            main_div = document.getElementById("main")
            player_div = document.createElement("div")
            player_div.className = "playerDiv"
            player_name = document.createElement("h2")
            player_name.innerText = value
            main_div.appendChild(player_name)
            
            console.log(pools[key])
            for(const pool of pools[key]){
                pool_div = document.createElement("div")
                pool_div.className = "poolDiv"
                game_name = document.createElement("h3")
                game_name.innerText = "Game: " + pool['Event']
                pool_station = document.createElement("h3")
                pool_station.innerText = "Wave/Station: " + pool['Pool']
                pool_date = new Date(pool['time'] * 1000)
                days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', "Fri", "Sat"]
                day = days[pool_date.getDay()]
                time = pool_date.toLocaleString('en-US', {hour: 'numeric',minute:'numeric', hour12: true})
                time_text = document.createElement("h3")
                time_text.innerText = "Time: " + day + " " + time
                pool_div.appendChild(game_name)
                pool_div.appendChild(pool_station)
                pool_div.appendChild(time_text)
                player_div.appendChild(pool_div)
            }
            main_div.appendChild(player_div)
            
        }
        
    })
        
    })

