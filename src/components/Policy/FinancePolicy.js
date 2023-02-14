import React from 'react'
import Navbar from '../Home/Navbar'
import { Button } from 'primereact/button';

const FinancePolicy = () => {
    return (
        <div>
            <Navbar />
            <div className="text-700 text-center pr-6 pl-6 pb-6 pt-2">
                <img src="assets/logo2.png" className="img-fluid" alt='logo' width="400" />
                <div className="font-bold text-4xl mb-3" style={{ color: 'var(--primaryColor)' }}>WHPLO Financial Policies</div>
                <div className="text-700 text-justify container">
                    <div className="text-200">WHPLO strives to have the best possible internal controls and financial systems. These financial policies are created by the staff and approved by the Board of Directors to guide the work of staff and outsourced financial management.</div>
                    <Button icon="pi pi-download" label='Download Finance Policy' aria-label="Download" className='mt-2' />
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Finance Committee</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            The Board of Directors of WHPLO will annually appoint a Finance Committee who works under the Board Treasurer to ensure the appropriate preparation of an annual budget, appropriate handling and distribution of funds, and the appropriate preparation and presentation of regular financial statements. The Finance Committee directs, reviews, and presents the annual audit to the Board of Directors.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Approval of plans and commitments before they are implemented</div>
                            The Board of Directors will set the annual budget, based on WHPLO fiscal year (January through December), to direct how funds are spent. Board approval is necessary in order to spend significant funds or make significant financial commitments to projects that have not already been incorporated into the approved budget.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Accurate, timely financial reports and information returns </div>
                            The Finance Committee oversees that WHPLO provides accurate, timely financial reports and information returns. The Finance Committee will regularly review financial statements, including a balance sheet and a comparison of actual financial activity to the approved budget. The Finance Office staff will maintain a calendar of report deadlines and will advise the Board of Directors to ensure that all financial reports and information returns have been filed as required.
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/FC.png" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Banking institutions and accounts </div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/FI.jpg" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            In order to minimize risk and maximize benefit, WHPLO utilizes only federally insured local banking and savings institutions. The amount on deposit with any one institution may not in the usual course of business exceed the WHPLO limit of $50,000. The Finance Committee will review the banking relationship annually.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Deposits</div>
                            All income intended for WHPLO will be properly received, deposited, recorded, reconciled, and kept under adequate security. Any cash received must be promptly and fully deposited.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Grants, gifts, and pledges</div>
                            All grants and gifts will be properly received and recorded. Compliance with terms of any related restrictions will be monitored by staff and reported to the Finance Committee. Pledges are recorded at the time they are made. Thank you letters to donors are in compliance with WHPLO regulations.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Donated goods and services </div>
                            Donated goods and services are recorded in the accounting records when they would have been purchased if they were not donated. Gifts are recorded at fair market value.
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Fixed Assets</div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            Expenditures for land, building and equipment are recorded at cost. Donated assets and capitalized donated leases are recorded at their estimated fair market values at the date of donation. Depreciation expenses are calculated using the straight‐line method and the following estimated useful lives:
                            <ul className='m-2'>
                                <li>Buildings and improvements 	10‐35 years </li>
                                <li>Furniture and equipment 	3‐10 years </li>
                                <li>Vehicles 	 	 	3‐5 years </li>
                            </ul>
                            Maintenance and repairs, which materially add to the value of the property or appreciably prolong its life, are recorded as an increase to the appropriate asset account. WHPLO capitalizes all fixed assets with a cost greater than or equal to $100 and a useful life of at least three years, unless otherwise stipulated by a grant. When an asset is purchased through a grant, the grant’s capitalization rules apply. WHPLO will conduct a regular inventory of fixed assets and maintain a central list of fixed assets which includes date of purchase, registration numbers, warranty information, original cost, and estimated life.
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/FA.jpg" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Line of credit  </div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/CC.webp" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            WHPLO shall maintain an appropriate line of credit to ensure regular cash flow, the use of which may be approved by the Executive Director and shall be reported to the Finance Committee.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Petty cash </div>
                            A petty cash fund may be maintained by staff to facilitate efficient operations. Such petty cash funds will be disbursed only for proper purposes, will be properly recorded, and will be adequately safeguarded at all times.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Credit card </div>
                            WHPLO may maintain credit card accounts to facilitate efficient operations. Credit cards will only be issued in the name of specific employees with specific credit limits as appropriate and will be adequately safeguarded at all times. All credit card transactions will be only for proper purposes and will be properly recorded.
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Procurement and purchasing </div>
                    <div className='grid'>
                        <div className='col-12 md:col-8 text-200'>
                            WHPLO will always seek to maximize value and cost‐effectiveness in all procurement and purchasing. Purchases exceeding $500 shall require at least three competitive bids.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Disbursements </div>
                            Funds will be disbursed only upon proper authorization of management and only for valid business purposes. All disbursements will be initiated only from properly authorized documentation and will be properly recorded. No check may be made out to Cash. The Board shall designate the Board Chair, the Board Treasurer, the Executive Director, and any other Board member or staff member deemed appropriate as authorized signers of checks on behalf of WHPLO. Any check for an amount over $2,500 must carry two signatures unless otherwise specifically authorized in advance by the Board of Directors (such as for payroll or office rent). No check signer may sign a blank check.
                        </div>
                        <div className='col-12 md:col-4'>
                            <img src="assets/policy/PC.jpg" className="img-fluid" alt='FC' />
                        </div>
                    </div>
                    <div className="font-bold text-4xl" style={{ color: 'var(--primaryColor)' }}>Payroll</div>
                    <div className='grid'>
                        <div className='col-12 md:col-6'>
                            <img src="assets/policy/PR.jpg" className="img-fluid" alt='FC' />
                        </div>
                        <div className='col-12 md:col-6 text-200'>
                            Payroll disbursements will be made upon proper authorization.
                            Changes to each payroll will be properly documented. WHPLO will ensure that payroll disbursements are properly recorded and that related disbursements (such as payroll tax deposits and retirement funds) are made timely. Payroll checks will not be released prior to payday, and employee advances are not permitted.
                            <div className="font-bold text-xl" style={{ color: 'var(--primaryColor)' }}>Reconciliation of banking/security statements </div>
                            All banking/security statements will be delivered unopened to a designated individual who is not otherwise involved in the preparation of checks, the depositing of funds, or is an authorized signer of checks. This designated individual shall review and initial each statement on a timely basis. An appropriately qualified finance staff person will reconcile each bank account monthly prior to the issuance of financial statements.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FinancePolicy