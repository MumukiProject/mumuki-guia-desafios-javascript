describe("desafio wisit", function(){
  it( "es capicua 121", function(){
    assert(esCapicua(121));
  });
  it( "es capicua 1001", function(){
    assert(esCapicua(1001));
  });
  it( "no es capicua 1213", function(){
    assert(esCapicua(1213));
  });
});
