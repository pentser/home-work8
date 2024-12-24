class Car {
    name;
    description;
    price;

    constructor(name,description,price) {
       this.name=name;
       this.description=description;
       this.price=price;
    }

    getPrice() {
        return this.price;
    }

    render() {
        let row=document.querySelector("#id_row");
        let colDiv=document.createElement('col');
        colDiv.className="col";

        let card= document.createElement("div");
        card.className=card;
        card.innerHTML=`
                       <h2>${this.name}</h2>
                       <p>${this.description}</p>
                       <h3>price: ${this.price}</h3>
                       `;
       colDiv.appendChild(card);
       row.appendChild(colDiv);

       /* <!-- <div class="col">
        <div class="card">
            <h2>name: Mazda</h2>
            <p>description:  good car, model 2021</p>
            <h3>price: 34000</h3>
        </div>
    </div> -->*/

    }
}