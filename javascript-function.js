var A = [2,1, 5, -6, 9];

function solution(A) {	
B = [];
k = 0;
for(i = 0; i < A.length; ++i){
	
			for(j = 0; j < A.length; ++j){
				
				if(j != i){
					val = A[i] + A[j];
					B[k] = Math.abs(val);
					//console.log('('+i , j+')', B)
					k++;
				}
							

			}
	}

function getMost(){				
	var o = {}, 
    i = 0, 
    m = {m:0,t:null}, 
    t,
    len = B.length; 

for ( ; i < len ; i++ ) { 
    o[ B[i] ] = ( o[ B[i] ] || 0 ) + 1; 
} 

for ( i in o ) { 
    t = { 
        m: o[i], 
        i: i 
    };
    m = m.m < t.m ? t : m;
} 

console.log(m.m ); 
	return m.m;			
}

getMost(B);

return getMost(B);

}

solution(A);
