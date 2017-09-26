// JavaScript File
// Describe, expect, toBe, it are all functions of Jasmine. 

describe("Calculator", function() {
    describe('Addition function', function() {
        
        it('should add two numbers together and return the result', function() {
            expect(addition(2,2)).toBe(4);
        });
        
        it('it should not return 4 if the parameters given do not add up to 4', function() {
            expect(addition(7, 19)).toBe(26);
        });
        
        it("should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            addition("Hello");
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
        
        it("should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            addition("Hello", "BlaBlaBla");
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
        
        it("should have called the alert function if either number is undefined", function() {
            spyOn(window, "alert");
            addition();
            expect(window.alert).toHaveBeenCalledWith("Arguments must both be a number");
        });
        
        it("should work even if the numbers are negative", function() {
            expect(addition(-2, -2)).toBe(-4);
        });

        it("should work even if the numbers are negative", function() {
            expect(addition(0, 0)).toBe(0);
        });
        
        it("should work even if the numbers are negative", function() {
            expect(addition(0, 0)).toBe(0);
        });

        
    });
});