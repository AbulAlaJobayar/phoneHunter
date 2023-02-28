const loadPhone= async(searchText)=>{
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data);
};
const displayPhone= (phones)=>{
    const container= document.getElementById('phoneContainer');
    container.innerHTML='';
    // show 20 data
    phones = phones.slice(0,20);
    // check validation
    if (phones.length===0){
        const check= document.getElementById('idcheck')
        check.classList.remove('d-none')
    }
    else{
        const check= document.getElementById('idcheck')
        check.classList.add('d-none')
    }


    phones.forEach(phone => {
        console.log(phone);
        const div=document.createElement('div');
        div.classList.add('col')
        div.innerHTML=`
        <div class="card p-4">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.</p>
        </div>
    </div>
        `
        container.appendChild(div)

});
    // stop Spinier
    spinier(false)
}

const searchInput=()=>{
   const inputType= document.getElementById('input');
   const inputValue=inputType.value;
   inputValue.value='';
   loadPhone(inputValue);

// start spinier
 spinier(true);

}

const spinier=isloding=>{
    const data= document.getElementById('getSpinier');
    if(isloding){
        data.classList.remove('d-none')
    }
    else{
        data.classList.add('d-none')
    }
}

// loadPhone()