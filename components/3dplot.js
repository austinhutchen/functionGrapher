getrandom = (num, mul) => {
  var value = [];
  for (i = 0; i <= num; i++) {
    var rand = Math.random() * mul;
    value.push(rand);
  }
  return value;
};

var trace1 = {
  type: "mesh3d",
  x: getrandom(1000, 200),
  y: getrandom(1000, 300),
  z: getrandom(1000, 150),
  color: "lightblue",
};

var trace2 = {
  type: "mesh3d",
  x: getrandom(1000, 200),
  y: getrandom(1000, 300),
  z: getrandom(1000, 150),
  color: "pink",
};

var layout = {
  scene: {
    xaxis: { title: "X VECTOR" },
    yaxis: { title: "Y VECTOR" },
    zaxis: { title: "Z VECTOR" },
  },
  autosize: false,
  width: 550,
  height: 500,
  margin: {
    l: 0,
    r: 0,
    b: 50,
    t: 50,
    pad: 4,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Plotly.newPlot("myDiv", [trace1, trace2], layout);
});

var pointCount = 3142;

var i, r;

var x = [];

var y = [];

var z = [];

var c = [];

for (i = 0; i < pointCount; i++) {
  r = i * (pointCount - i);

  x.push(r * Math.cos(i / 30));

  y.push(r * Math.sin(i / 30));

  z.push(i);

  c.push(i);
}

document.addEventListener("DOMContentLoaded", () => {
  Plotly.newPlot("myDiv2", [
    {
      type: "scatter3d",

      mode: "lines",

      x: x,

      y: y,

      z: z,

      opacity: 0.7,

      line: {
        width: 10,

        color: c,

        colorscale: "Viridis",
      },
    },
  ]);
});

document.addEventListener("DOMContentLoaded", () => {
  var pointCount = 31;

  var i, r;

  var x = [];

  var y = [];

  var z = [];

  var c = [];

  for (i = 0; i < pointCount; i++) {
    r = 10 * Math.cos(i / 10);

    x.push(r * Math.cos(i));

    y.push(r * Math.sin(i));

    z.push(i);

    c.push(i);
  }

  Plotly.newPlot("myDiv3", [
    {
      type: "scatter3d",

      mode: "lines+markers",

      x: x,

      y: y,

      z: z,

      line: {
        width: 6,

        color: c,

        colorscale: "Viridis",
      },

      marker: {
        size: 3.5,

        color: c,

        colorscale: "Greens",

        cmin: -20,

        cmax: 50,
      },
    },
  ]);
});

var data = [
  {
    type: "isosurface",

    x: [0, 0, 0, 0, 1, 1, 1, 1],

    y: [0, 1, 0, 1, 0, 1, 0, 1],

    z: [1, 1, 0, 0, 1, 1, 0, 0],

    value: [1, 2, 3, 4, 5, 6, 7, 8],

    isomin: 2,

    isomax: 6,

    colorscale: "Reds",
  },
];

var layout = {
  margin: { t: 0, l: 0, b: 0 },

  scene: {
    camera: {
      eye: {
        x: 1.88,

        y: -2.12,

        z: 0.96,
      },
    },
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Plotly.newPlot("myDiv4", data, layout, { showSendToCloud: true });
});
