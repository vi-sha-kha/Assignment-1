
  
 function  printDiagonalSums(mat,n)
     {
         let principal = 0, secondary = 0;
         for (let i = 0; i < n; i++) {
             principal += mat[i][i];
             secondary += mat[i][n - i - 1];
         }
      
         document.write("Principal Diagonal:"
                                 + principal+"<br>");
                                      
         document.write("Secondary Diagonal:"
                                 + secondary);
     }
      
     // Driver code
      
         let a = [[ 1, 2, 3, 4 ],
                     [5, 6, 7, 8 ],
                     [ 1, 2, 3, 4 ],
                     [ 5, 6, 7, 8 ]];
      
         printDiagonalSums(a, 4);
          
 // This code is contributed Bobby
  
 </script>
