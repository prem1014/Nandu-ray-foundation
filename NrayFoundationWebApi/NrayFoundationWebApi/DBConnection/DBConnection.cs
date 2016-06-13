using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;

namespace NrayFoundationWebApi.DBConnection
{
    public class DataBaseConnect
    {
        public static SqlConnection createConn()
        {
            SqlConnection conn = new SqlConnection(
             "Data Source=(LocalDB)\\v11.0;AttachDbFilename=C:\\USERS\\PREM\\DOCUMENTS\\NRAYFOUNDATION.MDF;Integrated Security=True;Connect Timeout=30");
            return conn;
        }
    }
}