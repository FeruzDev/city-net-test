import Particles from "react-tsparticles";
import React from "react";
class App extends React.Component {
    render() {
        return (
          <div className="canvasBg">
              <Particles
                  id="tsparticles"
                  options={{
                      background: {
                          color: {
                              value: "transparent",
                          },
                      },
                      fpsLimit: 60,
                      interactivity: {
                          detect_on: "canvas",
                          events: {
                              onhover: {
                                  enable: true,
                                  mode: "grab"
                              },
                              onclick: {
                                  enable: true,
                                  mode: "push"
                              },
                              resize: true
                          },
                          modes: {
                              grab: {
                                  distance: 140,
                                  line_linked: {
                                      opacity: 1
                                  }
                              },
                              bubble: {
                                  distance: 400,
                                  size: 40,
                                  duration: 2,
                                  opacity: 8,
                                  speed: 3
                              },
                              repulse: {
                                  distance: 200,
                                  duration: 0.4
                              },
                              push: {
                                  particles_nb: 4
                              },
                              remove: {
                                  particles_nb: 2
                              }
                          }
                      },
                      particles: {
                          number: {
                              value: 80,
                              density: {
                                  enable: true,
                                  value_area: 700
                              }
                          },
                          color: {
                              value: "#ffffff"
                          },
                          shape: {
                              type: "circle",
                              stroke: {
                                  width: 0,
                                  color: "#000000"
                              },
                              polygon: {
                                  nb_sides: 5
                              }
                          },
                          opacity: {
                              value: 0.5,
                              random: false,
                              anim: {
                                  enable: false,
                                  speed: 1,
                                  opacity_min: 0.1,
                                  sync: false
                              }
                          },
                          size: {
                              value: 3,
                              random: true,
                              anim: {
                                  enable: false,
                                  speed: 40,
                                  size_min: 0.1,
                                  sync: false
                              }
                          },
                          line_linked: {
                              enable: true,
                              distance: 150,
                              color: "#ffffff",
                              opacity: 0.4,
                              width: 1
                          },
                          move: {
                              enable: true,
                              speed: 6,
                              direction: "none",
                              random: false,
                              straight: false,
                              out_mode: "out",
                              bounce: false,
                              attract: {
                                  enable: false,
                                  rotateX: 600,
                                  rotateY: 1200
                              }
                          }
                      },
                      detectRetina: true,
                  }}
              />




          </div>
        );
    }
}

export  default App;