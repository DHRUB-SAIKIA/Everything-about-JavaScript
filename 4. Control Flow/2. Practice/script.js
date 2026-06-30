//a. Write a function getGrade(score) that:
// - takes a student's marks (0 to 100)
// - returns the grade based on this logic:
//   - 90-100: A+
//   - 80-89: A
//   - 70-79: B
//   - 60-69: C
//   - 33-59: D
//   - 0-32: Fail
// Anything else  INVALID MARKS ❌

//Ans:
function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    } else if (score >= 80 && score < 90) {
        return "A";
    } else if (score >= 70 && score < 80) {
        return "B";
    } else if (score >= 60 && score < 70) {
        return "C";
    } else if (score >= 33 && score < 60) {
        return "D";
    } else if (score >= 0 && score < 33) {
        return "Fail";
    } else {
        return "INVALID MARKS ❌";
    }
}
// We can also write this code in more batter way
function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    if (score >= 80 && score < 90) return "A";
    if (score >= 70 && score < 80) return "B";
    if (score >= 60 && score < 70) return "C";
    if (score >= 33 && score < 60) return "D";
    if (score >= 0 && score < 33) return "Fail";
    return "INVALID MARKS ❌";
}

// Test cases
console.log(getGrade(95)); // A+
console.log(getGrade(85)); // A
console.log(getGrade(75)); // B
console.log(getGrade(65)); // C
console.log(getGrade(50)); // D
console.log(getGrade(20)); // Fail
console.log(getGrade(-5)); // INVALID MARKS ❌
console.log(getGrade(105)); // INVALID MARKS ❌


//b.
// Rock, Paper, Scissors logic:
// - Rock beats Scissors
// - Scissors beats Paper
// - Paper beats Rock
// - If both players choose the same, it's a tie

//Ans:
function rockPaperScissors(player1, player2) {
    if (player1 === player2) {
        return "It's a tie!";
    }
    if (
        (player1 === "Rock" && player2 === "Scissors") ||
        (player1 === "Scissors" && player2 === "Paper") ||
        (player1 === "Paper" && player2 === "Rock")
    ) {
        return "Player 1 wins!";
    } else {
        return "Player 2 wins!";
    }
}
// We can also write this code in more batter way 2
function rockPaperScissors(player1, player2) {
    if (player1 === "Rock" && player2 === "Scissors") return "Player 1 wins!";
    if (player1 === "Scissors" && player2 === "Rock") return "Player 2 wins!";
    if (player1 === "Scissors" && player2 === "Paper") return "Player 1 wins!";
    if (player1 === "Paper" && player2 === "Scissors") return "Player 2 wins!";
    if (player1 === "Paper" && player2 === "Rock") return "Player 1 wins!";
    if (player1 === "Rock" && player2 === "Paper") return "Player 2 wins!";
    if (player1 === player2) return "It's a tie!";
    return "Player 2 wins!";
}
// We can also write this code in more batter way 3
function rockPaperScissors(player1, player2){
    if (player1 === player2) return "draw";
    if (player1 === "Rock" && player2 === "Scissors") return "Player 1 wins!";
    if (player1 === "Scissors" && player2 === "Paper") return "Player 1 wins!";
    if (player1 === "Paper" && player2 === "Rock") return "Player 1 wins!";

    return "player2";
}

// Test cases
console.log(rockPaperScissors("Rock", "Scissors")); // Player 1 wins!
console.log(rockPaperScissors("Paper", "Rock")); // Player 1 wins!
console.log(rockPaperScissors("Scissors", "Paper")); // Player 1 wins!
console.log(rockPaperScissors("Rock", "Paper")); // Player 2 wins!
console.log(rockPaperScissors("Scissors", "Rock")); // Player 2 wins!
console.log(rockPaperScissors("Paper", "Scissors")); // Player 2 wins!
console.log(rockPaperScissors("Rock", "Rock")); // It's a tie!
console.log(rockPaperScissors("Paper", "Paper")); // It's a tie!
console.log(rockPaperScissors("Scissors", "Scissors")); // It's a tie!
