async function fetchdata(){
    try{
        const res= await fetch("https://api-mobilespecs.azharimm.site/v2/brands");
        const data= await res.json();
        console.log(data.data);
        const listBrands =data.data;
        document.querySelector(".brand").innerHTML="";
        const pagination= document.querySelector(".pagination");
        const noOfPages =Math.ceil(listBrands.length/10);
        for(let i=1;i<= noOfPages;i++){
            const page =document.createElement("button");
            page.innerText=i;
            pagination.append(page);
            page.onclick= () =>{
                const pageList =listBrands.slice((i-1)*10, i*10);
                document.querySelector(".brand").innerHTML="";
                pageList.forEach(list => createBrand(list));
            }
        }
    }
    catch(err){
        console.log("error has occured",err);
    }
}
fetchdata();

function createBrand(Brand){
    const container= document.querySelector(".brand");
    container.innerHTML +=`
    <div class="brandspecifications">
    <p><strong>Brand id:</strong> ${ Brand.brand_id}</p>
    <p><strong>Brand Name:</strong>${ Brand.brand_name}</p>
    <p><strong>Brand slug:</strong> ${Brand.brand_slug} </p>
    <p><strong>Device count:</strong> ${Brand.device_count} </p>
    <p><strong>Details : </strong> ${Brand.detail} </p>
    </div>
    `
    ;
}

