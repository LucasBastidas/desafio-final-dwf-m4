function addPortFolioCard(params){
    const container = document.querySelector(".portfolio-cont");
    const template = document.querySelector("#template-portfolio");

    template.content.querySelector(".portfolio__title").textContent = params.title;
    template.content.querySelector(".portfolio__description").textContent = params.description;
    template.content.querySelector(".portfolio__image").src = params.image;
    template.content.querySelector(".portfolio__url").href = params.url;
    template.content.querySelector(".portfolio__url").textContent = "Ver más";
    

    const clone = document.importNode(template.content, true);
    container.appendChild(clone)
    


}


function getPortfolio(){
    return fetch("https://cdn.contentful.com/spaces/4yj49dstzzrz/environments/master/entries?access_token=KBtE4RScTZPE8eUXkXCZPNjq1XfSJS8TF3GcQ3QOaUo")
    .then((res)=>{return res.json()})
    .then((json)=>{
        const buscar = json.items.filter((item)=>{
            return item.fields.portfoliotitle
        })
        console.log(buscar)
        const fieldsCollection = buscar.map((item)=>{

            const image = searchImg(item.fields.portfolioimage.sys.id, json);
            const imgUrl = image.fields.file.url;

            return{
                title: item.fields.portfoliotitle,
                description: item.fields.portfoliodescription.content[0].content[0].value,
                image: imgUrl,
                url: item.fields.portfoliourl,
            }
        })
        return fieldsCollection;
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
    
    getPortfolio().then(function(portfolio){
        for (const p of portfolio) {
            addPortFolioCard(p)    
        }
    })


}
main()