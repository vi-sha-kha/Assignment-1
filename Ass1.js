//console.log('React')
 arr=[
    [2,1,1],
    [1,2,1],
    [1,1,2],
];
let principal=0; secondary=0;
function sum(type){
    for (i=0; i<arr.length-1; i++)
    {
    principal=principal+arr[i][i];
    secondary=secondary+arr[i][arr.length-i-1];
    }
    if(type=='principal'){
        return principal;
    }
    else if (type=='secondary'){
        return secondary;
    }
    else{
        return console.log("Nothing");
    }
    
    //console.log("The sum of principal diagonal elements=", principal);
}
sumofprincipal=sum('principal');
sumofsecondary=sum('secondary');
console.log("Sum of principal elements of matrix is:", sumofprincipal);
console.log("Sum of secondary elements of matrix is:", sumofsecondary);
/*
let secondary=0;  n=3;
    for (i=0 ; i<n; i++){
    secondary=secondary+arr[i][n-i-1]
    }
    console.log("The sum of secondary diagonal elements=", secondary);
}*/


                
