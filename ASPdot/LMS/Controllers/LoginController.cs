using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Models;

namespace LMS.Controllers
{
    [RoutePrefix("api/login")]
    public class LoginController : ApiController
    {
        LMSEntities2 DB = new LMSEntities2();


        [Route("Register")]
        [HttpPost]
        public object InsertEmployee(User Reg)
        {
            try
            {

                User EL = new User();
                if (EL.AccountNo == 0)
                {
                    EL.AccountNo = Reg.AccountNo;
                    EL.Name = Reg.Name;
                    EL.Password = Reg.Password;
                    EL.PermanentAddress = Reg.PermanentAddress;
                    EL.PAN = Reg.PAN;
                    EL.Phone = Reg.Phone;
                    EL.DOB = Reg.DOB;
                    EL.Email = Reg.Email;
                    DB.Users.Add(EL);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Record SuccessFully Saved." };
                }
            }
            catch (Exception)
            {

                throw;
            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }





        [Route("loginuser")]
        [HttpPost]
     
        public IHttpActionResult Login(Login login)
        {
            if (login.Name == "admin" && login.Password == "admin")
            {
                return Ok(new { status = 201, isSuccess = true, message = "Admin Login successfully", UserDetails = login.Name });
            }
            else
            {

                var log1 = DB.Users.Where(x => x.Name.Equals(login.Name) && x.Password.Equals(login.Password)).FirstOrDefault();
                var log2 = DB.ClientManagers.Where(x => x.Name.Equals(login.Name) && x.Password.Equals(login.Password)).FirstOrDefault();

                if (log1 != null)
                {
                    return Ok(new { status = 204, isSuccess = true, message = "User Login successfully", UserDetails = log1 });

                }
                else if (log2 != null)
                {

                    return Ok(new { status = 202, isSuccess = true, message = "User Login successfully", UserDetails = log2 });
                }
                else
                    return Ok(new { status = 401, isSuccess = false, message = "Invalid User", });
            }
        }
        [Route("UserDetailsbyID")]
        [HttpGet]
        public object UserById(int id)
        {
            var obj = DB.Users.Where(x => x.AccountNo == id).ToList().FirstOrDefault();

            return obj;
        }


        [Route("EditUser")]
        [HttpPost]
        public object EditLoanProgram(User lop)
        {
            if (lop.AccountNo > 0)
            {
                var obj = DB.Users.Where(x => x.AccountNo == lop.AccountNo).ToList().FirstOrDefault();
                obj.Name = lop.Name;
                obj.AccountNo = lop.AccountNo;
                obj.DOB = lop.DOB;
                obj.PAN = lop.PAN;
                obj.PermanentAddress = lop.PermanentAddress;
                obj.Phone = lop.Phone;
                obj.Email = lop.Email;
                obj.Password = lop.Password;
                DB.SaveChanges();
                return new Response
                {
                    Status = "Updated",
                    Message = "Updated Successfully"
                };
            }
            else
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Invalid Data"
                };
            }
        }



        [Route("UserDetails")]
        [HttpGet]
        public object UserDetails(long id)
        {
            var obj = DB.Users.Where(x => x.AccountNo == id).ToList().FirstOrDefault();
            return obj;
        }
        [Route("UpdateUserDetails")]
        [HttpPost]
        public object UpdateUserDetails(User lop)
        {
            try
            {
                User AT = new User();
                var obj = DB.Users.Where(x => x.AccountNo == lop.AccountNo).ToList().FirstOrDefault();

                if (obj.AccountNo > 0)

                {
                    obj.Name = lop.Name;
                    obj.AccountNo = lop.AccountNo;
                    obj.DOB = lop.DOB;
                    obj.PAN = lop.PAN;
                    obj.PermanentAddress = lop.PermanentAddress;
                    obj.Phone = lop.Phone;
                    obj.Email = lop.Email;
                    obj.Password = lop.Password;
                    DB.SaveChanges();


                    return new Response
                    {
                        Status = "Updated",
                        Message = "Updated Successfully"
                    };

                }
                else
                {
                    return new Response
                    {
                        Status = "Error",
                        Message = "Invalid Data"
                    };

                }
            }
            catch (Exception e)
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Invalid Data"
                };


            }
        }


        [Route("LoanProgramdetails")]
        [HttpGet]
        public object LoanProgramdetailById(int id)
        {
            var obj = DB.LoanPrograms.Where(x => x.Id == id).ToList().FirstOrDefault();
            return obj;
        }

  



    }
}

