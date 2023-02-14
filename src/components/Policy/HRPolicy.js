import React from 'react'
import Navbar from '../Home/Navbar'
import { Button } from 'primereact/button';

const HRPolicy = () => {
    return (
        <div>
            <Navbar />
            <div className="text-700 text-center pr-6 pl-6 pb-6 pt-2">
                <img src="assets/logo2.png" className="img-fluid" alt='logo' width="400" />
                <div className="font-bold text-4xl mb-3" style={{ color: 'var(--primaryColor)' }}>WHPLO HR Policies</div>
                <div className="text-700 text-justify container">
                    <div className="text-200">The employee's obligation is to carry out all duties in relation to Women’s Hope for Peace & Life Organization programs and the humanitarian work implied there in to the best of her / his abilities in Afghanistan.
                    The employee is subject to the authority of the executive Director and the Line Managers and Assignments by them to any   of the required activities laid down in WHPLO work programs and other wise on order of Supervisors. He or She is Responsible to the exercise of his /her function that has been defined in the job description.
                    No employees shall accept any personal honor, favor, gift or remuneration from any source outside of Women’s Hope for Peace & Life Organization that will damage the Status of Peace organization.
                    </div>
                    <Button icon="pi pi-download" label='Download HR Policy' aria-label="Download" className='mt-2' />
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Working hours / attendance</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            It is the duty of the employee to attend his / her place of work punctually. If the employee fails to report to work, the office must be informed about it immediately or at the earliest possible time, unauthorized absence will entail disciplinary actions, see chapter 7.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Working Hours</div>
                            Normal working hours are average 8 hours per day, 48 per Week, 6 Days a week:
                            <ul className='m-2'>
                                <li>Summertime: April – September: Saturday- Thursday 8:00 am -4:30 pm</li>
                                <li>Wintertime: October – March: Saturday = Thursday 8:30 am – 4:00 pm </li>
                                <li>Working Hours during Ramadan: Saturday – Thursday 8:00 am – 2:00 pm </li>
                                <li><b>Note:</b> On Thursday Staff will work 4 hours.</li>
                            </ul>
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Flex time</div>
                            On the approval of executive director managers may introduce flexi time working days either temporarily or permanently. Flextime is when the worker is permitted to report at and leave his/ her station of duty to another time than set under normal working hours. The number of hours worked shall still be 8 per day.
                            Launch Break of 1 hour is normally taken from 12:00 Pm to 1:00 PM. Managers may in agreement in his / her subordinate staff decide another time for launch break.
                            Working hours for drivers are 56 per week. The hours for drivers allocated for pick & drop are 7 Am to 5:00 Pm  
                            Working hours for security guards are 12 hours per day, 72 hours per week Compensatory days may be granted for duty performed on an official holiday. Cash payment for overtime shall not be allowed. In exceptional cases e.g. When ordered to work outside normal working hours executive director may approve payment for over time.
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/FC.png" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Recruitment and appointment procedures</div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/FI.jpg" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            WHPLO Provide equal opportunities for all, there is no discrimination in gender, color, religious and disability, all staff are recruited through open competition and are applying through only jobs site to WHPLO advertised position. The process of recruitment is always conducted through a transparent way and they positions are offered based on the result of interview and written test process. 
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Criteria for employment </div>
                            The following Criteria are set, which should be used to judge an applicant's suitability for a position with WHPLO.
                            <ul className='m-2'>
                                <li>Ability to perform the duties of the post.</li>
                                <li>Possession of necessary and required qualifications.</li>
                                <li>Ability to cooperate harmoniously with fellow members of staff.</li>
                                <li>Ability to work harmoniously with and approach local authority/community people of the area of his/her duty station in accordance with the code of conduct.</li>
                            </ul>
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Procedure</div>
                            The recruitment process is designed to locate potentially good applicants, once applications are received, the selection should attempt to reduce or thin out the numbers by selecting the most successful ones, at this point the recruitment committee should reciprocate the effort made by the potential employee to join the organization by equally communicating the values and other pertinent information that may be critical to the employee's decision making, this method should essentially create a first impression mutual respect and trust between the employee and he organization.
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Vacancy Announcement and Application</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            A 3- Member ad hoc committee is appointed to conduct the recruitment procedures, a vacancy announcement will normally be drawn up and widely circulated, the announcement should contain I, e following information: details of position (Job title, grade, duties, duty station and condition of employment) qualification and experience required.
                            Applicants must complete a standard Women’s Hope for Peace and Life Organization Job application form.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Selection of Candidates for screening interview</div>
                            The first batch of applicants that have been selected short listed as potential candidates will be duly informed to appear for a screening interview, the screening interview should serve as a base for selection of the most competent candidates qualifying for a written examination.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Examination, interviews and suggestion of final list of Candidates</div>
                            Applicants are called for technical examination in their own field of profession Craftsmanship, computer and language skills (English/ Dari / Pashto).
                            In case of service position the examination is practical.
                            The ad hoc exam committee assesses the test results and short lists candidates for a conclusive interview, a standard interview form with a number of pre- determined qualities will be used, the result will be suggested to executive director for final approval.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Selection Appointment and contract</div>
                            The Interviewed candidates will be ranked based on the result of interview and prioritize the references checked. If these are satisfactory or the candidate does not wish to accept the job, the same process will repeated on the second short listed candidate and So on.
                            Criminal background of applicant will also be checked, a person will be ineligible for selection if found            involved in any criminal activities.
                            Prior to signing of employment contract, the prospective employees will receive a letter of appointment which they will be asked to sign and return to WHPLO as conformation of their agreement.
                            A regret letter is to be sent to the non-selected candidates.
                            After conclusion of the appointment process, the prospective employee is invited to sign an employment contract, which is to be signed by both parties (WHPLO representative and the employee). This document will outline the agreed upon starting date, duty station, travel requirements etc. and along with it, a job description is annexed outlining in detail the scope of work and other responsibilities and rights of the employee.
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/FA.jpg" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Job Description</div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/CC.webp" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            A well- defined description should be in place for each position; individual job description should necessarily accompany each employment contract. The job description will provide clear and defined areas of responsibility to the employee, while it serves WHPLO as a tool by which to measure the performance of the employee.
                            A job description has been designed for each position, in order to endure accountability and avoid confusion.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Termination Contract/Employment</div>
                            Either party for any reason may terminate contract on 1- month notice, during probation period, either side may terminate contracts with one-week prior written notice with a short explanation. In cases of malpractice, embezzlement, theft, fraud or the contract may be terminated by WHPLO with immediate effect.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Resignation</div>
                            Resignation is when the employee decides to terminate the employment contract with WHPLO in this case notice in writing of 1-month is required, if the employee needs to terminate the employment with the immediate effect, he / she will wave off one month's salary, the employee, who terminated his/ her contract, is required to receive a clearance certificate form his/her supervisor, admin and finance departments. A service certificate would also be given to the employee who terminated his/her employment with WHPLO after receiving clearance certificate from the mentioned authorities.
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Disciplinary Actions</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            An employee may be subject to disciplinary action if she/ he violates the work and employment conditions of WHPLO, or breaks the rules and regulations of the organization.
                            The action may take the form of verbal or written warning, loss of pay, degradation, suspension with or without pay or in more severe cases dismissal. 
                            Monetary compensation will be demanded in cases of abuse, misuse, damage due to gross misconduct or negligence of employee, of WHPLO property or the property of a beneficiary or a cooperating partner.
                            Gross misbehavior may lead to immediate dismissal, e.g. but not limited to:
                            <ul>
                                <li>Soliciting and accepting bribe</li>
                                <li>Drunkenness, drug abuse, physical fighting while on duty.</li>
                                <li>Theft and misuse of WHPLO funds or property.</li>
                                <li>Trading of WHPLO funds on black markets.</li>
                                <li>Discrimination against current or intended WHPLO Program beneficiaries for reasons of Sex. </li>
                                <li>Race, religion and belief.</li>
                                <li>Absence from work for 5 work days without prior notice or approval</li>
                                <li>Unauthorized use of WHPLO vehicles (except in cases of emergency) </li>
                            </ul>
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/PC.jpg" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Authorities</div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/PR.jpg" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            The following personnel may implement penalties on personal under their supervision and control as indicated:
                            <ul>
                                <li>The executive Director- All penalties.</li>
                                <li>The immediate supervisor- Written warnings and deduction of maximum one week's salary.</li>
                            </ul>
                            <div className="font-bold text-2xl" style={{ color: 'var(--primaryColor)' }}>Implementation of Disciplinary Move</div>
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Written Warnings</div>
                            Written warnings are preferentially to be made in triplicate. The warning is to contain what alienation has taken place. It is to be signed by the issuing authority and in the presence of a witness handed to the transgressor.
                            One Copy will be retained in personal file and third copy is sent to the executive Director and original to the transgressor.
                            The superior authority reserves the right to approve or nullify the penalty and passes the document to management for filing.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Loss of pay, loss of accumulated leave</div>
                            A punishment of three days loss of pay is to be given in writing. In addition, the superior to the transgressor will hand over a copy of the approved penalty to the finance department for salary adjustment.
                            Unauthorized absence is normally as a first step of disciplining compensated by reducing the number of accrued leave days by number of absence days.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Salary</div>
                            The basic salary payable to each employee is in accordance with the salary scale of WHPLO. The executive Director in special instances deviates from the salary scale levels. 
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Currency, payday, bank</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            All salaries are paid in USD (according to project currency) Afghanis, the salaries normally being released between the 25th and the 31st of each month. WHPLO Reserves the right to settle any outstanding financial matter with the employee for instance by deducting loan repayment installments from the employee's salary.
                            Employees of WHPLO are encouraged to open salary accounts where banking systems are in place and agree with accounts section to have their salaries transferred directly into these accounts.
                            Employees of WHPLO are encouraged to open salary accounts where banking system are in place and agree with accounts section to have their salaries transferred directly into these accounts.    
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>SALARY ADJUSTMEN & INCREMENTS</div>
                            The Executive Director in cooperation with his/her Advisory committee and the line manager will from time to time, normally at the beginning of each fiscal year, assess the salaries of all WHPLO staff and decide on adjustment required. Performance Evaluation reports will be looked into on questions of individual salary adjustments, all such reports must be in writing and filed in the personal file.                                                           
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Income Tax</div>
                            Liability for the payment of income tax remains with the employee. Tax will be deducted from salaries as per legal requirement of income tax law of Afghanistan and will be deposited to government treasury.
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/PC.jpg" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Annual Leave</div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/PR.jpg" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            All employees are entitled to 20 working days leave per year. Annual leaves are approved and are at the discretion of the Line Managers or the Execute Director. Mangers decide a reasonable notice time for subordinates preparing for leave. Senior staff (mangers and above) agree with Executive Director on time of leave. The Admin Managers must always be informed about when staff is on leave.
                            Employees are encouraged to use their annual leave as and Managers ensure that annual leave is set to a time that gives the lease possible negative effects to activities of WHPLO.
                            If all the annual leaves have not been availed by an employee by the end of the year, these will be carried forward to coming year up to maximum of 5 days.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Sick leave</div>
                            Sick leave, maximum 10 ten days per calendar year is granted upon hospitalization or on certification by a medical doctor. For employees who have not completed probation period, the calculation is one day per calendar month completed. For sick leave of 3 consecutive for days or more, the employee must provide a doctor's prescription, evidence of medical tests, medicines bills etc. An employee may be requested to provide a medical certificate also if she/he is repeatedly absent on sick leaves of shorter duration than 3-days The Administration Department must keep record on all medical certificate. Extended illness duration, another 10 days sick leave maybe granted without pay.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HRPolicy