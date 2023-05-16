function temperatureConverter() {
    var val1=document.querySelector("#type").value;
    var val2=document.querySelector("#degrees").value;
    console.log(val1+" "+ val2);

    if (val1=="Fahrenheit"){
        valNum = parseFloat(val2);
        document.querySelector("#result").value=(valNum*1.8)+32;
    }
    if (val1=="Kelvin"){
        valNum = parseFloat(val2);
        document.querySelector("#result").value=(valNum+273.15);
    }
  }