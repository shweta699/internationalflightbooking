 
    // if (Adults*children*infants > Number.MAX_VALUE) {
    //   return ('Process as Infinity');
    // }
    // return (Adults*children*infants);
  
  
  // console.log(multiply(3,2,1));
  
  // if (no of infants<= no of adults) {
  //   greeting="good day";
  // } else {
  //   Error;
  // }
  function validate(event) {
    event.preventDefault();
    var adults = Number(document.getElementById("1").value);
    var children= Number(document.getElementById("0").value);
    var infants= Number(document.getElementById("2").value);

    if(adults==0)
    {
      alert("minimum number of adults should be 1");
    }
    else if((adults + children + infants)>= 9){
      alert("Total number of passengers combined cannot be greater than 9");
      }
    else if(infants>adults){
      alert("Number of infants cannot be greater than the number of adults");
      
    }
  
    else{
   alert("validate");
   return output(adults,children,infants);
  }
  }
  function output(adults,children,infants){
  
    if (infants >= 1) {
      var _output1 = "";
          for (let j = 1; j <= infants; j++) {
            
            _output1 = _output1 + `Adult ${j}\nInfant ${j}\n`;
          }
            console.log(_output1);
          
        }
        if (adults > infants) {
          var _output2 = "";
          for (let i = infants + 1; i <= adults; i++) {
            
            _output2 = _output2 + `Adult ${i}\n`;
          }
            console.log(_output2);
          
        }
  
        if (children >= 1) {
          var _output3 = "";

          for (let k = 1; k <= children; k++) {
            
            _output3 = _output3 + `Child ${k}\n`;
          }
            console.log(_output3);
          
        }
        // console.log(`output; ${_output1}\n${_output2}\n${_output3}`);
        // document.getElementById("_output1").innerText = `${_output1}\n${_output2}\n${_output3}`;
        
        

  if (adults > infants) {
    var _output = `${_output2}`;
    if (infants >= 1 && children >= 1) {
      var _output = `${_output1}${_output2}${_output3}`;
    }
    else if (infants >= 1) {
      var _output = `${_output1}${_output2}`;
    } else if (children >= 1) {
      var _output = `${_output2}${_output3}`;

    }
  } else if (infants == adults) {
    var _output = `${_output1}`;
    if (children >= 1) {
      var _output = `${_output1}${_output3}`;

    }
  }

  console.log(_output);
  document.getElementById("output").innerText = _output;
};
      //   // console.log(`${output1}\n${output2}\n${output3}`);
  
// if(adults.value==2 ||children.value==1 || infants.value==1){
//   console.log(
//   Adult 1
// Infant 1
// Adult 2
// Child 1;)


  // document.getElementById("myForm").submit();

  // function seterror(id,error){
  //   Element=document.getElementById(id);
  //   Element.getElementByclassName('formerror')[0].innerHTML= error;

  
// function validateform(){
// var returnval=true;
// }
// var name= document.forms['myform']["fname"].value;
// if (no of infants<= no of adults){
//   seterror("no of adults should be more than infants");
//   returnval='false';

// 