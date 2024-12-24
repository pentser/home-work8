/**************************************************************** */
//? tar 1

function createPageDOM(name,sureName)  {
    let $root = document.getElementById("id_root");
    let containerDiv= document.createElement("div");
    containerDiv.className="container";

    let articalName = document.createElement("artical");
    let headerName= document.createElement("h2");
    let paragraphName= document.createElement("p");

    articalName.appendChild(headerName);
    articalName.appendChild(paragraphName);
   

    let articalsureName = document.createElement("artical");
    let headersureName= document.createElement("h2");
    let paragraphsureName= document.createElement("p");

    articalsureName.appendChild(headersureName);
    articalsureName.appendChild(paragraphsureName);


    headerName.textContent=name;
    headersureName.textContent=sureName;
    headerName.classList.add("h2");
    headerName.classList.add("name");
    headersureName.classList.add("h2");
    headersureName.classList.add("sureName");
    paragraphName.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi tempora ipsum, voluptatem eaque officia laborum placeat aliquam possimus, magni vero voluptatibus dicta temporibus in! Iusto, magni quibusdam?";
    paragraphsureName.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id modi tempora ipsum, voluptatem eaque officia laborum placeat aliquam possimus, magni vero voluptatibus dicta temporibus in! Iusto, magni quibusdam?";

    containerDiv.appendChild(articalName);
    containerDiv.appendChild(articalsureName)

    $root.appendChild(containerDiv)


    let header1=createElement("h1");
    header1.className="caption1";
    peregraph1= createElement("p");
    peregraph1.className="pere";
    $root.appendChild(containerDiv);

}


createPageDOM("eli","pentser");



/**************************************************************** */
//? tar 2








