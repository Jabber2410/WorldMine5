



async function loadImages() {
    
    const title = document.getElementById("titleImageInput").value.trim();
    const Autor = document.getElementById("authorInput").value.trim();
    const img = document.getElementById("imageInput");
    const file = img.files[0];
    const imageContainer = document.getElementById("imageContainer");
    console.log(title);
    console.log(Autor);
    console.log(img);
    //imageContainer.innerHTML = "";

    try {
        //const response = await fetch(`${SERVER_URL}/images`);
        //const images = await response.json();

        //images.forEach(image => {
            const div = document.createElement("div");
            div.classList.add("image-card");

            const img = document.createElement("img");
            //img.src = `data:${image.contentType};base64,${image.imageData}`;
            img.src = URL.createObjectURL(file);
            //img.src = ""

            const h3 = document.createElement("h3");
            h3.textContent = title;

            const p = document.createElement("p");
            //p.textContent = `Hochgeladen von: ${image.name}`;
            p.textContent = `Hochgeladen von: ${Autor} `;
            
            div.appendChild(h3);
            div.appendChild(img);
            div.appendChild(p);
            imageContainer.appendChild(div);
        //});
    } catch (error) {
        console.error("Fehler beim Laden der Bilder:", error);
    }
}