"use client";

import { MeshGradient } from "@paper-design/shaders-react";

interface GradientBackgroundProps {
  isDark?: boolean;
}

export default function GradientBackground({ isDark = true }: GradientBackgroundProps) {
  // Dark mode: black → blue
  // Light mode: blue → white
  const colors = isDark
    ? [
        "#000000", // black
        "#020617", // near black blue
        "#0f172a", // slate blue
        "#1e3a8a", // deep blue
        "#2563eb", // bright blue
        "#1d4ed8", // darker blue
      ]
    : [
        "#ffffff", // white
        "#eff6ff", // blue-50
        "#dbeafe", // blue-100
        "#bfdbfe", // blue-200
        "#60a5fa", // blue-400
        "#3b82f6", // blue-500
      ];

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <MeshGradient
        className="w-full h-full"
        colors={colors}
        distortion={1.0}
        swirl={0.5}
        speed={0.35}
        offsetX={0.05}
        grainMixer={0}
        grainOverlay={0}
      />
    </div>
  );
}
