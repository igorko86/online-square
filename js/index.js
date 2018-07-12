class SquareList {
    constructor(fileJson,toBlock){
        fetch(fileJson).then(result => result.json()).then(squeares => {
            this.squeares = squeares;
            this.insert(toBlock,squeares);
        })
    }
    insert(container,squares){
        let list = ""
        console.log(squares);
        squares.forEach(sqr =>{
            list += "<div style= 'width:" + sqr.width +"; "+"background:"+sqr.background+ "'>"+ sqr.name+"</div>";
        })
        
        container.innerHTML = list;
    }
}
const elSquare = document.querySelector(".squars");
const squares = new SquareList("squares.json",elSquare);
console.log(squares);