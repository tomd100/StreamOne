// JavaScript File
// Describe, expect, toBe, it are all functions of Jasmine. 

 beforeEach(function() {
        calc = new Calculator();
    });

describe("Calculator", function() {
    describe('Caclulator function', function() {
        
        it('should return zero as nothing added', function() {
            expect(calc.value).toBe(0);
        });
                
        it('should add two numbers to return the sum', function() {
            calc.add(9);
            calc.add(9);
            expect(calc.value).toBe(18);
        });
        
        it('should add a number and subtract a number', function() {
            calc.add(9);
            calc.sub(9);
            expect(calc.value).toBe(0);
        });
        
        it('should multiply two numbers together', function() {
            calc.add(9);
            calc.mul(9);
            expect(calc.value).toBe(81);
        });

        it('should return and erro for dividing by zero', function() {
            spyOn(window, "alert");
            calc.add(9);
            calc.div(9);
            calc.div(0);
            expect(window.alert).toHaveBeenCalledWith("Cannot divide by zero!");
        });
        
    });
});