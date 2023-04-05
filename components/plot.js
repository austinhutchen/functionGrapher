function draw() {
 document.addEventListener("DOMContentLoaded",()=>{
 try {
   // compile the expression once
   const expression = document.getElementById('eq').value
   const expr = math.compile(expression)

   // evaluate the expression repeatedly for different values of x
   const xValues = math.range(-10, 10, 0.5).toArray()
   const yValues = xValues.map(function (x) {
     return expr.evaluate({x: x})
   })

   // render the plot using plotly
   const trace1 = {
     x: xValues,
     y: yValues,
     type: 'scatter'
   }
   const data = [trace1]
   Plotly.newPlot('plot', data)
 }
 catch (err) {
   console.error(err)
   alert(err)
 }

 
  document.getElementById('form').onsubmit = function (event) {
   event.preventDefault();
   draw();
  }
 });
}



draw();