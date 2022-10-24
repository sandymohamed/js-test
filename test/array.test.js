const createArray=require("../array");
var should = require("chai").should();
var expect = require('chai').expect


describe("test createArray() function ", function(num =1){

    num++;

    it("test that the return value of type array ",function(){

        expect(createArray(num)).to.be.an('array')
});

    it("test if we pass 3 it will return array of length 3 and test it's include 1",function(){

        expect(createArray(3)).to.include.members([1]).with.lengthOf(3);
    });


    it("test if we pass 3 it will return array of length 3 and test it's include 1",function(){

        // expect(createArray(num)).to.include.members([1]).with.lengthOf(num);
        createArray(num).should.include.members([1]).have.lengthOf(num);
    });

 
})
