using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LMS.Models
{
    public class Home
    {
        public long LoanAccountNo { get; set; }
        public int LoanId { get; set; }
        public string PlotAddress { get; set; }
        public string Occupation { get; set; }
        public int AnnualIncome { get; set; }
       
        public int LoanAmount { get; set; }
        public long AccountNo { get; set; }
        public int Duration { get; set; }
        public float EMI { get; set; }
    }
}