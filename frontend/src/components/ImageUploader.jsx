import React, { useState } from "react";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImageURL, setProcessedImageURL] = useState("");

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image processing
  const processImage = async () => {
    if (!selectedImage) {
      alert("Te rog selectează o imagine înainte!");
      return;
    }

    const img = new Image();
    img.src = selectedImage;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      // Define canvas size (resize la 800x600 pe fundal alb)
      const targetWidth = 800;
      const targetHeight = 600;

      canvas.width = targetWidth;
      canvas.height = targetHeight;

      // Desenăm fundal alb
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, targetWidth, targetHeight);

      // Desenăm imaginea redimensionată
      const imgWidthRatio = Math.min(
        targetWidth / img.width,
        targetHeight / img.height
      );
      const imgHeightScaled = img.height * imgWidthRatio;
      const imgWidthScaled = img.width * imgWidthRatio;
      const dx = (targetWidth - imgWidthScaled) / 2; // centrare orizontală
      const dy = (targetHeight - imgHeightScaled) / 2; // centrare verticală

      ctx.drawImage(img, dx, dy, imgWidthScaled, imgHeightScaled);

      const processedImageURL = canvas.toDataURL("image/png");
      setProcessedImageURL(processedImageURL);
    };
  };

  // Handle download
  const downloadImage = () => {
    if (!processedImageURL) {
      alert("Procesează imaginea înainte de a o descărca!");
      return;
    }

    const a = document.createElement("a");
    a.href = processedImageURL;
    a.download = "processed_image.png";
    a.click();
    setProcessedImageURL("");
  };

  return (
    <div>
      <h1>Procesare imagine în frontend</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={processImage}>Procesează Imaginea</button>
      {processedImageURL && (
        <>
          <button onClick={downloadImage}>Descarcă imaginea procesată</button>
          <div style={{ marginTop: "20px" }}>
            <img
              src={processedImageURL}
              alt="Preview procesat"
              style={{ maxWidth: "400px" }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default ImageUploader;
