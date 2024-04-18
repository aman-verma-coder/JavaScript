let companies = [["Google", "Microsoft", "Amazon"], ["TCS", "Wipro", "Cognizang"]];
for (company of companies) {
    console.log(company);
    for (char of company) {
        console.log(char);
        for (letters of char) {
            console.log(letters);
        }
    }
}