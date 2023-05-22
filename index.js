var players_url = 'https://data.jdfgc.net/names.json'
var pools_url = 'https://data.jdfgc.net/pools.json'
var waves_url = 'https://data.jdfgc.net/waves.json'

async function getWaves(){
    return await fetch(waves_url)
    .then(response=> response.json())
    .then(json => {
        waves = json
        console.log(waves)
        return waves
    })

}

async function test(){
    waves= await getWaves()
    console.log("yeah")
    main_div = document.getElementById('main')
    for(const [key, data] of Object.entries(await waves)){
        wave_name = document.createElement('h2')
        timestamp = data['time']
        datetime = new Date(timestamp * 1000)
        days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', "Fri", "Sat"]
        day = days[datetime.getDay()]
        time = datetime.toLocaleString('en-US', {hour: 'numeric',minute:'numeric', hour12: true})
        wave_name.innerText = "Wave " + key + " " + day + " " + time
        main_div.appendChild(wave_name)

        for(const [game, info] of Object.entries(data['events'])){
            game_name = document.createElement("h3")
            game_name.innerText = game
            main_div.appendChild(game_name)

            for(const [player, station] of Object.entries(info)){
                player_data = document.createElement("p")
                player_data.innerText = player + " " + station
                main_div.appendChild(player_data)
            }
        }
        
    }
}

test()
