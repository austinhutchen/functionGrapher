declare const math: any;
declare const Plotly: any;

function draw(): void {
  try {
    // compile the expression once
    const expression: string = (document.getElementById("eq") as HTMLInputElement).value;
    const expr = math.compile(expression);

    // evaluate the expression repeatedly for different values of x
    const xValues: number[] = math.range(-10, 10, 0.5).toArray();
    const yValues: number[] = xValues.map(function (x: number) {
      return expr.evaluate({ x: x });
    });

    // render the plot using plotly
    const trace1 = {
      x: xValues,
      y: yValues,
      type: "scatter",
    };
    const data = [trace1];
    Plotly.newPlot("plot", data);
  } catch (err: any) {
    console.error(err);
    alert(err);
  }

  (document.getElementById("form") as HTMLFormElement).onsubmit = function (event: Event) {
    event.preventDefault();
    draw();
  };
}

document.addEventListener("DOMContentLoaded", () => {
  draw();
});