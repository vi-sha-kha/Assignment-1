arr=[
    [2,1,1],
    [1,2,1],
    [1,1,2]
];
let principal=0; secondary=0;
var n= arr.length;
function sum(type){
    for (i=0; i<n-1; i++)
    {
    principal=principal+arr[i][i];
    secondary=secondary+arr[i][n-i-1];
    }
    if(type=='principal'){
        return principal;
    }
    else if (type=='secondary'){
        return secondary;
    }
    else{
        return console.log("Oops");
    }    
}
sumofprincipal=sum('principal');
sumofsecondary=sum('secondary');
console.log("Sum of principal elements of matrix is:", sumofprincipal);
console.log("Sum of secondary elements of matrix is:", sumofsecondary);


                
