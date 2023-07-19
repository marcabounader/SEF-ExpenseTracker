$(document).ready(()=>{
    let total=0;
    let expenses_regex= new RegExp('^[0-9]*$');
    create_expense = (name,amount) =>{
        return `  
        <tr class="expenses-row">
            <td>${name}</td>
            <td id="amount">${amount}</td>
            <td><button class="btn-remove">remove</button></td>
        </tr> 
        `;
    }
    $('#btn').click(()=>{
        let expense_name=$("#expense-name");
        let expense_amount=$("#expense-amount");
        let name_error=$("#name-error");
        let amount_error=$("#amount-error");
        if(expense_name.val()){
            if(expense_amount.val()){
                if(expenses_regex.test(parseInt(expense_amount.val()))){
                    let expenses_table=$("#expenses-table");
                    let total_expenses=$("#total-expenses")
                    let new_expense=$(create_expense(expense_name.val(),expense_amount.val()));
                    total+=parseInt(expense_amount.val());
                    expenses_table.append(new_expense);
                    total_expenses.html(`Total Expenses = <span>${total}</span>`);
                    new_expense.find(".btn-remove").click(()=>{
                        new_expense.remove();
                        total-=parseInt(new_expense.find("#amount").text());
                        total_expenses.html(`Total Expenses = <span>${total}</span>`);
                    });

                } else{
                    amount_error.text('Expense amount must be a number!')
                }

            }else{
                amount_error.text('Expense amount empty!')
            }
        } else{
            name_error.text('Expense name empty!')
        }

    })
})