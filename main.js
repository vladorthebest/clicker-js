let count = 0;
const TIME_CLICKER = 10;
let record = 0;

const clicker = document.getElementById("clicker");
clicker.addEventListener("click", touch_button);

function touch_button(){
    if (count == 0){
        let start = Date.now();

        const time = setInterval(function(){
            let delta = Date.now() - start;
            if(Math.floor(delta/1000 < TIME_CLICKER+1)){
                const timer = document.getElementById("timer");
                timer.textContent = Math.floor(delta/1000);
            }
            else{
                max_record(count);
                count = 0;
                count_html.textContent = String(count);

                delta = 0;
                timer.textContent = Math.floor(delta/1000);
                clearInterval(time);
            }
        }, 1000);
    }
    const count_html = document.getElementById("counter");
    count += 1;
    count_html.textContent = String(count);
}

function max_record(count){
    if (count > record){
        record = count;
        const max = document.getElementById("max");
        max.textContent = String(record);
    }
}



