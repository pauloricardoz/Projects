function* sequenceGen(...a){
  // Good Luck!
  console.log(a)
  let count=0
  while(count<a.length){
    yield a[count]
  }
  while(true){
    a.shift()
    let sum=a.reduce((a,c)=>{a+c},0)
    a.push(sum)
    yield sum;
  }
}
const fib= sequenceGen(0,1);
fib.next();
/*
Test.describe("Basic Tests",function(){
  Test.it("It should work for some Fibonacci numbers",function(){
    var fib = sequenceGen(0,1);
    Test.assertEquals(fib.next().value,0);
    Test.assertEquals(fib.next().value,1);
    Test.assertEquals(fib.next().value,1);
    Test.assertEquals(fib.next().value,2);
    Test.assertEquals(fib.next().value,3);
    Test.assertEquals(fib.next().value,5);
    Test.assertEquals(fib.next().value,8);
    Test.assertSimilar(buildArr(fib,10),[13, 21, 34, 55, 89, 144, 233, 377, 610, 987]);
  })
  Test.it("It should work for some Tribonacci numbers",function(){
    var trib = sequenceGen(0,1,1);
    Test.assertEquals(trib.next().value,0);
    Test.assertEquals(trib.next().value,1);
    Test.assertEquals(trib.next().value,1);
    Test.assertEquals(trib.next().value,2);
    Test.assertEquals(trib.next().value,4);
    Test.assertEquals(trib.next().value,7);
    Test.assertEquals(trib.next().value,13);
    Test.assertEquals(trib.next().value,24);
    Test.assertEquals(trib.next().value,44);
    Test.assertEquals(trib.next().value,81);
    Test.assertEquals(trib.next().value,149);
    Test.assertEquals(trib.next().value,274);
    Test.assertEquals(trib.next().value,504);
    Test.assertEquals(trib.next().value,927);
    Test.assertEquals(trib.next().value,1705);
  })
  Test.it("It should work for some Lucas numbers",function(){
    var lucas = sequenceGen(2,1);
    Test.assertSimilar(buildArr(lucas,50),[2, 1, 3, 4, 7, 11, 18, 29, 47, 76, 123, 199, 322, 521, 843, 1364, 2207, 3571, 5778, 9349, 15127, 24476, 39603, 64079, 103682, 167761, 271443, 439204, 710647, 1149851, 1860498, 3010349, 4870847, 7881196, 12752043, 20633239, 33385282, 54018521, 87403803, 141422324, 228826127, 370248451, 599074578, 969323029, 1568397607, 2537720636, 4106118243, 6643838879, 10749957122, 17393796001]);
    Test.assertEquals(lucas.next().value,28143753123);
    Test.assertEquals(lucas.next().value,45537549124);
    Test.assertEquals(lucas.next().value,73681302247);
    Test.assertEquals(lucas.next().value,119218851371);
    Test.assertEquals(lucas.next().value,192900153618);
    Test.assertEquals(lucas.next().value,312119004989);
    Test.assertEquals(lucas.next().value,505019158607);
    Test.assertEquals(lucas.next().value,817138163596);
    Test.assertEquals(lucas.next().value,1322157322203);
    Test.assertEquals(lucas.next().value,2139295485799);
    Test.assertEquals(lucas.next().value,3461452808002);
    Test.assertEquals(lucas.next().value,5600748293801);
    Test.assertEquals(lucas.next().value,9062201101803);
    Test.assertEquals(lucas.next().value,14662949395604);
    Test.assertEquals(lucas.next().value,23725150497407);
  })
  Test.it("It should work for a pointless sequence",function(){
    var pointless = [];
    for(var i = 0; i < 1000;i++){pointless.push(1);}
    Test.assertSimilar(buildArr(sequenceGen(1),1000),pointless);
  })
})
*/