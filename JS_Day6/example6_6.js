var bus=[];
for(var i=0;i<5;i++){
    bus.unshift("乘客"+i);
    console.log(bus);
}
while(bus.length!=0){
    var first=bus.pop();
    console.log(first+"下车");
    consnole.log(bus);
}
