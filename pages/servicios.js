function addServiceCard(params){
    const container = document.querySelector(".services-cont");
    const template = document.querySelector("#template-service");

    template.content.querySelector(".service__imagen").src = params.image;
    template.content.querySelector(".service__title").textContent = params.title;
    template.content.querySelector(".service__description").textContent = params.description;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);

    console.log(container)


}






function getServices(){
    return fetch("https://cdn.contentful.com/spaces/4yj49dstzzrz/environments/master/entries?access_token=KBtE4RScTZPE8eUXkXCZPNjq1XfSJS8TF3GcQ3QOaUo")
    .then((res)=>{return res.json()})
    
    .then((json)=>{
        const buscar = json.items.filter((item)=>{
            return item.fields.servicetitle
        })
        console.log(buscar)
        const fieldsCollection = buscar.map((item)=>{
            
            const image = searchImg(item.fields.serviceimage.sys.id, json);
            const imgUrl = image.fields.file.url;
            console.log(imgUrl);


            return {
                title: item.fields.servicetitle,
                description: item.fields.servicedescription.content[0].content[0].value,
                image: imgUrl,

            }
            
        })
        return fieldsCollection
    })


}
function searchImg(id, data ){
    const arrayEncontrado = data.includes.Asset.find((i)=>{
        return i.sys.id === id
    })
    return arrayEncontrado;
}



function main(){
    const footerCont = document.querySelector(".footer-cont")
    const headerCont = document.querySelector(".header-cont")
    headerComponent(headerCont)
    footerComponent(footerCont)
    
    getServices().then(function(services){
        for (const s of services) {
       addServiceCard(s)    
        }
    })


}
main()