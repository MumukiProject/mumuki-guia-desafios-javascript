describe("particion", function(){
    it("particion([], 40) === [[], [], []]", function(){
        assert.deepEqual(particion([], 40),  [[], [], []]);
    });
    
    it("particion([40], 40) === [[], [40], []]", function(){
        assert.deepEqual(particion([40], 40),  [[], [40], []]);
    });
    
    it("particion([90, 30], 40) === [[30], [], [90]]", function(){
        assert.deepEqual(particion([90, 30], 40),  [[30], [], [90]]);
    });
    
    it("particion([1, 4, 3, 8, 8, 9], 8) === [[1, 4, 3], [8, 8], [9]]", function(){
        assert.deepEqual(particion([1, 4, 3, 8, 8, 9], 8),  [[1, 4, 3], [8, 8], [9]]);
    });
    
})