// variables and constant
    // constant in the sense if i declare it once i will not change it again and again

const accountId = 1234
let accountEmail ="abhisheknayak2341@gmail.com"
var accountPassword ="12345"
accountCity ="mysore"

accountEmail ="abhi@gmail.com"
accountPassword ="1235"
accountCity ="bangalore"
let accountState;
// accountId =2
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// {}-it is called scope
/* note
i am not using var  because there is a issue in block scope and functional scope
 in javascript without using var we can store the data 

 similar to this 
 accountCity ="bangalore"


 in javascript if we decalre a variable and not assigned any value to that the output will be undefined
 for that particular variable
*/
