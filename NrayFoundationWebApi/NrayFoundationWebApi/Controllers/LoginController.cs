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
    public class LoginController : ApiController
    {
        List<Login> logins = new List<Login>();

        public IHttpActionResult Post([FromBody]Login userCredentials)
        {
            return Ok(userAuth.validateUser(userCredentials.userId, userCredentials.password));
        }
    }
}
