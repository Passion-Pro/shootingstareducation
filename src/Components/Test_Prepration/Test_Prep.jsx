import React, { useState } from "react";
import "./Test_Prep.css";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";

function Test_Prep() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);
  const [visible5, setVisible5] = useState(false);
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);

  return (
    <div className="test">
      <div className="contact_header">
        <div className="header_head">SAT Preparation</div>
        <div className="header_body">
          <div className="header_body_home">Home /</div>
          <div className="header_body_contact">Test Preparation</div>
        </div>
      </div>
      {/*  */}
      <div className="test_first">
          <h4 className="text_first_h4">
          Private SAT tutoring in Dubai, Sharjah and Abu Dhabi
          </h4>
          <p className="text_second_p">
          We offer private online SAT tutoring to students across the UAE and around the world.
          </p>
          <p className="text_second_p">
          Our tutors have all scored at least in the 98th percentile in the SATs, and have extensive experience tutoring students for the SATs to gain entry to College.
          </p>
      </div>

      {/*  */}
         <div className="test_second">
             <h4 className="test_second_h4">
             SAT Preparation classes in UAE
             </h4>
             <p>
             For SAT classes in UAE, the student can choose from the following variants:
             </p>
         </div>

     {/*  */}
     <div className="table_test">
     <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>SAT Small Group Batches</td>
    <td>We offer personalised SAT prep courses for small groups of no more than 4 students. Alongside course completion, we offer extra help and practice tests to familiarize students with the newly redesigned SAT. Our expert instructors are adept at working with students with wide varieties of learning styles and academic goals.

We offer the following:

Private SAT tutoring for small groups of no more than 4 students.
Course spanning over 20 hours per subject (not including practice tests).
1 Verbal and 1 Math class per week, each of duration 2 hours.
Unlimited extra help from our instructors.
Access to our carefully compiled bank of practice questions and practice tests.</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>SAT Private Tutoring (One-On-One)</td>
    <td>We offer personalised SAT prep customised to students’ needs, schedules, goals, and learning styles. We offer reliability and flexibility along with guaranteed score improvement from our expert instructors who are adept at working with students with wide varieties of learning styles and academic goals.

We offer the following:

One to one private SAT tutoring.
Course spanning over 20 hours per subject (not including practice tests).
1 Verbal and 1 Math class per week, each of duration 2 hours.
Unlimited extra help from our instructors.
Access to our carefully compiled bank of practice questions and practice tests.</td>
    <td>Mexico</td>
  </tr>
</table>
     </div>

      <div className="FAQs">
      {/* <div className="FAQs_Next"> */}
        <div className="FAQs_header">FAQs</div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible1(!visible1)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">What is SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible1 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
              SAT, earlier called as Scholastic Aptitude test is a standardized
              test. SAT is an admissions requirement for most Under Graduate
              colleges in the USA.
            </div>
          </div>
        </div>

        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible2(!visible2)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who Conducts SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible2 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is administered by College Board, a private non profit organization in USA.
            </div>
          </div>
          
        </div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible3(!visible3)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who writes SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible3 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is written by school students in their 11th grade (Junior) or 12th grade (Senior) for admissions into Under Graduate colleges in the USA & elsewhere across the globe.
            </div>
          </div>
        </div>

        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible2(!visible2)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who Conducts SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible2 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is administered by College Board, a private non profit organization in USA.
            </div>
          </div>
          
        </div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible3(!visible3)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who writes SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible3 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is written by school students in their 11th grade (Junior) or 12th grade (Senior) for admissions into Under Graduate colleges in the USA & elsewhere across the globe.
            </div>
          </div>
        </div>

        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible2(!visible2)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who Conducts SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible2 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is administered by College Board, a private non profit organization in USA.
            </div>
          </div>
          
        </div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible3(!visible3)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who writes SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible3 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is written by school students in their 11th grade (Junior) or 12th grade (Senior) for admissions into Under Graduate colleges in the USA & elsewhere across the globe.
            </div>
          </div>
        </div>

        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible2(!visible2)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who Conducts SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible2 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is administered by College Board, a private non profit organization in USA.
            </div>
          </div>
          
        </div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible3(!visible3)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who writes SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible3 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is written by school students in their 11th grade (Junior) or 12th grade (Senior) for admissions into Under Graduate colleges in the USA & elsewhere across the globe.
            </div>
          </div>
        </div>

        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible2(!visible2)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who Conducts SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible2 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is administered by College Board, a private non profit organization in USA.
            </div>
          </div>
          
        </div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible3(!visible3)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who writes SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible3 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is written by school students in their 11th grade (Junior) or 12th grade (Senior) for admissions into Under Graduate colleges in the USA & elsewhere across the globe.
            </div>
          </div>
        </div>

        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible2(!visible2)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who Conducts SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible2 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is administered by College Board, a private non profit organization in USA.
            </div>
          </div>
          
        </div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible3(!visible3)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who writes SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible3 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is written by school students in their 11th grade (Junior) or 12th grade (Senior) for admissions into Under Graduate colleges in the USA & elsewhere across the globe.
            </div>
          </div>
        </div>

        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible2(!visible2)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who Conducts SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible2 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is administered by College Board, a private non profit organization in USA.
            </div>
          </div>
          
        </div>
        <div className="FAQs_body">
        <div className="FAQs_body_Q" onClick={() => setVisible3(!visible3)}>
            <div className="FAQs_Box">
              <div className="FAQs_Box1">Who writes SAT?</div>
              <div className="FAQs_Box2">
                <ArrowDropDownRoundedIcon />
              </div>
            </div>
            <div className={visible3 ? "FAQs_Box_CO" : "FAQs_Box_C"}>
            SAT is written by school students in their 11th grade (Junior) or 12th grade (Senior) for admissions into Under Graduate colleges in the USA & elsewhere across the globe.
            </div>
          </div>
        </div> 
        </div>

      </div>
    // </div>
  );
}

export default Test_Prep;
