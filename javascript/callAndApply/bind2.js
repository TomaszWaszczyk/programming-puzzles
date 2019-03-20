/**
 * Created by zwstwyk on 2016-09-15.
 */
// Create an object that contains the original function.
// https://msdn.microsoft.com/pl-pl/library/x844tc74(v=vs.94).aspx
var originalObject = {
    minimum: 50,
    maximum: 100,
    checkNumericRange: function (value) {
        if (typeof value !== 'number')
            return false;
        else
            return value >= this.minimum && value <= this.maximum;
    }
};

// Check whether 10 is in the numeric range.
var result = originalObject.checkNumericRange(10);
document.write(result + " ");
console.log("Result: ", result);
// Output: false

// The range object supplies the range for the bound function.
var range = { minimum: 10, maximum: 20 };

// Create a new version of the checkNumericRange function that uses range.
var boundObjectWithRange = originalObject.checkNumericRange.bind(range);

// Check whether 10 is in the numeric range.
var result = boundObjectWithRange(10);
document.write(result);
console.log("Result: ", result);
// Output: true