"use client";

import React from "react";

function Video() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/Uzk-po3mAHA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Video;