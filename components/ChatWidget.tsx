"use client";

{/* TODO: Add ScaleSmart chat widget script here */}

export default function ChatWidget() {
  return (
    // TODO: Replace with real ScaleSmart chat widget
    <div className="fixed bottom-20 right-4 z-40 md:bottom-6">
      <button
        className="flex h-14 w-14 items-center justify-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105"
        aria-label="Open chat"
      >
        <span className="text-xs font-bold">Chat</span>
      </button>
    </div>
  );
}
