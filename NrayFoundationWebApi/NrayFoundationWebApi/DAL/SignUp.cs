using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using NrayFoundationWebApi.DBConnection;
using NrayFoundationWebApi.Models;

namespace NrayFoundationWebApi.DAL
{
    public class SignUp
    {
        static string sql = null;
        public static SqlDataReader dr = null;

        public static int signUp(UserSignUp userDeatils)
        {
            SqlConnection conn = DataBaseConnect.createConn();
            conn.Open();
            sql = "Insert Into TBLLogin values('"+userDeatils.userId+"','"+userDeatils.password+"','"+userDeatils.userName+"','"+userDeatils.profession+"')";
            SqlCommand cmd = new SqlCommand(sql, conn);
            return cmd.ExecuteNonQuery();
        }
    }
}