// Importing math.js and Plotly (type definitions)
import * as math from "mathjs";
import Plotly from "plotly.js-dist";

function draw(): void {
  try {
    // Compile the expression
    const expression = (document.getElementById("eq") as HTMLInputElement).value;
    const expr = math.compile(expression);

    // Generate x and y values
    const xValues: number[] = math.range(-10, 10, 0.5).toArray();
    const yValues: number[] = xValues.map((x) => expr.evaluate({ x }));

    // Prepare the plot
    const trace = {
      x: xValues,
      y: yValues,
      type: "scatter",
    };

    const data = [trace];

    // Render the plot
    Plotly.newPlot("plot", data);
  } catch (err: unknown) {
    console.error(err);
    alert(`Error: ${(err as Error).message}`);
  }
}

// Initialize and set event listeners
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form") as HTMLFormElement;
  form.onsubmit = (event) => {
    event.preventDefault();
    draw();
  };

  // Initial draw
  draw();
});
