import React from 'react'
import Navbar from '../Home/Navbar'
import { Button } from 'primereact/button';

const ProcurePolicy = () => {
    return (
        <div>
            <Navbar />
            <div className="text-700 text-center pr-6 pl-6 pb-6 pt-2">
                <img src="assets/logo2.png" className="img-fluid" alt='logo' width="400" />
                <div className="font-bold text-4xl mb-3" style={{ color: 'var(--primaryColor)' }}>WHPLO Procurement/Logistics Policies</div>
                <div className="text-700 text-justify container">
                    <div className="text-200">Corruption and inefficiency in procurement decreases the benefits that public resources otherwise could have delivered to citizens, and also lowers the level of trust and confidence in governments. Procurement policies and procedures should be revisited often to make sure they are still meeting your needs, failure to do so could create problems throughout the organization.</div>
                    <Button icon="pi pi-download" label='Download Procurment Policy' aria-label="Download" className='mt-2' />
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Commitment</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            The Women`s Hope for Peace & Life Organization (WHPLO) is firmly committed to the highest ethical standards, to combat nepotism and corruption, and to be transparent in all its procurements, programs, and operations in Afghanistan. WHPLO is committed to be accountable to all internal and external stakeholders, including suppliers, beneficiaries, partners, donors, volunteers, interns, employees, management, officers, and the Board of Directors, and to expect the same ethics, transparency, and accountability in return from our stakeholders.
                            Public procurement is known to be one of the most corruption-prone areas of governance. Although much of the global anti-corruption focus on procurement is in the public sector, similar procurement risks and concerns exist within the world of civil society and NGOs. With this in mind:
                            WHPLO management and staff will exercise extra caution in all procurements, and adhere to the following ethical guidelines and principles:
                            <ol className='m-2'>
                                <li>Ensure that the funds from our donors are spent wisely, and that the quality and price of goods, works, assets and services is competitive, and that the conduct of suppliers fulfill the highest ethical standards.  </li>
                                <li>Prioritize Afghan owned and run companies.</li>
                                <li>Prioritize women owned and run companies. </li>
                                <li>Prioritize companies that can document that they provide equal opportunities for women, members of ethnic, language and religious minorities, and persons with disabilities. </li>
                                <li>Suppliers of goods, works, assets and services shall neither seek nor accept instructions from any authority external to WHPLO, or communicate at any time to any other person, government, or authority external to WHPLO, any information known to them by reason of their association with the WHPLO which has not been made public, except as would be  normal and expected in the course of their duties, or through WHPLO’s authorization, nor shall suppliers at any time use such information to private advantage. WHPLO will not knowingly procure goods, works, assets and services from suppliers that:
                                    <ul>
                                        <li>Are owned by senior government power holders and members of parliament  </li>
                                        <li>Have offered bribes to WHPLO management and staff  </li>
                                        <li>Are owned by WHPLO senior management, their families, or close relatives</li>
                                        <li>Are engaged in the production, sale, or marketing of weapons  </li>
                                        <li>Employ children (under the age of 15) and youth (legal restriction on working hours and what kind of work youth between the age of 15 and 18 are allowed to do) as per rules and regulations in the Afghan Labor Law (1999) and international labor conventions (ILO Conventions no. 138 and no. 182 )</li>
                                        <li>Have poor environmental records </li>
                                    </ul>
                                </li>
                            </ol>
                            Where donors and partners have specific procurement rules and regulations, WHPLO will follow these.
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/FC.png" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="text-200 p-4" style={{ background: '#addaed' }}>
                        <div className="font-bold text-2xl" style={{ color: 'var(--primaryColor)' }}>Afghan Labor Law (1999)</div>
                        <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Terms of Recruitment – Article 13 </div>
                        A person who may be employed as an employee shall:
                        <ol>
                            <li>Have completed 18 years of age.</li>
                            <li>Completion of 15 years of age shall be required for employees of light industries.</li>
                            <li>Completion of 14 years for trainees. </li>
                        </ol>
                        <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Reduction of Work Time – Article 31</div>
                        The weekly work hours of Employees are reduced in the following cases: (1) For youths between 15 and [under] 18 year of age- 35 hours per week.
                    </div>
                    <div className="text-200 p-4 mt-2" style={{ background: '#addaed' }}>
                        <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>ILO Convention on Minimum Age, 1973 (No. 138)</div>
                        is the effective abolition of child labor which is work that is hazardous to children’s health, safety or morals, work that interferes with compulsory education or for which they are simply too young.
                        C138 was adopted by the International Labor Organization (ILO) in 1973. It stipulates that States should progressively raise the minimum age to a level consistent with the fullest physical and mental development of young people. It establishes 15 as the minimum age for work in general.
                    </div>
                    <div className="text-200 p-4 mt-2" style={{ background: '#addaed' }}>
                        The Recommendation of <b>ILO Convention No. 146</b> which accompanies Convention No. 138, stresses that national policies and plans should provide for: poverty alleviation and the promotion of decent jobs for adults, so that parents do not need to resort to child labor; free and compulsory education and provision of vocational training; extension of social security and systems for birth registration; and appropriate facilities for the protection of children, and adolescents who work. To achieve the elimination of child labor, laws setting minimum ages for work should be embedded in such comprehensive policy responses.
                    </div>
                    <div className="text-200 p-4 mt-2" style={{ background: '#addaed' }}>
                        <div className="font-bold text-2xl" style={{ color: 'var(--primaryColor)' }}>ILO Worst Forms of Child Labor Convention, 1999 (No. 182)</div>
                        <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Article 3</div>
                        For the purposes of this Convention, the term the worst forms of child labor comprises:
                        <ol>
                            <li>all forms of slavery or practices similar to slavery, such as the sale and trafficking of children, debt bondage and serfdom and forced or compulsory labor, including forced or compulsory recruitment of children for use in armed conflict</li>
                            <li>Work which, by its nature or the circumstances in which it is carried out, is likely to harm the health, safety, or morals of children.</li>
                        </ol>
                    </div>

                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>What is procurment</div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/FI.jpg" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            Procurement, as it relates to organizations such as the WHPLO, refers to the process of purchasing goods, assets, works, or services. It requires preparation, solicitation, negotiation and strategic selection of goods and services, and payment processing, which usually involves several departments of the organization. Competitive bidding is a part of larger scale procurement processes involving multiple bidders to ensure optimal transparency and reduce corruption vulnerabilities.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Decentralized VS centralized procurement process</div>
                            The WHPLO Procurement Team is represented in all regions and provinces where WHPLO has offices.
                            WHPLO is implementing decentralized procurement processes for smaller procurements. Procurements of goods and services in value of up to USD 10,000 can therefore be approved by the Head of the Regional, Provincial, or Project Offices, as long as these are in line with agreed budgets and plans of operations.
                            For medium sized procurements (in value of between USD 10,000 and USD 50,000), WHPLO implements a decentralized procurement process, however, final approval is made by the Country Director, or the Deputy Director & Director of Support Services.
                            With larger procurements, over USD 50,000, the procurement process is centralized, and documents must be approved by the Country Director. And, for procurements over the value of USD 200,000 the Country Director will consult with the Secretary General before approval is granted, to ensure the greatest possible transparency.
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>The 8 steps of procurment</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            <ol>
                                <li><b>Step 1</b> Identify goods or services needed </li>
                                <li><b>Step 2</b> Announce a Request Quotations (for larger procurements) </li>
                                <li><b>Step 2</b> Consider a List of Suppliers (for smaller procurements) </li>
                                <li><b>Step 3</b> Form an Ad-Hoc Procurement Team for a comprehensive evaluation of suppliers and bids (for larger procurements) </li>
                                <li><b>Step 4</b> Negotiate contract terms with selected supplier </li>
                                <li><b>Step 5</b> Finalize the purchase request </li>
                                <li><b>Step 6</b> Receive invoice and process payment (upon or after delivery) </li>
                                <li><b>Step 7</b> Delivery and audit of the order </li>
                                <li><b>Step 8</b> Maintain accurate record of invoices and the procurement process </li>
                            </ol>
                            To ensure efficiency, cost effectiveness and relevance, procurement processes must be flexible, therefore the Country Director alone (for smaller and medium sized procurements), or in coordination with the Secretary General (for larger procurements), may issue a derogation as following a rigid interpretation of procurement guidelines often leads to increased costs.
                            The Country Director and the Deputy Director can approve a derogation from the standard procurement process for the different thresholds (for smaller and medium sized procurements), while for divisions on procurements of USD 50,001 and above the Secretary General must be consulted.

                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/FA.jpg" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <p className='text-200' style={{fontVariant:'small-caps'}}>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <span className='text-6xl text-danger'>"</span>
                        <p>In some contexts, it may be difficult to follow certain good procurement practices. It may, for example, be difficult to obtain three tenders if the number of suppliers is limited. Even if three tenders are obtained, they may be forged or may all be written by the same person.</p>
                        <span className='text-6xl text-danger'>"</span>
                    </div>
                    </p>
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

export default ProcurePolicy