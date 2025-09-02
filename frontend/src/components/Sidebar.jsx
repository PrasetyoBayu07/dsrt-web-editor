import React from "react";

function Sidebar({ loadFeature }) {
  return (
    <div className="sidebar bg-panel w-64 p-2 overflow-y-auto text-accent">
      <details open>
        <summary>🔀 Transitions</summary>

        {/* Basic */}
        <details>
          <summary>Basic</summary>

          {/* Fade */}
          <details>
            <summary>Fade</summary>
            <button onClick={() => loadFeature("features/transitions/basic/fade/fade_in.html")}>Fade In</button>
            <button onClick={() => loadFeature("features/transitions/basic/fade/fade_out.html")}>Fade Out</button>
            <button onClick={() => loadFeature("features/transitions/basic/fade/fade_to_black.html")}>Fade to Black</button>
            <button onClick={() => loadFeature("features/transitions/basic/fade/fade_to_white.html")}>Fade to White</button>
            <button onClick={() => loadFeature("features/transitions/basic/fade/fade_audio_sync.html")}>Fade with Audio Sync</button>
          </details>

          {/* Dissolve */}
          <details>
            <summary>Dissolve</summary>
            <button onClick={() => loadFeature("features/transitions/basic/dissolve/cross_dissolve.html")}>Cross Dissolve</button>
            <button onClick={() => loadFeature("features/transitions/basic/dissolve/film_dissolve.html")}>Film Dissolve</button>
            <button onClick={() => loadFeature("features/transitions/basic/dissolve/additive_dissolve.html")}>Additive Dissolve</button>
          </details>

          {/* Wipe */}
          <details>
            <summary>Wipe</summary>
            <button onClick={() => loadFeature("features/transitions/basic/wipe/left_right.html")}>Left → Right / Right → Left</button>
            <button onClick={() => loadFeature("features/transitions/basic/wipe/up_down.html")}>Up → Down / Down → Up</button>
            <button onClick={() => loadFeature("features/transitions/basic/wipe/clock.html")}>Clock Wipe</button>
            <button onClick={() => loadFeature("features/transitions/basic/wipe/star.html")}>Star Wipe</button>
          </details>

          {/* Slide */}
          <details>
            <summary>Slide</summary>
            <button onClick={() => loadFeature("features/transitions/basic/slide/horizontal.html")}>Horizontal (L→R, R→L)</button>
            <button onClick={() => loadFeature("features/transitions/basic/slide/vertical.html")}>Vertical (U→D, D→U)</button>
            <button onClick={() => loadFeature("features/transitions/basic/slide/push.html")}>Push Slide</button>
            <button onClick={() => loadFeature("features/transitions/basic/slide/elastic.html")}>Elastic Slide</button>
          </details>
        </details>

        {/* Advanced */}
        <details>
          <summary>Advanced</summary>
          <button onClick={() => loadFeature("features/transitions/advanced/zoom.html")}>Zoom</button>
          <button onClick={() => loadFeature("features/transitions/advanced/spin.html")}>Spin / Rotate</button>
          <button onClick={() => loadFeature("features/transitions/advanced/2d_spin.html")}>2D Spin (CW/CCW)</button>
          <button onClick={() => loadFeature("features/transitions/advanced/3d_rotate.html")}>3D Rotate (X,Y,Z)</button>
          <button onClick={() => loadFeature("features/transitions/advanced/spin_blur.html")}>Spin + Blur</button>
          <button onClick={() => loadFeature("features/transitions/advanced/flip_horizontal.html")}>Horizontal Flip</button>
          <button onClick={() => loadFeature("features/transitions/advanced/flip_vertical.html")}>Vertical Flip</button>
          <button onClick={() => loadFeature("features/transitions/advanced/3d_card_flip.html")}>3D Card Flip</button>
          <button onClick={() => loadFeature("features/transitions/advanced/page_curl_top.html")}>Page Curl Top</button>
          <button onClick={() => loadFeature("features/transitions/advanced/page_curl_side.html")}>Page Curl Side</button>
          <button onClick={() => loadFeature("features/transitions/advanced/page_curl_corner.html")}>Page Curl Corner</button>
          <button onClick={() => loadFeature("features/transitions/advanced/glitch_rgb_split.html")}>RGB Split</button>
          <button onClick={() => loadFeature("features/transitions/advanced/glitch_pixelate.html")}>Pixelate</button>
          <button onClick={() => loadFeature("features/transitions/advanced/glitch_vhs.html")}>VHS Distort</button>
          <button onClick={() => loadFeature("features/transitions/advanced/glitch_scanline.html")}>Scanline Glitch</button>
        </details>

        {/* Professional */}
        <details>
          <summary>Professional</summary>
          <button onClick={() => loadFeature("features/transitions/professional/luma_fade.html")}>Luma Fade</button>
          <button onClick={() => loadFeature("features/transitions/professional/brightness_fade.html")}>Brightness Fade</button>
          <button onClick={() => loadFeature("features/transitions/professional/color_key_fade.html")}>Color Key Fade</button>
          <button onClick={() => loadFeature("features/transitions/professional/face_morph.html")}>Face Morph</button>
          <button onClick={() => loadFeature("features/transitions/professional/object_morph.html")}>Object Morph</button>
          <button onClick={() => loadFeature("features/transitions/professional/liquid_warp.html")}>Liquid Warp</button>
          <button onClick={() => loadFeature("features/transitions/professional/directional_blur_x.html")}>Directional Blur (X)</button>
          <button onClick={() => loadFeature("features/transitions/professional/directional_blur_y.html")}>Directional Blur (Y)</button>
          <button onClick={() => loadFeature("features/transitions/professional/radial_blur.html")}>Radial Blur</button>
          <button onClick={() => loadFeature("features/transitions/professional/zoom_blur.html")}>Zoom Blur</button>
          <button onClick={() => loadFeature("features/transitions/professional/light_warm_leak.html")}>Warm Leak</button>
          <button onClick={() => loadFeature("features/transitions/professional/light_cool_leak.html")}>Cool Leak</button>
          <button onClick={() => loadFeature("features/transitions/professional/light_random_leak.html")}>Random Leak</button>
          <button onClick={() => loadFeature("features/transitions/professional/shape_mask.html")}>Shape Mask (Circle, Star, Polygon)</button>
          <button onClick={() => loadFeature("features/transitions/professional/brush_mask.html")}>Brush Mask</button>
          <button onClick={() => loadFeature("features/transitions/professional/bezier_mask.html")}>Bezier Mask</button>
          <button onClick={() => loadFeature("features/transitions/professional/orbit_camera.html")}>Orbit Camera</button>
          <button onClick={() => loadFeature("features/transitions/professional/dolly_zoom.html")}>Dolly Zoom</button>
          <button onClick={() => loadFeature("features/transitions/professional/parallax_slide.html")}>Parallax Slide</button>
        </details>

      </details>
    </div>
  );
}

export default Sidebar;
