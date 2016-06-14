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
            sql = "Insert Into TBLLogin values('"+userDeatils.userId+"','"+userDeatils.password+"','"+userDeatils.userName+"','"+userDeatils.profession+"','"+userDeatils.status+"')";
            SqlCommand cmd = new SqlCommand(sql, conn);
            return cmd.ExecuteNonQuery();
        }

        public static UserSignUp getRegistrationReq()
        {
            UserSignUp userDetails = new UserSignUp(); ;
            SqlConnection conn = DataBaseConnect.createConn();
            conn.Open();
            sql = "Select* from TBLLogin";
            SqlCommand cmd = new SqlCommand(sql, conn);
            dr = cmd.ExecuteReader();

            while(dr.Read()){
                userDetails.userId = dr[0].ToString();
                userDetails.userName = dr[2].ToString();
                userDetails.profession = dr[3].ToString();
                userDetails.status = dr[4].ToString();
            }

            return userDetails;
        }
    }
}