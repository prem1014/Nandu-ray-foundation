using NrayFoundationWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using NrayFoundationWebApi.DAL;

namespace NrayFoundationWebApi.Controllers
{
    public class ExpenseController : ApiController
    {
        List<Expense> expense = new List<Expense>();

        public IHttpActionResult Post([FromBody]Expense expenseReport)
        {
            return Ok(ExpenseDAL.createExpense(expenseReport));
        }
    }
}
