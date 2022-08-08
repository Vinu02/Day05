// Anonymous
//let anoFn = (function([n]) {
  //  return(n%2===1);    
//});

// 1.odd numbers in arry

var arr = [1,2,3,4,5,6,7,8,9,10];
var res=arr.filter(function(x){
    return x%2!=0
});
console.log(res);

//2.all string to title case

var str = ["a","b","c","d","e","f","g","h"];
var result=str.map (function(x){
    return x.toUpperCase()
});
console.log(result);

//3.sum of all numbers in array



   // var a = [1,2,3,4,5,6,7,8,9,10];
   var sum =function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    return res;

    };

console.log(sum([1,2,3,4,5,6,7,8,9,10]));


//4.all prime numbers in array 

var prime =function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return res;    
}
console.log(prime([1,2,3,4,5,6,7,8,9,11]));


//5.all palindromes in array

var arr = ["abc", "xyz", "nun", "1331","1124211"];
var palindromes = arr.filter(function(item) { return item == item.split('').reverse().join(''); });
console.log(palindromes);

//6. median of two sorted  array of same size 

var median=function(a,b){
    var c=[];
    var n=a.length;
    var m=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<m)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
            i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }

     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<m)
     {
         for(let p=j;p<m;p++)
         {
             c.push(b[m])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     return med;

}
console.log(median([1,2,3,7],[4,5,6,8]))


//7.removing duplicates form array

var array = ["apple", "mango",
        "apple", "orange", "mango", "mango"];
 
    function removeDuplicates(array) {
        var unique = [];
        array.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
 
    console.log(removeDuplicates(array))

//8.rotate an array in k times

var sum =function(a){
    var a=[1,2,3,4,5,6,7,8,9,10]
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    return res;

}
console.log(sum());
    
// IIFE
//(() => {
   // let sum = 4+5;
    // console.log(sum)
//})()

// 1.odd numbers in arry

var arr=[1,2,3,4,5,6,7,8,9,10];
var res=arr.filter(function(x){
   
    return x%2!=0;     
})
console.log(res);

//2.all string to title case

var str = ["hello vinu"];
var result=str.map(function(x){
    return x.toUpperCase()
});
console.log(result);

//3.sum of all numbers in array

(function(a){
    var  res=0;
    for(i=0;i<a.length;i++)
    {
            res+=a[i]
    }
    console.log(res);
 })([1,2,3,4,5,6,7,8,9,10]);

//4.all prime numbers in array

(function(a){
    var  res="";
    for(i=0;i<a.length;i++)
    {
        var count=0;
        for(j=1;j<=a[i];j++)
        {
            if(a[i]%j===0)
            {
                count++
            }
        }
        if(count==2)
        {
            res+=a[i]+" "
        }
    }
    console.log(res);
     })
     ([1,2,3,4,5,6,7,8,9,11]);
     
//5.all palindromes in array

     (function(a){
        var res="";
        var answer="";
        for(i=0;i<a.length;i++)
        {
            res+=a[i];
            var count=0
    
            for(j=0;j<res.length;j++)
            {
                if(res[j]===res[((res.length-1)-j)])
                {
                    count++
    
                }
            }
            if(count===res.length)
            {
                answer+=res+" "
            }
            res="";
        }
        console.log(answer);
    
    }) 
    
    ([11,242,414,575,6006,999,1002]);

//6. median of two sorted  array of same size 

(function(a,b){
    var c=[];
    var n=a.length;
    var m=b.length;
    var i=0;
    var j=0;
    var med=0;
    while(i<n && j<m)
    {
        if(a[i]<b[j])
        {
            c.push(a[i])
              i++
        }
        else
        {
            c.push(b[j])
            j++
        }
    }

     if(i<n)
     {
         for(let k=i;k<n;k++)
         {
             c.push(a[k])
         }
     }
     else if(j<m)
     {
         for(let p=j;p<m;p++)
         {
             c.push(b[p])
         }
     }
     if(c.length%2===0)
     {
         med=(c[(c.length/2)-1]+c[c.length/2])/2
     }
     else
     {
         med=c[Math.floor(c.length/2)]
     }
     console.log(med);
     }) 
     
     ([1,2,3,7],[4,5,6,8]);

//7.removing duplicates form array

     (function(a){
        var b=[];
        var n=a.length;
        for(let i=0;i<n-1;i++)
        {
            for(let j=i+1;j<n;j++)
            {
                if(a[i]===a[j])
                {
                    delete a[j]
                }
            }
        }
        for(let i=0;i<a.length;i++)
        {
            if(a[i]%10===Math.floor(a[i]%10))
            {
                b.push(a[i])
            }
        }
        let c=""
        for(let i=0;i<b.length-1;i++)
         {
             c+=b[i]+" ";
        }
        c+=b[b.length-1];
         console.log(c);
    
        })
        
        ([1,1,2,1,2,3,3,3,4,3,3,3,3,2,2,2]);

//8.rotate an array in k times

(function(a,k){
    n=a.length;
 o=[];
  d="";
  for(i=0;i<n;i++)
  {
      o[(i+k)%(n)]=a[i]
  }
  for(i=0;i<o.length-1;i++)
  {
      d+=o[i]+" "
  }
  d+=o[o.length-1]
  console.log(d);
}) 
([1,2,3,4,5,6,7,8],9);


// Arrow Function
//let arrFn = (n1,n2) => {
  //  return n1+n2;}
// console.log(arrFn(4,5));

//1.print odd numbers in an array :

 let a = [1,2,3,4,5,6,7,8,9,10,11,12]
 let odd = a.filter(n => n%2==0)
 console.log(odd);	

//2.convert all the strings to title caps in an array :
                      
function title (str) {
     return str .split(' ').map((word) => word.toUpperCase()).join(' ')
   };
 console.log(title("hello world"));


//3.sum of numbers in an array :

     let c= [1,2,3,4,5,6,7,8,9,10];
     let add =c.reduce((a,b) => a+b);
     console.log(add);


//4.return all the prime numbers in an array :

  const arr2= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  const primeNum = arr2.filter(num => {
    for (let i = 2; i < num; i++) {
     if (num % i === 0) 
     return false;
    }
    return num !== 1;
    });
     console.log(primeNum);


 //5.return all palindromes in an array :
 const getAllPalindromes = (words) => words.filter((word) => word.split("").reverse().join("") === word);

 console.log(getAllPalindromes(["hello","nun", "noon"]));
   
 



 