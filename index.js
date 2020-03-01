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

const originalArray = [];
let size = 200;
for(let i = 1; i < size; i++) {
    let number = Math.random() * 800;
    originalArray.push(parseInt(number));
}
let array = [...originalArray];
console.log(array);
showElements(array);

// Bubble sort algorithm visualization 
const bubbleSortButton = document.getElementById("bubbleSort");
bubbleSortButton.addEventListener("click",(event) => {
    const bars = document.getElementsByClassName("bar");
    bubbleSort(bars);
});

function bubbleSortAnimate(bars, order) {
    document.getElementById(bars.item(order[0][0]).id).className = 'bar bar-selected';
    document.getElementById(bars.item(order[0][1]).id).className = 'bar bar-selected'; 
    for(let idx = 0; idx < order.length; idx++) {
        let i = order[idx][0];
        let j = order[idx][1];
        setTimeout(() => {
            let bar1 = Number.parseInt(bars.item(i).style.height.slice(0,- 2));
            let bar2 = Number.parseInt(bars.item(j).style.height.slice(0,-2));
            console.log(bar1, bar2);
            console.log(idx);
            if(bar1 > bar2) {
                bars.item(i).style.height  = `${bar2}px`;
                bars.item(j).style.height = `${bar1}px`;
            }
            document.getElementById(bars.item(i).id).className = 'bar';
            document.getElementById(bars.item(j).id).className = 'bar bar-completed';
            document.getElementById(bars.item(order[idx + 1][0]).id).className = 'bar bar-selected';
            document.getElementById(bars.item(order[idx +1][1]).id).className = 'bar bar-selected';

        },5 * idx); 
    }
}
const bubbleSort = async(bars) => {
    // for(let i = 0; i < bars.length; i++) {
    //     bars.item(i).classList = [...bars.item(i).classList,'red'].join(' ');
    // }

    const n = bars.length;
    const order = [];
    for(let i = 0; i < n - 1; i++) {
            for(let j = 0; j < n - i -1;j++) {
                order.push([j,j+1]); 
        }
    }
    bubbleSortAnimate(bars, order);

}
const resetButton = document.getElementById('initial');

resetButton.addEventListener("click",(event) => {
    const bars = document.getElementsByClassName("bar");
    for(let i = 0;i < bars.length; i++) {
        bars.item(i).style.height = `${array[i]}px`;
    }
});