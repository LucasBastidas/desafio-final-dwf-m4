function footerComponent(el){
    const footerEl = document.createElement("div");
    footerEl.innerHTML = `
    <footer class="footer">
    <img src="./logo.png" class="footer__logo">
    <ul class="footer__redes-list">
        <li>  <span><img src="https://cdn-icons-png.flaticon.com/512/1384/1384089.png" class="footer__redes-list-logo"></span>     <a href="">Instagram</a> </li>
        
        <li>    <span><img src="https://cdn-icons-png.flaticon.com/512/1419/1419518.png" class="footer__redes-list-logo"></span>    <a href="">Linkedin</a></li>

        <li>    <span><img src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" class="footer__redes-list-logo "></span>   <a href="">Github</a></li>

    </ul>
</footer>
    
    `
    el.appendChild(footerEl)
}