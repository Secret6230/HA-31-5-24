import "./Listing.css";
function Listing ({Name, Preis}) {
return(
    <>
<div>

    <a href="https://www.cars.com/ " target="_blank" rel="noreferrer">
    <h1 style={{textAlign:"center"}}>CARS</h1>

    
    </a>

    <a href="https://www.cars.com/shopping/all/tesla-model_3/" target="_blank" rel="noreferrer">
    <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/ecbc4cd8-5926-4f8e-b320-56d6e4e14665/ef196f60-908e-47e3-a94a-8ee9e06064eb.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>
    

    <a href="https://www.cars.com/shopping/all/tesla-model_s/" target="_blank" rel="noreferrer"> 
    <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/cd74e70d-68ee-44dc-85a8-3edcf3ffe348/acd2cd85-209c-45f2-9033-8c1033ea8745.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <a href="https://www.cars.com/shopping/all/nissan-leaf/" target="_blank" rel="noreferrer">
    <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/07827872-c533-4f5f-8931-3a911250aaf0/96548bd5-fb31-4570-b31a-517e2ebe5408.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <a href="https://www.cars.com/shopping/all/tesla-model_y/" target="_blank" rel="noreferrer">
   <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/77aeca88-d0af-4824-bbfd-d84ce2538524/1af0ca3f-5236-47a5-a487-32b49ec94f27.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <a href="https://www.cars.com/shopping/all/ford-mustang_mach_e/" target="_blank" rel="noreferrer">
    <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/0b86a23a-a3e2-476d-b459-4fa8ac478fa1/72670da9-7623-457c-8be7-e7c0254487d9.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <a href="https://www.cars.com/shopping/all/ford-f_150_lightning/" target="_blank" rel="noreferrer">    
    <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/607e07e8-c829-4ec3-ba7a-20771f79bd64/e86ac423-47a9-4dd6-a83f-888431ed12aa.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <a href="https://www.cars.com/shopping/all/bmw-i3/" target="_blank" rel="noreferrer">    
    <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/bc5d4734-5bf0-4fda-acf3-265023f70310/a417d9ea-b2bf-40b1-80cc-24c0e84ea083.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <a href="https://www.cars.com/shopping/all/porsche-taycan/" target="_blank" rel="noreferrer">
    <img src="https://platform.cstatic-images.com/medium/in/v2/stock_photos/4d5d6447-7176-4949-b488-3b8bd7d9c21f/135cf77b-ecb6-4ed9-8d1e-f78253fce5d4.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <a href="https://www.cars.com/electric-cars/#ev-101" target="_blank" rel="noreferrer">  
    <img src="https://www.cars.com/images/editorial-electric.png" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
    </a>


    <img src="https://www.cars.com/images/garage-landing/garage-hero.webp" 
    alt="Auto" 
    style={{width: "300px", height: "auto"}}/>
                
        <h2>
            Name : {Name}
        </h2>

        <h2>
            Preis : {Preis}€
        </h2>
        <br></br>
        <div style = {{border: "10px dashed black"}}></div>

        <div style = {{border: "10px dashed black"}}></div>
    
    

</div>
</>
    );
};

export default Listing; 