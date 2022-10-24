const capitalizeText=require("../index");
var assert = require("chai").assert;
var expect = require('chai').expect

describe("test capitalizeText() function ",function(){

    it("test that the function takes a string  it will return a string ",function(){

        expect(capitalizeText('hello')).to.be.a('string')
    });

    it("test that the function takes a string and return it after capitalize it",function(){
       
        expect(capitalizeText('hello')).to.equal('HELLO');  
      });

    
    it("test if the function takes number it will throw type error says parameter should be string",function(){

        expect(capitalizeText('2'))
        .to.throw(TypeError, 'capitalizeText() expects only string.')
    });  

    it("test if the input iti , the returned value  will not equal to hello",function(){

        expect(capitalizeText('iti')).to.not.be.a('hello')
    })


})