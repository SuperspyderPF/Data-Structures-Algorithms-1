balancedStringSplit=s=>{r=0,m=0;for(i=0;i<s.length;i++){if(s[i]==='R'){m++}else{m--}if(m===0){r++}};return r}