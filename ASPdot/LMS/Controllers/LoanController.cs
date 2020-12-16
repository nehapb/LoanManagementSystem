using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using LMS.Models;

namespace LMS.Controllers
{
    [RoutePrefix("api/loan")]
    public class LoanController : ApiController
    {
        LMSEntities2 DB = new LMSEntities2();


        [Route("HomeLoan")]
        [HttpPost]
        public object InsertUser(Loan Reg)
        {
            try
            {


                Loan HL = new Loan();
                LoanProgram lp = new LoanProgram();
                if (HL.LoanAccountNo == 0)
                {
                    HL.LoanId = Reg.LoanId;
                    lp.LoanType = lp.LoanType;
                    HL.PresentAddress = Reg.PresentAddress;
                    HL.Occupation = Reg.Occupation;
                    HL.AnnualIncome = Reg.AnnualIncome;
                   
                    HL.LoanAmount = Reg.LoanAmount;
                    HL.Duration = Reg.Duration;
                    HL.AccountNo = Reg.AccountNo;
                    HL.EMI = Reg.EMI;
                    DB.Loans.Add(HL);
                    DB.SaveChanges();
                    return new Response
                    { Status = "Success", Message = "Record SuccessFully Saved." };
                }
            }
            catch (Exception)
            {


            }
            return new Response
            { Status = "Error", Message = "Invalid Data." };
        }




        [Route("CreateLoanProgram")]
        [HttpPost]
        public object EditLoanprogram(LoanProgram lop)
        {
            try
            {

                LoanProgram AT = new LoanProgram();
                if (AT.Id == 0)
                {
                    AT.LoanType = lop.LoanType;
                    AT.Interest = lop.Interest;
                    AT.Description = lop.Description;

                    DB.LoanPrograms.Add(AT);
                    DB.SaveChanges();

                    return new Response
                    {
                        Status = "Success",
                        Message = "Record SuccessFully Saved."
                    };
                }




            }
            catch (Exception ex)
            {

                Console.WriteLine(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }



        [Route("DisplayLoanPrograms")]
        [HttpGet]
        public object DisplayLoanPrograms()
        {

            var a = DB.LoanPrograms.ToList();
            return a;
        }

        [Route("EditLoanProgram")]
        [HttpPut]
        public object EditLoanProgram(LoanProgram lop)
        {
            if (lop.Id > 0)
            {
                var obj = DB.LoanPrograms.Where(x => x.Id == lop.Id).ToList().FirstOrDefault();
                obj.LoanType = lop.LoanType;
                obj.Interest = lop.Interest;
                obj.Description = lop.Description;
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


        [Route("LoanProgramdetails")]
        [HttpGet]
        public object LoanById(int id)
        {
            var obj = DB.LoanPrograms.Where(x => x.Id == id).ToList().FirstOrDefault();

            return obj;
        }





        [Route("DeleteLoanProgram")]
        [HttpDelete]
        public object DeleteLoanProgram(int id)
        {
            var obj = DB.LoanPrograms.Where(x => x.Id == id).ToList().FirstOrDefault();
            DB.LoanPrograms.Remove(obj);
            DB.SaveChanges();
            return new Response

            {
                Status = "Delete",
                Message = "Delete Successfuly"
            };





        }

        [Route("Homeloanbyusermessage")]
        [HttpGet]
        public object Homeloanbyusermessage(long id)
        {
            var obj = DB.Loans.Where(x => x.AccountNo == id).ToList().FirstOrDefault();
            return obj;
            // return DB.HomeLoans.ToList();
        }

        [Route("Homeloanbyusermessage")]
        [HttpPut]
        public object payLoan(long id, int amount)
        {


            var obj = DB.Loans.Where(x => x.AccountNo == id).ToList().FirstOrDefault();
            if (obj.AccountNo > 0)
            {

                if (obj.LoanAmount > 0)
                {
                    obj.LoanAmount = obj.LoanAmount - amount;

                    DB.SaveChanges();
                    return obj;
                }
                else
                {
                    return new Response
                    {
                        Status = "complete",
                        Message = "No more pending"
                    };
                }
            }
            else
            {
                return new Response
                {
                    Status = "Error",
                    Message = "Invalid data"

                };

            }

            // return DB.HomeLoans.ToList();
        }


        [Route("UpdateLoanProgram")]
        [HttpPost]
        public object UpdateLoanProgram(LoanProgram ast)
        {
            try
            {
                LoanProgram AT = new LoanProgram();
                var obj = DB.LoanPrograms.Where(x => x.Id == ast.Id).ToList().FirstOrDefault();

                if (obj.Id > 0)

                {

                    obj.LoanType = ast.LoanType;
                    obj.Interest = ast.Interest;
                    obj.Description = ast.Description;
                    DB.SaveChanges();

                    return new Response
                    {
                        Status = "Updated",
                        Message = "Updated Successfully"
                    };

                }

            }

            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            return new Response
            {
                Status = "Error",
                Message = "Invalid Data."
            };
        }



    }
}
