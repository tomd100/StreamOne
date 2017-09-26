// JavaScript File
// Describe, expect, toBe, it are all functions of Jasmine. 


describe("FizzBuzz", function() {

        it("Should return Fizz", function() {
            expect(FizzBuzz(3)).toBe("Fizz");
        });

       it("Should return Buzz", function() {
            expect(FizzBuzz(5)).toBe("Buzz");
        });

       it("Should return FizzBuzz", function() {
            expect(FizzBuzz(15)).toBe("FizzBuzz");
        });

       it("Should return FizzBuzz", function() {
            expect(FizzBuzz(30)).toBe("FizzBuzz");
        });

       it("Should return the number", function() {
            expect(FizzBuzz(7)).toBe(7);
        });

       it("Should return Fizz", function() {
            expect(FizzBuzz(12)).toBe("Fizz");
        });

       it("Should return Buzz", function() {
            expect(FizzBuzz(10)).toBe("Buzz");
        });

       it("Should return Buzz", function() {
            expect(FizzBuzz(100)).toBe("Buzz");
        });
        
        it("Should return FizzBuzz", function() {
            expect(FizzBuzz(0)).toBe("FizzBuzz");
        });

});