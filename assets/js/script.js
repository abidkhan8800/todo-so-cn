var ids = [];
      var checkedItems = document.getElementsByClassName("class-checked");
      var taskTobe = document.getElementById("delete-tasks-form");
      for (let t = 0; t < checkedItems.length; t++) {
        checkedItems[t].addEventListener("click", function (e) {
          ind = ids.findIndex((i) => i == e.target.value);
          console.log(ind);
          if (ind == -1) {
            ids.push(e.target.value);
            let ele = document.createElement("input");
            ele.type = "hidden";
            ele.value = e.target.value;
            ele.name = e.target.value;
            ele.id = e.target.value;
            taskTobe.appendChild(ele);
          } else {
            ids.splice(ind, 1);
            let el = document.getElementById(ids[ind]);
            el.remove();
          }
        });
      }