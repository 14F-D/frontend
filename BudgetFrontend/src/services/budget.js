import Axios from './dataservice'

export default {
    getExpensesByUserId(userId){
        return Axios.get(`/expenses/${userId}`)
    },
    createExpenses(){
        return Axios.post(`/expenses/create`)
    },
    updateExpenses(userId){
        return Axios.put(`/expenses/update/${userId}`)
    },
    deleteExpenses(userId){
        return Axios.delete(`/expenses//delete/${userId}`)
    },
    getIncomesByUserId(userId){
        return Axios.get(`/incomes/${userId}`)
    },
    createIncome(incomeData){
        return Axios.post(`/incomes/create`,incomeData)
    },
    updateIncomes(EditIncomeData,Id){
        return Axios.put(`/incomes/update/${Id}`,EditIncomeData)
    },
    deleteIncomes(userId){
        return Axios.delete(`/incomes/delete/${userId}`)
    },
    getByExpenseId(expenseId){
        return Axios.get(`/tagsExpenses/expense/${expenseId}`)
    },
    getTagById(id){
        return Axios.get(`/tags/${id}`)
    },
}