using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NrayFoundationWebApi.Models
{
    public class Expense
    {
    	public int expenseId { get; set; }
        public double amount { get; set; }
        public string expenseDate { get; set; }
        public string description { get; set; }
    }
}