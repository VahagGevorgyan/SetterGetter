"use strict"

const obj = {
    name: [], 
  
    set current(value) {
      let arr = value.split(" ");
      for (let i = 0; i < arr.length; i++) {
        obj.name.push([arr[i], arr[i].length]);
      }
    },
  };
  obj.current = "Hovhannes Sona";
  console.log(obj.name);
  