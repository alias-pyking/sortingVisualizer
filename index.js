const elements = document.querySelector(".elements");

const showElements =(array)=>{
    for(let i = 0; i < array.length;i++) {
        const node = document.createElement("div");
        node.id = i+1;
        node.style.height=`${array[i]}px`;
        node.classList = [...node.classList,'bar'].join(' ');
        elements.appendChild(node);
    }
}

const originalArray = [50,60,90,200,900,800,30,20,10,90,12,232,123,213,12,43,234,53,2,53,43,5,2,5,23,5,2,52,42,42,90,1000,394,292,948,23,342,89,232,1,22,122,12,113,902,232,47,47,88,88,27,32,45,78.98,78];
let array = [...originalArray];

showElements(array);

// Bubble sort algorithm visualization 
const bubbleSortButton = document.getElementById("bubbleSort");
bubbleSortButton.addEventListener("click",(event) => {
    const bars = document.getElementsByClassName("bar");
    bubbleSort(bars);
});

function bubbleSortAnimate(bars,j) {
    
}
const bubbleSort = async(bars) => {
    // for(let i = 0; i < bars.length; i++) {
    //     bars.item(i).classList = [...bars.item(i).classList,'red'].join(' ');
    // }
    const n = bars.length;
    for(let i = 0; i < n - 1; i++) {
        
            setTimeout(function() {
                for(let j = 0; j < n - i -1;j++) {
                console.log(j);
                document.getElementById(bars.item(j).id).className = 'bar bar-selected';
                document.getElementById(bars.item(j + 1).id).className = 'bar bar-selected';
                let bar1 = Number.parseInt(bars.item(j).style.height.slice(0,- 2));
                let bar2 = Number.parseInt(bars.item(j + 1).style.height.slice(0,-2));
                if(bar1 > bar2) {
                    bars.item(j).style.height  = `${bar2}px`;
                    bars.item(j + 1).style.height = `${bar1}px`;
                }
                document.getElementById(bars.item(j).id).className = 'bar';
                document.getElementById(bars.item(j + 1).id).className = 'bar bar-completed'; 
            }
            },100 * (i+1));
        }
}
const resetButton = document.getElementById('initial');

resetButton.addEventListener("click",(event) => {
    const bars = document.getElementsByClassName("bar");
    for(let i = 0;i < bars.length; i++) {
        bars.item(i).style.height = `${originalArray[i]}px`;
    }
});