using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NrayFoundationWebApi.Models
{
    public class UserSignUp
    {
        public string userId { get; set; }
        public string password { get; set; }
        public string userName { get; set; }
        public string profession { get; set; }
        public string status { get; set; }
    }
}