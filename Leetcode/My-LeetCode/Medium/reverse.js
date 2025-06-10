var reverse = function(x) {

         let xCopy =x;
          x = Math.abs(x); // this for change -123 into 123

         let rev = 0;

        while (x>0 ) { 
            let reminder = x%10; // 123%10 => 3
             rev = (10*rev)+reminder;  //10*rev => 0 + 3
             x = Math.floor(x/10);  // 123/10 => 12.3 now we floor down the point value so, now x will be 12; 

        } 
           let limit = Math.pow(2,31);
        
            if(rev < -limit || rev > limit)  return 0;
            return(xCopy < 0) ? -rev : rev;
}
                   



