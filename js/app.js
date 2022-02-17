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

    // all input value clear
    function emp()
    {
        rentAmount.value='';
        foodAmount.value='';
        clothAmount.value='';
        salaryAmount.value='';
    }
    const msgDiv=document.getElementById('errorID');
    const msg=document.getElementById('e-msg');
    if(salary<=0 || rent<0 || food<0 || cloth<0)
    {
        msgDiv.style.display='block';
        msg.innerText='Any input field cant be negative !!!';
        emp();
    }
    else if(salaryAmount.value=="" || rentAmount.value==""|| foodAmount.value=="" || clothAmount.value=="")
    {
        msgDiv.style.display='block';
        msg.innerText="Any input field can't be empty !!!";
        emp();
    }
    else if(isNaN(salaryAmount.value) || isNaN(rentAmount.value) || isNaN(foodAmount.value) || isNaN(clothAmount.value))
    {
        msgDiv.style.display='block';
        msg.innerText="Any input field can't be String !!!";
        emp();
    }
    else if(rent>salary || food>salary || cloth>salary)
    {
        msgDiv.style.display='block';
        msg.innerText="Any expenses can't be greater than salary !!!";
        emp();
    }
    else
    {
        //sum of total expanses
        const totalExp=rent+food+cloth;

        if(totalExp<=salary)
        {
            msgDiv.style.display='none';
            const balanceExp=document.getElementById('balance-money');
            const showExp=document.getElementById('total-exp');
            showExp.innerText=totalExp;
            const balance=salary-totalExp;
            balanceExp.innerText=balance;
            emp();
        }
        else
        {
            msgDiv.style.display='block';
            msg.innerText="Total expense can't be greater than salary !!!";
            const balanceExp=document.getElementById('balance-money');
            const showExp=document.getElementById('total-exp');
            showExp.innerText="0000";
            balanceExp.innerText="0000";
            emp();
        }

        
    }
})

//save button 

document.getElementById('save-button').addEventListener('click',function(){
    const saveParcent=document.getElementById('save-parcent');
    const amount=parseFloat(saveParcent.value);
    // error-handle
    const msgDiv=document.getElementById('error-2-ID');
    const msg=document.getElementById('e-2-msg');

    if(amount<=0 || isNaN(saveParcent.value) || saveParcent.value=="")
    {
        msgDiv.style.display='block';
        msg.innerText="Please enter a valid input !!!";
          //alert("Please give a valid input");
          saveParcent.value='';
    }
    else
    {
        const balanceExp=document.getElementById('balance-money');
        const balance=parseFloat(balanceExp.innerText);
        if(balance<=0)
        {
            msgDiv.style.display='block';
            msg.innerText="Balance is insufficient !!!";
            //alert("Balance is insufficient");
            saveParcent.value='';
        }
        else
        {
            
            msgDiv.style.display='none';
            const saving =balance*(amount/100);
            const s=document.getElementById('saving-amount');
            s.innerText=saving;
            const remain=document.getElementById('remain-amount');
            remain.innerText=balance-saving;
            saveParcent.value='';
        }
    }
})