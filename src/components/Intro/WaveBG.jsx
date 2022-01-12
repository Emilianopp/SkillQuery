import React from "react";
import { Container } from "react-bootstrap";
import Wave from "react-wavify";
import content from "content/content.json";
export default function WaveBG() {
  let styles = {
    waveCont: {
      minWidth: "100%",
      height: "100%",
      padding: 0,
      margin: 0,

      zIndex: -1,
    },
    outerWave: {
      minWidth: "100vw",
      height: "30vh",
      position: "absolute",
      bottom: 0,
    },
  };
  return (
    <Container style={styles.waveCont}>
      <Wave
        style={styles.outerWave}
        mask="url(#mask)"
        fill={content.colors.green}
        options={{
          height: 30,
          amplitude: 60,
          speed: 0.2,
          points: 4,
        }}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset=".55" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="300" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      {/* <Wave
        style={styles.outerWave}
        mask="url(#mask)"
        fill={content.colors.green}
        options={{
          height: 30,
          amplitude: 40,
          speed: 0.2,
          points: 4,
        }}
        style={styles.outerWave}
        mask="url(#mask)"
        fill={content.colors.green}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset=".55" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave>
      <Wave
        style={styles.outerWave}
        mask="url(#mask)"
        fill={content.colors.green}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.2,
          points: 4,
        }}
        style={styles.outerWave}
        mask="url(#mask)"
        fill={content.colors.green}
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0" stopColor="white" />
            <stop offset=".55" stopColor="black" />
          </linearGradient>
          <mask id="mask">
            <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
          </mask>
        </defs>
      </Wave> */}
    </Container>
  );
}
