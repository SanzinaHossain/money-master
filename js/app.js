document.getElementById('calculate-button').addEventListener('click',function(){
    //salary value
    const salaryAmount=document.getElementById('salary-amount');
    const salary=parseFloat(salaryAmount.value);
    //rent value
    const rentAmount=document.getElementById('rent-amount');
    const rent=parseFloat(rentAmount.value);
    //food value
    const foodAmount=document.getElementById('food-amount');
    const food=parseFloat(foodAmount.value);
    //cloth value
    const clothAmount=document.getElementById('cloth-amount');
    const cloth=parseFloat(clothAmount.value);
    //balance calculate
    const balanceExp=document.getElementById('balance-money');
    if(salary>0 && !isNaN(salaryAmount.value))
    {
        const totalExp=rent+food+cloth;
        const showExp=document.getElementById('total-exp');
        showExp.innerText=totalExp;
        rentAmount.value='';
        foodAmount.value='';
        clothAmount.value='';
        if(salary>=totalExp)
        {
            const balance=salary-totalExp;
            balanceExp.innerText=balance;
            salaryAmount.value='';
        }
        else
        {
            salaryAmount.value='';
            alert("salary less than expenses");
        }
    }
    else{
        alert("salary less than zero");
        salaryAmount.value='';
    }
    
})