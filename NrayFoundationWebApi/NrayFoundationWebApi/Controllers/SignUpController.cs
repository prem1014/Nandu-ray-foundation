using NrayFoundationWebApi.DAL;
using NrayFoundationWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace NrayFoundationWebApi.Controllers
{
    public class SignUpController : ApiController
    {
        List<UserSignUp> signUp = new List<UserSignUp>();

        public IHttpActionResult Post([FromBody]UserSignUp userDetails)
        {
            return Ok(SignUp.signUp(userDetails));
        }

        public IHttpActionResult Get()
        {
            return Ok(SignUp.getRegistrationReq());
        }
    }
}
