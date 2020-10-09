let calculate = (Days, Monthly, Battlepass, Level, Abyss, Tier) => { 
    const date = new Date();
    let today = date.getDay();

    let result = 0;
    for (i = 0; i <= Days; i++){
        result += 45; //Daily log in
        if (Monthly == 'yes') { //Counting Monthly
            result += 60;
            if (i == 0) {
                result += 330;
            } else if (i%15 == 0){
                result += 500;
            }
        }
        if (i%7 == 0 && i != 0) { 
            result += 200; //MA + daily log in
            // Abyss
            if (Level > 80) { //Exalted
                switch (Abyss){
                    case 'forbidden':
                        result += 180*2;
                        break
                    case 'sinful':
                        switch (Tier){
                            case 1:
                                result += 190*2;
                                break
                            case 2:
                                result += 200*2;
                                break
                            case 3:
                                result += 220*2;
                                break
                        }
                        break
                    case 'agony':
                        switch (Tier){
                            case 1:
                                result += 280*2;
                                break
                            case 2:
                                result += 340*2;
                                break
                            case 3:
                                result += 420*2;
                                break
                        }
                        break
                    case 'rl':
                        result += 500*2;
                        break
                    case 'myriad':
                            result += 520*2;
                        break
                }
            } else if (Level >= 70 && Level <= 80) { //Master
                switch (Abyss){
                    case 'sinful':
                        result += 140*2;
                        break
                    case 'agony':
                        result += 220*2;
                        break
                    case 'rl':
                        result += 420*2;
                        break
                    case 'myriad':
                        result += 500*2;
                        break
                }
            } else if (Level >= 60 && Level < 70) { //Elite
                switch (Abyss){
                    case 'sinful':
                        result += 160*2;
                        break
                    case 'agony':
                        result += 220*2;
                        break
                    case 'rl':
                        result += 320*2;
                        break
                }
            }else { //Basic
                switch (Abyss){
                    case 'sinful':
                        result += (0+(25*4))*2;
                        break
                    case 'agony':
                        result += (60+(25*4))*2;
                        break
                    case 'rl':
                        result += (180+(25*4))*2;
                        break
                }
            }
        }
        console.log(result);
    }
    return result;
}

document.getElementById('rank').onchange = function() {showMore()}

let showMore = () => {
    let Level = document.getElementById('level').value;
    let Rank = document.getElementById('rank').value;
    if (Level >= 81 && (Rank == 'sinful' || Rank == 'agony')) {
        document.getElementById('tier-label').style.display = 'block';
        document.getElementById('tier').style.display = 'block';
    } else {
        document.getElementById('tier-label').style.display = 'none';
        document.getElementById('tier').style.display = 'none';
    }
}

let count = () => {
    let result = calculate(
        document.getElementById('days').value,
        document.getElementById('monthly').value,
        document.getElementById('bp').value,
        document.getElementById('level').value,
        document.getElementById('rank').value,
        document.getElementById('tier').value
    );
    document.getElementById('result').innerHTML = `your crystal income accumulation is : ${result} <img`;
}