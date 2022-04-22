      window.onload = function(){
        var canvas = document.getElementById('mein-logo');
        var context = canvas.getContext('2d');
         //zeichne Linien
		 context.strokeStyle = "rgba(115,107,94)"; 
         context.lineWidth = 5;
         context.beginPath();
         context.moveTo(0, 0); 
         context.lineTo(0, 35);
         context.lineTo(20, 35); 
         context.stroke();
         context.closePath();
         //zeichne Linien
		 context.strokeStyle = "rgba(115,107,94)"; 
         context.lineWidth = 5;
         context.beginPath();
         context.moveTo(50, 0); 
         context.lineTo(30, 0);
         context.lineTo(30, 35); 
         context.lineTo(50, 35); 
         context.lineTo(50, 20); 
         context.lineTo(40, 20); 
          
         context.stroke();
         context.closePath();  
     }     