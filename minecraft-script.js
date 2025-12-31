// ===============================
// GMV (Game Mode View) JavaScript
// ===============================
(function () {
    // Select the GMV container
    const frame = document.querySelector(".gmv-frame");
    if (!frame) {
        console.warn("GMV frame not found. Make sure your container has class 'gmv-frame'.");
        return;
    }

    // Read GMV size from data attribute: "900x700" or "800x600"
    const gmv = frame.dataset.gmv || "900x700";
    const [width, height] = gmv.split("x").map(Number);

    // Apply fixed GMV size
    frame.style.width = width + "px";
    frame.style.height = height + "px";
    frame.style.maxWidth = width + "px";
    frame.style.maxHeight = height + "px";

    // Ensure the iframe fills the container
    const iframe = frame.querySelector("iframe");
    if (iframe) {
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.border = "none";
        iframe.style.display = "block";
    }

    // Allow page scrolling naturally
    document.body.style.overflow = "auto";

    // Optional: log debug info
    console.log(`GMV activated: ${width}x${height}`);
})();
