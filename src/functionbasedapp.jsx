function FnApp(props){
    const name = "ReactJs"
    const shoot =() =>{
        alert("You Clicked the button")
    }
    const datashoot= (a,b) =>{
        alert(a);
        alert(b.type);
    }
    return(
        <div className="App">
        <h1>{props.text}</h1>
        <h1>Welcome to {name}</h1>
        <button onClick={shoot}>Click</button>
        <button onClick={(e)=> datashoot("hello",e)}>Click</button>
        <hr />
        </div>
    );
}
export default FnApp;