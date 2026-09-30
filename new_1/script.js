const imageInput = document.querySelector("#imageInput");
const preview = document.querySelector("#preview");

imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
    }
});