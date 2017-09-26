// JavaScript File
// Describe, expect, toBe, it are all functions of Jasmine. 


describe("wcid", function() {

        it("should return Sorry I can't tell what to drink becuase that age is incorrect!", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry I can't tell what to drink becuase that age is incorrect!");
        });

        it("should return Drink Toddy", function() {
            expect(whatCanIDrink(12)).toBe("Drink Toddy");
        });

        it("should return Drink Coke", function() {
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        
        it("should return Drink Beer", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
               
        it("should return Drink Whisky", function() {
            expect(whatCanIDrink(129)).toBe("Drink Whisky");
        });                

        it("should return You're Too Old", function() {
            expect(whatCanIDrink(133)).toBe("You're too old to drink!");
        });                

});