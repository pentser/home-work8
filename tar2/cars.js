const cars = [
    { name: "Mazda",
      deccription: "good car, model 2021",
      price: 34000
    },

    { name: "Tyota",
      deccription: "fantastic car, model 2012",
      price: 74000
    },

    { name: "Hunda",
      deccription: "doctor's owner car, model 2017",
      price: 31000
    },

    { name: "Fiat",
      deccription: "greate car, model 2024 ",
      price: 94000
    },
    { name: "Mazda",
      deccription: "fine car, model 2022",
      price: 36500
    },

    { name: "Nisan",
      deccription: "fantastic car, model 2018",
      price: 24050
    },

    { name: "Hunda",
      deccription: "doctor's owner car, model 2017",
      price: 31000
    },

    { name: "merz",
      deccription: "hybread car, model 2024 ",
      price: 194000
    }
]

function getCars(limit=24050) {

  let row= document.querySelector("#id_row");
  row.innerHTML="";
  cars.forEach((car)=> {
    if(car.price<=limit) {
      let car1= new Car(car.name,car.deccription,car.price);
      car1.render();
    }
  })

}

getCars();

function eventFromHtml() {

 
  let price=document.querySelector("#price");
  price.addEventListener("input",(e)=>{
    console.log(e.target.value)
    getCars(e.target.value);
  })
}

eventFromHtml();