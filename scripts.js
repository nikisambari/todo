update();
function adder() {
  console.log("Added Succesfully");
  task = document.getElementById('input-text').value;
  if (localStorage.getItem('itemsjson') == null) {
    taskarray = [];
    taskarray.push([task]);
    localStorage.setItem('itemsjson', JSON.stringify(taskarray))
    
  }
  else {
    taskarrayStr = localStorage.getItem('itemsjson');
    taskarray = JSON.parse(taskarrayStr)
    taskarray.push([task])
    localStorage.setItem('itemsjson', JSON.stringify(taskarray))
  }
  update();
  document.getElementById('input-text').value=""
}
function remove(itemidx) {
  taskarrayStr = localStorage.getItem('itemsjson');
  taskarray = JSON.parse(taskarrayStr)
  taskarray.splice(itemidx,1);
  localStorage.setItem('itemsjson', JSON.stringify(taskarray))
  console.log("removed successfully" + itemidx)
  update();
}
function update() {
  taskarrayStr = localStorage.getItem('itemsjson');
  taskarray = JSON.parse(taskarrayStr)
  let table = document.getElementById("table-body");
  let str = "";
  if(localStorage.getItem('itemsjson')!=null){
    taskarray.forEach((element, index) => {
      str +=
        `<tr>
      <td>${element[0]}</td>
      <td class="check-btn" onclick="remove(${index })">&#10003;</td>
      </tr>`
    });
    table.innerHTML = str;
  }
}
function clear() {
  localStorage.clear();
  let table = document.getElementById("table-body");
  table.innerHTML="";
  document.getElementById('input-text').value=""
}
add = document.getElementById("adder");
add.addEventListener("click", adder);

clr = document.getElementById("clear");
clr.addEventListener("click", clear)