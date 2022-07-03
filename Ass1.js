//console.log('React')
let arr=[
    [2,1,1],
    [1,2,1],
    [1,1,2],
];
let principal=0; n=3;
    for (i=0; i<n; i++)
    {
    principal=principal+arr[i][i]
    }
    console.log("The sum of principal diagonal elements=", principal);

let secondary=0;  n=3;
    for (i=0 ; i<n; i++){
    secondary=secondary+arr[i][n-i-1]
    }
    console.log("The sum of secondary diagonal elements=", secondary);


                
