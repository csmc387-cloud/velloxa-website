"use client";

import dynamic from "next/dynamic";

const ShaderGradientWrapper = dynamic(
  () => import("@/components/ShaderGradientWrapper"),
  { ssr: false }
);

export default function PersistentBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <ShaderGradientWrapper />
    </div>
  );
}
