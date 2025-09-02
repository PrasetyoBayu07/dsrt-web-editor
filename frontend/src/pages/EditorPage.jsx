import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Panel from "../components/Panel";
import VideoCanvas from "../components/VideoCanvas";
import Timeline from "../components/Timeline";

export default function EditorPage() {
  const [featureHTML, setFeatureHTML] = useState("");

  const loadFeature = async (path) => {
    const res = await fetch(path);
    const html = await res.text();
    setFeatureHTML(html);
  };

  return (
    <div className="flex h-screen bg-black">
      <Sidebar loadFeature={loadFeature} />
      <div className="flex-1 flex flex-col">
        <VideoCanvas />
        <Timeline />
        <Panel content={featureHTML} />
      </div>
    </div>
  );
}
