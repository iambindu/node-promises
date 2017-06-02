
function getData(val,err){
	return new Promise(function(resolve,reject){
		if(err){
			reject(err)
		}
		resolve(val)
	})
}




getData(1,"I am the error")
.then(function(data){
console.log(data)
})
.catch(function(err){
	console.log('this is error block');
	console.log(err);
})













 /*function service(){
 	console.log("I am callback")
 }
 var array=[1,2,3];
 var obj={
 name:'Scott',city:'Boston'
 }
 function sample(name){
 console.log(name())
 console.log(name())
 console.log(name())
 }
 sample(service);*/