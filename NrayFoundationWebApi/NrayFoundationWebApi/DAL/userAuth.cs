using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;
using NrayFoundationWebApi.DBConnection;

namespace NrayFoundationWebApi.DAL
{
    public class userAuth
    {
        static string sql = null;
        public static SqlDataReader dr = null;
       
        public static string validateUser(string uid,string password)
        {
            string userName=null;
            SqlConnection conn = DataBaseConnect.createConn();
            conn.Open();
            sql = "select userName from TBLLogin where userId='" + uid + "' and password='" + password + "'";
            SqlCommand cmd = new SqlCommand(sql, conn);
            dr = cmd.ExecuteReader();

            if(dr.Read()){
                userName=dr[0].ToString();
            }
            conn.Close();
            return userName;
        }
    }
}