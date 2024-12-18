"use client";
import useWatchStore from "@/lib/store";
import { getSelectedCollectionData, getWatchFullName } from "@/utils/utils";
import { useRef, useState } from "react";

const SaveButton = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMerging, setIsMerging] = useState(false);
  const { selectedCollectionId, selectedVariant } = useWatchStore();

  const data = getSelectedCollectionData(selectedCollectionId);
  const selectedCase = data[1].variants[selectedVariant.Case].image;
  const selectedBand = data[2].variants[selectedVariant.Band].image;

  const mergeImages = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img1 = new Image();
    const img2 = new Image();

    img1.src = selectedCase; // Path to the selected case
    img2.src = selectedBand; // Path to the selected band

    // Wait for both images to load before merging
    Promise.all([
      new Promise<HTMLImageElement>((resolve) => {
        img2.onload = () => resolve(img2); // Resolve when band image is loaded
      }),
      new Promise<HTMLImageElement>((resolve) => {
        img1.onload = () => resolve(img1); // Resolve when case image is loaded
      }),
    ])
      .then(([loadedImg2, loadedImg1]) => {
        // Set canvas dimensions to match the background image
        canvas.width = loadedImg2.width;
        canvas.height = loadedImg2.height;

        // Draw the background image
        ctx.drawImage(loadedImg2, 0, 0);

        // Calculate the position for centering the foreground image
        const x = (canvas.width - loadedImg1.width) / 2;
        const y = (canvas.height - loadedImg1.height) / 2;

        // Draw the foreground image on top of the background
        ctx.drawImage(loadedImg1, x, y);

        // Generate the merged image as a data URL
        const mergedImage = canvas.toDataURL("image/png");

        // Create a download link for the merged image
        const link = document.createElement("a");
        link.href = mergedImage;
        link.download =
          getWatchFullName(selectedVariant, selectedCollectionId) + ".png";
        link.click();

        // Reset merging state
        setIsMerging(false);
      })
      .catch((error) => {
        console.error("Error while loading images:", error);
        setIsMerging(false);
      });

    // Set the merging state to true while images are being processed
    setIsMerging(true);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
      <button
        aria-label="Save your watch customization"
        onClick={mergeImages}
        disabled={isMerging}
        className={`bg-primary py-2 px-4 text-sm tracking-tight rounded-full text-white hover:bg-primaryhover ${
          isMerging ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {isMerging ? "Saving..." : "Save"}
      </button>
    </div>
  );
};

export default SaveButton;
