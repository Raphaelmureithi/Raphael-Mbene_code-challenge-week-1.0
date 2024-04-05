// prompt user to enter salary and benefits
let salary = parseInt(prompt('Please enter your salary'));
let benefits = parseInt(prompt('Please enter your benefits'));
// Tax rates and deduction values
const KRA_PAYERELIEF = 2400; // P.A
const KRA_RATE1 = 0.1;
const KRA_RATE2 = 0.25;
const KRA_RATE3 = 0.3;
const NHIF_RATES = [0, 600, 840, 1200, 1500, 1800, 2000];
const NHIF_INCOMERANGES = [0, 5999, 7999, 11999, 14999, 19999, 24999, Number.POSITIVE_INFINITY];
const NSSF_EMPLOYEE_RATE = 0.06;
const NSSF_EMPLOYER_RATE = 0.06;

// Function to calculate NHIF deduction based on income
function calculateNHIF(basicSalary) {
    for (let i = 0; i < NHIF_INCOMERANGES.length - 1; i++) {
        if (basicSalary >= NHIF_INCOMERANGES[i] && basicSalary < NHIF_INCOMERANGES[i + 1]) {
            return NHIF_RATES[i];
        }
    }
}

// Function to calculate PAYE (tax) based on basic salary
function calculatePAYE(basicSalary) {
    let payee = 0;

    if (basicSalary > 24000) {
        payee += KRA_PAYERELIEF;
    }

    if (basicSalary > 32000) {
        payee += (basicSalary - 32000) * KRA_RATE3;
        basicSalary = 32000;
    }
    if (basicSalary > 16000) {
        payee += (basicSalary - 16000) * KRA_RATE2;
        basicSalary = 16000;
    }
    payee += basicSalary * KRA_RATE1;

    return payee;
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;
    const payee = calculatePAYE(basicSalary);
    const NHIFDeductions = calculateNHIF(basicSalary);
    const NSSFDeductions = basicSalary * NSSF_EMPLOYEE_RATE;
    const netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

    return {
        grossSalary,
        payee,
        NHIFDeductions,
        NSSFDeductions,
        netSalary
    };
}
console.log(`netSalary`);
