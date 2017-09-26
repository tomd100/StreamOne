// JavaScript File
// Assigning a function to the variable makes it an object.

function whatCanIDrink(age){
  
    if(age < 0){
        return  "Sorry I can't tell what to drink becuase that age is incorrect!";
    } else {
        if(age < 14){
            return "Drink Toddy"
        } else {
            if(age < 18){
                return "Drink Coke"
            } else {
                if(age < 21) {
                    return "Drink Beer"
                } else {
                    if(age < 130) {
                        return "Drink Whisky"
                    } else {
                        return "You're too old to drink!"
                    }
                }
            }
        }
    }
}



