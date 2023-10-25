let tasks=["Reading","Watching"]
const show=()=> {
    let str="";
    tasks.forEach((t, index) => str = str + `<span>${t}</span><button onclick="removeTask(${index})">Remove</button><br>`);
    document.getElementById("list1").innerHTML=str;
}
const addTask=()=> {
    let task=document.getElementById("t1").value;
    tasks=[...tasks,task];
    show();
}
const removeTask = (index) => {
    tasks.splice(index, 1);
    show();
}