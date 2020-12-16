using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Models;

namespace LMS.Controllers
{
    [RoutePrefix("api/homeloan")]
    
    public class HomeLoanController : ApiController
    {
        LMSEntities2 DB = new LMSEntities2();
        [Route("userdetails")]
        [HttpGet]
        public object userdetails()
        {
            var a = DB.Users.ToList();
            return a;
        }
        [Route("userdetailsbyaccno")]
        [HttpGet]
        public object userdetailsbyaccno(int accno)
        {
            var obj = DB.Users.Where(x => x.AccountNo == accno).ToList().FirstOrDefault();
            return obj;
           
        }

       
    }
}
