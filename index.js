// code your solution here
// Function to find the year the Denver Broncos won the Super Bowl
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  // Sample data for testing
  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "1998", result: "W" },
    { year: "1997", result: "W" }
  ];
  
  // Running the function and logging the output
  console.log(superbowlWin(record)); // Output: "2015"
  
  // Export function for testing purposes
  module.exports = superbowlWin;
  