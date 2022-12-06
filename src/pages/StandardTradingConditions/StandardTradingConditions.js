import { graphql, useStaticQuery } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import React from 'react'
import List from './List'


const Content = [
    { title: 'Applicability', points: ['These rules apply when they are incorporated, however this is made, in writing, orally or otherwise, into a contract by referring to the FIATA (International Freight Forwarder’s Association) model rules for freight forwarding services.', 'Whenever such reference is made, the parties agree that these rules shall supersede any additional terms of the contract which are in conflict with these rules, except insofar as they increase the responsibility or obligations of the freight forwarder.'] },
    {
        title: 'Definitions', points: ['Freight forwarding services means services of any kind relating to the carriage, consolidation,',
            `storage, handling, packing or distribution of the goods as well as ancillary and advisory services in
        connection therewith, including but not limited to customs and fiscal matters, declaring the goods
        for official purposes, procuring insurance of the goods and collecting or procuring payment or
        documents relating to the goods.`,
            `Freight forwarder means the “company” concluding a contract of Freight forwarding services
        with the customer.`,
            `Carrier means any person actually performing the carriage of the goods with his own means of
        transport (performing carrier) and any person subject to carrier liability as a result of an express or
        implied undertaking to assume such liability (contracting carrier).`,
            `SDR means a Special Drawing Right as defined by the International Monetary Fund.`,
            `Valuables means bullion, coins, money, negotiable instruments, precious stones, jewellery,
        antiques, pictures, works of art and similar properties`,]
    },
    {
        title: 'ROLE OF FORWARDER', points: ['The company offers its services on the basis of these conditions that apply to all activities of the Company in arranging transportation or providing related services, such as, but not limited to, warehousing and any other kind of logistics services. The Company may provide its services as either principal or agent. The Company acts as agent of the Customer, except:',], otherContents: [`a) where it issues a transport document evidencing its obligation for the delivery of goods, or`,
            `b) to the extent it physically handles goods by its own employees and equipment in the course of performing any service in which cases it acts as principal, but whether acting as principal or as agent these conditions govern the rights and liabilities of the Customer and the Company. Advice and information that is not related to instructions accepted by the Company is provided gratuitously and without liability. Advice is for the Customer only and is not to be furnished to any other party without prior written consent.`,]
    },
    {
        title: 'Hindrances', points: [], otherContents: ['If at any time the company’s performance is or is like to be affected by any hindrance or risk of any kind (including the conditions of the goods) not arising from any fault or neglect of the company and which cannot be avoided by the exercise of reasonable endeavor, the company may abandon the carriage of the goods under the respective contract and, where reasonably possible, make the goods or any part of them available to the customer at a place which the company may deem safe and convenient, whereupon delivery shall be deemed to have been made, and the responsibility of the company in respect of such goods shall cease. In any event, the company shall be entitled to the agreed remuneration under the contract and the customer shall pay any additional costs resulting from the above mentioned circumstances.']
    },
    { title: 'Method and route of transportation.', points: [], otherContents: ['The company shall carry out his services according to the customer’s instructions as agreed. However if the instructions are inaccurate or incomplete or not suitable for the special circumstances arise or not according to the contract, the company may at the risk and expense of the customer act as he deems fit with or without prior notice to the customer. Unless otherwise agreed, the company may without notice to the customer arrange to carry the goods on or under deck and choose or substitute the means, route and procedure to be followed in the handling, stowage, storage and transportation of the goods.'] },
    { title: 'CLAIMS AGAINST OTHERS', points: [], otherContents: [`These Conditions also apply whenever any claim is made against any employee, agent or independent contractor engaged by the Company to perform any transport or related service for the Customer's goods, whether such claims are founded in contract or in tort, and the aggregate liability of the Company and all such persons shall not exceed the limitations of liability in these conditions. For purposes of this Clause the Company acts as agent for all such persons who may ratify such agency at any subsequent time.`] },
    { title: 'ROLE AS AGENT', points: [], otherContents: [`When acting as an agent, the Company acts solely on behalf of the Customer in engaging the services of third parties on the usual terms and conditions on which the third parties offer such services for the carriage, storage, packing or handling of any goods, or for any other service in relation to them, thereby establishing a direct contract between the Customer and the provider of such services capable of being enforced by the Customer as principal, whether or not the Customer is identified in the contract. The Company shall on demand by the Customer provide evidence of any contracts made on its behalf.`] },
    { title: 'OTHER SERVICES', points: [], otherContents: [`Where requested by the Customer the Company may `, `a) issue a transport document or electronic record by which it as principal undertakes carriage of particular goods; or `, `b) guarantee in writing proper performance of the terms of any contract between the Customer and a third party whose services the Company has engaged on behalf of the Customer. As guarantor the Company is liable only to the same extent as the third party whose actions have been guaranteed, as may be limited by the conditions on which that party customarily offers its services. Where it issues a transport document or electronic record, or provides a guarantee, the rights and obligations of the Company will be governed by the special conditions therein in addition to these Conditions. In the event of any inconsistency the special conditions prevail.`] },
    { title: 'SERVICES REQUIRING SPECIAL ARRANGEMENTS', points: [], otherContents: [`The Customer must give instructions in writing to the Company a reasonable time before the tender of goods for storage or transport where it requests the Company to: a) arrange for the departure or arrival of goods before specific dates; b) arrange for goods to be carried, stored or handled separately from other goods; c) arrange for the transport of goods that may taint or affect other goods, or may harbour or encourage vermin or pests;. d) make a declaration of value or special interest in delivery to any carrier or terminal; e) direct carriers or delivery agents to hold goods until payment of any amount or until surrender of a document; f) arrange for the transport of goods of unusual high value, luxury goods, currency, negotiable Instruments or securities of any kind, precious metals or stones; antiques or art; human remains, livestock or plants, or any other comparable cargos. Where for any reason it does not accept such instructions, the Company must promptly so advise the Customer by any means of communication used in the ordinary course of business. If it continues to use the Company's services for the contemplated transport, the Customer assumes all risks connected with the nonperformance of such instructions, whether caused or contributed to by the Company's negligence or not.`] },
    {
        title: `THE COMPANY'S GENERAL RESPONSIBILITIES`, points: [], otherContents: [`
    The Customer must give instructions in writing to the Company a reasonable time before the tender of goods for storage or transport where it requests the Company to: a) arrange for the departure or arrival of goods before specific dates; b) arrange for goods to be carried, stored or handled separately from other goods; c) arrange for the transport of goods that may taint or affect other goods, or may harbour or encourage vermin or pests;. d) make a declaration of value or special interest in delivery to any carrier or terminal; e) direct carriers or delivery agents to hold goods until payment of any amount or until surrender of a document; f) arrange for the transport of goods of unusual high value, luxury goods, currency, negotiable Instruments or securities of any kind, precious metals or stones; antiques or art; human remains, livestock or plants, or any other comparable cargos. Where for any reason it does not accept such instructions, the Company must promptly so advise the Customer by any means of communication used in the ordinary course of business. If it continues to use the Company's services for the contemplated transport, the Customer assumes all risks connected with the nonperformance of such instructions, whether caused or contributed to by the Company's negligence or not.`]
    },
    {
        title: `CUSTOMER'S GENERAL RESPONSIBILITIES`, points: [], otherContents: [`
        A. The Customer shall be deemed to be competent and to have reasonable knowledge of matters affecting the conduct of its business, including terms of purchase and sale, the need for insurance and the extent of coverage available for the type of goods being tendered for shipment, the need for care to avoid transmitting viruses by electronic communications, the need for confidential handling of information relating to high value goods, and all other matters relating thereto.
        B. The Customer warrants that all information in whatever form relating to the general and dangerous character of the Goods, their description, Bar-Coding, marks, number, weight, volume and quantity of the Goods, as furnished by the Customer or on its behalf, was accurate and complete at the time the Goods were taken in charge by the Company or any third party whose services it has engaged. The Customer further undertakes to provide independent confirmation of such particulars on the request of the Company.
        `]
    },

    {
        title: `CUSTOMER'S RESPONSIBILITY FOR PACKAGED AND CONTAINERIZED GOODS`, points: [],
        otherContents: [
            `A. Except where the Company has accepted instructions in respect of the preparation, packing, stowage, labeling or marking of the goods the Customer warrants that all goods have been properly and sufficiently prepared, packed, stowed, labeled and/or marked, and that the preparation, packing, stowage, labeling and marking are appropriate to any operations or transactions affecting the goods and the characteristics of the goods.`,
            `B. Unless the Company has accepted instructions to arrange for or to perform the loading of a transport unit by its employees, the Customer warrants that:`,
            `a). the transport unit has been properly and competently loaded;`,
            `b) the goods are suitable for carriage in or on the transport unit; and`,
            `c. the transport unit is in a suitable condition to carry the goods loaded therein (save to such extent   
            as the Company has approved the suitability of the transport unit).`,
        ]
    },
]
const StandardTradingConditions = () => {
    const data = useStaticQuery(graphql`
    query{
        allContentfulStandardTradingConditions {
            edges {
              node {
                content {
                  raw
                }
              }
            }
          }
}`)

    return (
        <div className='container'>
            <div className=" doc-content w-full">
                <h1 className="c9" id="h.urb85c14pxpx"><span className="c6 lg:text-6xl md:text-md-4xl text-2xl">Standard Trading Conditions</span></h1>
                <p className="c2"><span className="c5">EFS COMPANY LTD formerly known as &ldquo;Express Forwarding Services (A division of
                    Um Fawaz Trading Est)&rdquo; is a registered company in Saudi Arabia offering freight forwarding activities
                    to general public. Our business activities are according to the below mentioned Standard Trading
                    Conditions.</span></p>
                <p className="c1"><span className="c5"></span></p>
                <p className="c2"><span className="c5">The customer&rsquo;s attention is drawn to the clauses hereof which exclude or limit
                    the company&rsquo;s liability and these which require the customer to indemnify the company in certain
                    circumstances.</span></p>
                <p className="c1"><span className="c5"></span></p>
                <p className="c2"><span className="c3">1. Applicability</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; 1.1 &nbsp; These rules apply when they are incorporated, however this
                    is made, in writing, orally or otherwise, into a contract by referring to the FIATA (International Freight
                    Forwarder&rsquo;s Association) model rules for freight forwarding services.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; 1.2 &nbsp; Whenever such reference is made, the parties agree that
                    these rules shall supersede any additional terms of the contract which are in conflict with these rules,
                    except insofar as they increase the responsibility or obligations of the freight forwarder.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">2. Definitions</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; 2.1 &nbsp; Freight forwarding services means services of any kind
                    relating to the carriage, consolidation, &nbsp;</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; storage, handling, packing or distribution of the goods as well as
                    ancillary and advisory services in</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; connection therewith, including but not limited to customs and fiscal
                    matters, declaring the goods</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; for official purposes, procuring insurance of the goods and collecting
                    or procuring payment or</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; documents relating to the goods.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; 2.2 &nbsp; Freight forwarder means the &ldquo;company&rdquo; concluding
                    a contract of Freight forwarding services</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; with the customer.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; 2.3 &nbsp; Carrier means any person actually performing the carriage of
                    the goods with his own means of</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; transport (performing carrier) and any person subject to carrier
                    liability as a result of an express or</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; implied undertaking to assume such liability (contracting
                    carrier).</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; 2.4 &nbsp; SDR means a Special Drawing Right as defined by the
                    International Monetary Fund.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; 2.5 &nbsp; Valuables means bullion, coins, money, negotiable
                    instruments, precious stones, jewellery,</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; antiques, pictures, works of art and similar properties</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">3. ROLE OF FORWARDER</span></p>
                <p className="c2"><span className="c0">The company offers its services on the basis of these conditions that apply to all
                    activities of the Company in arranging transportation or providing related services, such as, but not
                    limited to, warehousing and any other kind of logistics services. The Company may provide its services as
                    either principal or agent. The Company acts as agent of the Customer, except:</span></p>
                <p className="c2"><span className="c0">a) where it issues a transport document evidencing its obligation for the delivery of
                    goods, or</span></p>
                <p className="c2"><span className="c0">b) to the extent it physically handles goods by its own employees and equipment in
                    the course of performing any service in which cases it acts as principal, but whether acting as principal or
                    as agent these conditions govern the rights and liabilities of the Customer and the Company. Advice and
                    information that is not related to instructions accepted by the Company is provided gratuitously and without
                    liability. Advice is for the Customer only and is not to be furnished to any other party without prior
                    written consent.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">2. Hindrances</span></p>
                <p className="c2"><span className="c0">If at any time the company&rsquo;s performance is or is like to be affected by any
                    hindrance or risk of any kind (including the conditions of the goods) not arising from any fault or neglect
                    of the company and which cannot be avoided by the exercise of reasonable endeavor, the company may abandon
                    the carriage of the goods under the respective contract and, where reasonably possible, make the goods or
                    any part of them available to the customer at a place which the company may deem safe and convenient,
                    whereupon delivery shall be deemed to have been made, and the responsibility of the company in respect of
                    such goods shall cease. In any event, the company shall be entitled to the agreed remuneration under the
                    contract and the customer shall pay any additional costs resulting from the above mentioned
                    circumstances.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">5. Method and route of transportation.</span></p>
                <p className="c2"><span className="c0">The company shall carry out his services according to the customer&rsquo;s
                    instructions as agreed. However if the instructions are inaccurate or incomplete or not suitable for the
                    special circumstances arise or not according to the contract, the company may at the risk and expense of the
                    customer act as he deems fit with or without prior notice to the customer. Unless otherwise agreed, the
                    company may without notice to the customer arrange to carry the goods on or under deck and choose or
                    substitute the means, route and procedure to be followed in the handling, stowage, storage and
                    transportation of the goods.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">6. CLAIMS AGAINST OTHERS</span></p>
                <p className="c2"><span className="c0">These Conditions also apply whenever any claim is made against any employee, agent or
                    independent contractor engaged by the Company to perform any transport or related service for the
                    Customer&#39;s goods, whether such claims are founded in contract or in tort, and the aggregate liability of
                    the Company and all such persons shall not exceed the limitations of liability in these conditions. For
                    purposes of this Clause the Company acts as agent for all such persons who may ratify such agency at any
                    subsequent time.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">7. ROLE AS AGENT</span></p>
                <p className="c2"><span className="c0">When acting as an agent, the Company acts solely on behalf of the Customer in
                    engaging the services of third parties on the usual terms and conditions on which the third parties offer
                    such services for the carriage, storage, packing or handling of any goods, or for any other service in
                    relation to them, thereby establishing a direct contract between the Customer and the provider of such
                    services capable of being enforced by the Customer as principal, whether or not the Customer is identified
                    in the contract. The Company shall on demand by the Customer provide evidence of any contracts made on its
                    behalf.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">8. OTHER SERVICES</span></p>
                <p className="c2"><span className="c0">Where requested by the Customer the Company may</span></p>
                <p className="c2"><span className="c0">a) issue a transport document or electronic record by which it as principal
                    undertakes carriage of particular goods; or</span></p>
                <p className="c2"><span className="c0">b) guarantee in writing proper performance of the terms of any contract between the
                    Customer and a third party whose services the Company has engaged on behalf of the Customer. As guarantor
                    the Company is liable only to the same extent as the third party whose actions have been guaranteed, as may
                    be limited by the conditions on which that party customarily offers its services. Where it issues a
                    transport document or electronic record, or provides a guarantee, the rights and obligations of the Company
                    will be governed by the special conditions therein in addition to these Conditions. In the event of any
                    inconsistency the special conditions prevail.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">9. SERVICES REQUIRING SPECIAL ARRANGEMENTS</span></p>
                <p className="c2"><span className="c0">The Customer must give instructions in writing to the Company a reasonable time
                    before the tender of goods for storage or transport where it requests the Company to: a) arrange for the
                    departure or arrival of goods before specific dates; b) arrange for goods to be carried, stored or handled
                    separately from other goods; c) arrange for the transport of goods that may taint or affect other goods, or
                    may harbour or encourage vermin or pests;. d) make a declaration of value or special interest in delivery to
                    any carrier or terminal; e) direct carriers or delivery agents to hold goods until payment of any amount or
                    until surrender of a document; f) arrange for the transport of goods of unusual high value, luxury goods,
                    currency, negotiable Instruments or securities of any kind, precious metals or stones; antiques or art;
                    human remains, livestock or plants, or any other comparable cargos. Where for any reason it does not accept
                    such instructions, the Company must promptly so advise the Customer by any means of communication used in
                    the ordinary course of business. If it continues to use the Company&#39;s services for the contemplated
                    transport, the Customer assumes all risks connected with the nonperformance of such instructions, whether
                    caused or contributed to by the Company&#39;s negligence or not.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">10. THE COMPANY&#39;S GENERAL RESPONSIBILITIES</span></p>
                <p className="c2"><span className="c0">The Customer must give instructions in writing to the Company a reasonable time
                    before the tender of goods for storage or transport where it requests the Company to: a) arrange for the
                    departure or arrival of goods before specific dates; b) arrange for goods to be carried, stored or handled
                    separately from other goods; c) arrange for the transport of goods that may taint or affect other goods, or
                    may harbour or encourage vermin or pests;. d) make a declaration of value or special interest in delivery to
                    any carrier or terminal; e) direct carriers or delivery agents to hold goods until payment of any amount or
                    until surrender of a document; f) arrange for the transport of goods of unusual high value, luxury goods,
                    currency, negotiable Instruments or securities of any kind, precious metals or stones; antiques or art;
                    human remains, livestock or plants, or any other comparable cargos. Where for any reason it does not accept
                    such instructions, the Company must promptly so advise the Customer by any means of communication used in
                    the ordinary course of business. If it continues to use the Company&#39;s services for the contemplated
                    transport, the Customer assumes all risks connected with the nonperformance of such instructions, whether
                    caused or contributed to by the Company&#39;s negligence or not.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">11. CUSTOMER&#39;S GENERAL RESPONSIBILITIES</span></p>
                <p className="c2"><span className="c0">A. The Customer shall be deemed to be competent and to have reasonable knowledge of
                    matters affecting the conduct of its business, including terms of purchase and sale, the need for insurance
                    and the extent of coverage available for the type of goods being tendered for shipment, the need for care to
                    avoid transmitting viruses by electronic communications, the need for confidential handling of information
                    relating to high value goods, and all other matters relating thereto.</span></p>
                <p className="c2"><span className="c0">B. The Customer warrants that all information in whatever form relating to the
                    general and dangerous character of the Goods, their description, Bar-Coding, marks, number, weight, volume
                    and quantity of the Goods, as furnished by the Customer or on its behalf, was accurate and complete at the
                    time the Goods were taken in charge by the Company or any third party whose services it has engaged. The
                    Customer further undertakes to provide independent confirmation of such particulars on the request of the
                    Company.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">12. CUSTOMER&#39;S RESPONSIBILITY FOR PACKAGED AND CONTAINERIZED GOODS</span></p>
                <p className="c2"><span className="c0">A. Except where the Company has accepted instructions in respect of the preparation,
                    packing, stowage, labeling or marking of the goods the Customer warrants that all goods have been properly
                    and sufficiently prepared, packed, stowed, labeled and/or marked, and that the preparation, packing,
                    stowage, labeling and marking are appropriate to any operations or transactions affecting the goods and the
                    characteristics of the goods.</span></p>
                <p className="c2"><span className="c0">B. Unless the Company has accepted instructions to arrange for or to perform the
                    loading of a transport unit by its employees, the Customer warrants that:</span></p>
                <p className="c2"><span className="c0">&nbsp; a) the transport unit has been properly and competently loaded;</span></p>
                <p className="c2"><span className="c0">&nbsp; b) the goods are suitable for carriage in or on the transport unit; and</span>
                </p>
                <p className="c2"><span className="c0">&nbsp; c) the transport unit is in a suitable condition to carry the goods loaded
                    therein (save to such extent &nbsp;</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp;as the Company has approved the suitability of the
                    transport unit).</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">13.QUOTATIONS AND INVOICING</span></p>
                <p className="c2"><span className="c0">A. The Company does not assume a role as principal by delivering a fixed price
                    quotation or invoice. The Customer acknowledges that the difference between the amounts payable to third
                    parties retained to carry out the Customer&#39;s instructions and the fixed price represents the
                    Company&#39;s gross profit for its services. A Customer agrees that the Company is an agent as provided in
                    Section 1 where the Customer</span></p>
                <p className="c2"><span className="c0">&nbsp; a) accepts a fixed price quotation,</span></p>
                <p className="c2"><span className="c0">&nbsp; b) does not within fifteen days after receipt of the invoice object to the
                    Company charging a fixed price for its services.</span></p>
                <p className="c2"><span className="c0">B. Quotations are given on the basis of immediate acceptance and are subject to
                    withdrawal or revision. Unless otherwise provided in the quotation the Company may, after acceptance, revise
                    quotations or charges upon notice in the event of changes beyond the Company&#39;s control, including
                    changes in exchange rates, rates of freight, carrier surcharges, or any charges applicable to the
                    goods.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">14.C.O.D. SHIPMENT</span></p>
                <p className="c2"><span className="c0">When goods are accepted or dealt with upon instructions to collect freight, duties,
                    charges or other expenses from the Consignee or any other person the Customer shall remain responsible for
                    the same if they are not paid by such Consignee or other person immediately when due.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">15.CHANGED CIRCUMSTANCES/FAILURE TO TAKE DELIVERY</span></p>
                <p className="c2"><span className="c0">If events or circumstances, including a Customer&#39;s failure to take delivery,
                    occur that affect performance of the Customer&#39;s mandate, the Company shall take reasonable steps to
                    obtain the Customer&#39;s further instructions. If for whatever reason it does not receive timely
                    instructions, the Company may</span></p>
                <p className="c2"><span className="c0">&nbsp;a) store the goods at the sole risk and expense of the Customer, or</span></p>
                <p className="c2"><span className="c0">&nbsp;b) sell the goods immediately and without further notice, and hold any net
                    proceeds for the account of the Customer or</span></p>
                <p className="c2"><span className="c0">&nbsp;c) authorize any third party to abandon carriage and make the Goods or any part
                    of them available to the Customer at a place that is reasonable in the circumstances.</span></p>
                <p className="c1"><span className="c3"></span></p>
                <p className="c2"><span className="c3">16. DANGEROUS GOODS</span></p>
                <p className="c2"><span className="c0">A. The Customer undertakes not to tender for transportation any goods that are of a
                    dangerous, inflammable, radioactive, hazardous or damaging nature without giving full particulars of the
                    goods to the Company. The Customer undertakes to mark the goods and the outside of any packages or container
                    in which they may be placed to comply with any laws or regulations that may be applicable during the
                    carriage. In the case of goods where the place of receipt is a point within Canada, the Customer further
                    warrants that the goods, the packaging and marking thereof comply in all respects with the provisions of any
                    legislation or regulations governing the transportation of dangerous goods. B. If it fails to comply with
                    the requirements of Sub-clause (A), the Customer shall indemnify the Company against all loss, damage or
                    expense arising out of the goods being tendered for transportation or handled or carried by or on behalf of
                    third parties retained by the Company.</span></p>
                <p className="c2"><span className="c0">C. Goods which in the opinion of the Company or the person who has custody or
                    possession thereof are or may become dangerous and present a hazard may at any time or place be unloaded,
                    destroyed or rendered harmless without liability on the part of the Company.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">17. INSURANCE</span></p>
                <p className="c2"><span className="c0">No insurance will be effected by the company, except upon express instructions given
                    in writing by the customer on it&rsquo;s goods prior to a reasonable time before they tender the goods for
                    storage or transport. All insurance effected are subject to the usual exceptions and conditions of the
                    policies of the insurance company or underwriters taking the risk. Unless otherwise agreed in writing the
                    company shall not be under any obligation to effect a separate insurance on each consignment, but may
                    declare it on any open or general policy that held by the company. The Company is not liable if the Customer
                    for any reason whatsoever fails to recover a loss in whole or in part from the insurer under the policy,
                    even though the premium charged by the insurer is different from the Company&#39;s charges to the Customer.
                    If coverage under its open marine cargo policy is not satisfactory, the Company will recommend an insurance
                    broker to arrange insurance appropriate to the customer&#39;s needs. After making this recommendation, the
                    Company has no further duty regarding insurance, and no liability for loss of or damage to the goods during
                    transport or storage that could have been covered by insurance on the goods, whether such loss or damage has
                    been caused or contributed to by its negligence or breach of these conditions, or otherwise.</span></p>
                <p className="c1"><span className="c3"></span></p>
                <p className="c2"><span className="c3">18. &nbsp;NOTIFICATION OF CLAIMS</span></p>
                <p className="c2"><span className="c0">The Customer on its own behalf and on behalf of the Owner of the goods shall notify
                    the Company in writing of any claim a) in case of loss and/or damage to goods within 7 days of the
                    completion of transit. b) in case of delay in delivery or non-delivery within 14 days of the date when the
                    goods should have been delivered, c) in any other case within 30 days of the event giving rise to the claim.
                    If a claim was not discoverable by the exercise of reasonable care within the applicable time period, the
                    Customer must give notice forthwith after receiving information as to events that may give rise to a claim.
                    Failing notice as required by this clause, the claim is barred and no action can be brought against the
                    Company to enforce the claim.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">19. LIABILITY &amp; LIMITATION</span></p>
                <p className="c2"><span className="c0">The Company&rsquo;s liability (except as principal)</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;19.1 Basis of liability.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; 19.1.1. The company&rsquo;s duty of care. The company is liable
                    if he fails to exercise due diligence and</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; take Reasonable measures in the performance of the freight
                    forwarding services, in which case he,</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; subject to article # 20, shall compensate the customer for loss
                    or Damage as well as for direct</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; financial loss resulting from breach of his due of care.</span>
                </p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp;19.1.2. &nbsp;No liability for third parties. The company is not
                    liable for acts and omissions by third</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp;parties, such as, but not limited to, carriers, warehousemen,
                    stevedores, port authorities and other</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp;freight forwarders, unless he has failed to exercise due
                    diligence in selecting, instructing or</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp;supervising such third parties.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">20. The Company&rsquo;s liability as principal</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;20.1 The company&rsquo;s liability as carrier The freight forwarder is
                    subject to liable as principal not only when he actually performs the carriage himself by his own means of
                    transport (Performing Carrier), but also if, by issuing his own transport document or otherwise, he has made
                    an express or implied undertaking to assume carrier liability (contracting carrier). However, the Freight
                    Forwarder shall not be deemed liable as Carrier if the Customer has received a transport document issued by
                    a person other than The Freight Forwarder and does not within a reasonable time maintain that The Freight
                    Forwarder is nevertheless liable as Carrier.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;20.2 The Freight Forwarder&#39;s liability as principal for other
                    services. With respect to services other</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;than carriage of Goods such as, but not limited to, storage, handling,
                    packing or distribution of the</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;Goods, as well as ancillary services in connection therewith, the
                    Freight Forwarder shall be liable as</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;principal:</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1. When such services have been performed by
                    himself using his own facilities or employees or</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. If he has made an express or implied
                    undertaking to assume liability as principal.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;20.3 Exclusions The company shall in no even be liable for:</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1. Valuables or Dangerous goods unless declared as
                    such to the company at the time of the</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;conclusion of the
                    contract.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 2. Loss following from delay unless expressly
                    agreed in writing.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3. Indirect or consequential loss such as, but not
                    limited to, loss of profit and loss of market.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4. The cargo which is not collected or rejected by
                    the consignee. All the destination charges will &nbsp;</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;be debited to shipper
                    or the agent who is the booking party.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 5. Any customs inspection at the transshipment
                    port will be debited on the shipper, agent or</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;consignee account.</span></p>
                <p className="c2"><span className="c0">&nbsp; 20.4 Assessment of compensation.</span></p>
                <p className="c2 c7"><span className="c0">&nbsp;The value of the Goods shall be determined according to the current
                    commodity exchange price </span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;or, if there is not such price,
                    according to the current market price or, if there is no commodity</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;exchange price or current market
                    price, by reference to the normal value</span></p>
                <p className="c2"><span className="c0">&nbsp; of the Goods of the same kind and quality.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">21. Limitation of the liability.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;21.1 In case of claims for loss or damage to goods.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The company shall not be or become
                    liable for any loss of or damage to the goods in an amount</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; exceeding the equivalent to SR.12.00
                    per kilogram of gross weight of the goods lost or damaged</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; with a maximum limitation of
                    SR.50,000.00 per shipment when company act as agent only &amp;</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; SR.100,000.00 per shipment when
                    company acting as agent &amp; principal unless a larger amount</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; is recovered from a person for whom
                    the company is responsible.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;21.2 In case of claim against delay.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; If the Company is liable in respect
                    of loss following from delay, such liability shall be limited to &nbsp;</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; an amount not exceeding the
                    remuneration relating to the service giving rise to the delay.</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp;21.3 Compensation for any claim for which the Company is liable shall
                    not in any event exceed 2 SDR</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;(SDR = Special Drawing Rights)
                    per kilo (Equivalent to approximate - SR.11.86 - may fluctuate</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;depends on the exchange rate)
                    of the gross weight of the goods that are the subject of the</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;claim. Without prejudice to
                    any other conditions herein or other defences available to the</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Company, in no circumstances
                    whatsoever shall the Company be liable to the Customer or</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;owner for</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;a)
                    consequential or indirect loss, including loss of market, except as provided for in</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp;paragraph</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; b) loss
                    of, damage to or consequential or indirect loss caused by delay or deviation in</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;connection with the transport of goods in a sum in excess of twice the difference
                    between</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;the charges invoiced by the Company and amounts paid by the Company to third parties</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;for transport or other service related to those goods;</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; c)
                    amounts in excess of a maximum</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;recoverable of 50,000 SR per transaction. Upon the Customer&#39;s written request, the</span>
                </p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;Company may accept liability in excess of these limits provided the Customer pays the</span>
                </p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;Company&#39;s additional charges for such increased liability. The Customer can obtain</span>
                </p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp;details of these charges from the Company.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">22. &nbsp;INDEMNITY</span></p>
                <p className="c2"><span className="c0">The Customer shall indemnify the Company against all duties, taxes, payments, fines,
                    expenses, losses, claims and liabilities, including any liability to indemnify any other person against
                    claims made against such other person by the Customer or by the Owner</span></p>
                <p className="c2"><span className="c0">&nbsp;a) for which the Company may be held responsible unless caused or contributed
                    to by any negligence</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp;or breach of duty of the Company, or</span></p>
                <p className="c2"><span className="c0">&nbsp;b) in excess of the liability of the Company in accordance with these
                    Conditions, resulting from or</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp;connected with the actions of the Company related to any
                    service to which these Conditions apply.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">23. SET OFF AND COUNTERCLAIM</span></p>
                <p className="c2"><span className="c0">The Customer shall pay to the Company in cash, or as otherwise agreed, all sums
                    immediately when due without reduction or deferment on account of any claim, counterclaim or set off.</span>
                </p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">24. &nbsp;RIGHT OF DETENTION AND LIEN</span></p>
                <p className="c2"><span className="c0">All goods (and documents relating to goods) shall be subject to a particular and
                    general lien and right of detention for monies owing either in respect of such goods, or for any particular
                    or general balance or other monies owed, whether then due or not, by the Customer, sender, consignee or
                    owner of the goods to the Company. If these monies remain unpaid for 28 days after the Company sends notice
                    of the exercise of its rights to these persons by any means of communication reasonable in the
                    circumstances, the goods may be sold by private contract or otherwise at the sole discretion of the Company,
                    and the net proceeds applied on account of the monies owing. The Company will not be liable for any
                    deficiencies or reduction in value received on the sale of the goods nor, will the Customer be relieved from
                    the liability merely because the goods have been sold.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">25. &nbsp;TIME BAR</span></p>
                <p className="c2"><span className="c0">The Company shall, unless otherwise expressly agreed, be discharged of all liability
                    under these Conditions unless suit is brought within 9 months from</span></p>
                <p className="c2"><span className="c0">&nbsp; a) the date of delivery of the Goods for claims to damage to goods, or</span>
                </p>
                <p className="c2"><span className="c0">&nbsp; b) the date when the Goods should have been delivered for claims for delay in
                    delivery or loss of &nbsp;</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; goods. With respect to loss or damage other than loss of
                    or damage to the Goods, the 9 months</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; period shall be counted from the time when the act or
                    omission of the Company giving rise to the</span></p>
                <p className="c2"><span className="c0">&nbsp; &nbsp; &nbsp; &nbsp; claim occurred.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">26. CUSTOMARY REMUNERATION RECEIVED FROM THIRD PARTIES</span></p>
                <p className="c1"><span className="c3"></span></p>
                <p className="c2"><span className="c0">The Company shall be entitled to be paid and retain all brokerages paid by carriers,
                    commissions, documentation allowances, profits on foreign exchange and other remunerations paid by third
                    parties as is customary in the trade.</span></p>
                <p className="c1"><span className="c0"></span></p>
                <p className="c2"><span className="c3">27. &nbsp;APPLICABLE LAW AND JURISDICTION</span></p>
                <p className="c2"><span className="c0">The Parties agree that where they have used electronic communications to transact in
                    whole or in part any business, such communications will be given legal effect in accordance with the
                    provisions (so far as they may be applicable) of the UNCITRAL Model Law on Electronic Commerce as elaborated
                    in Articles 16 and 17 of said law.</span></p>
                <p className="c2"><span className="c0">Otherwise the law of the Country or Region within which the Company has its principal
                    place of business shall govern these Conditions. By accepting the services provided under these Conditions,
                    the Customer irrevocably attorns to the exclusive jurisdiction of said Country or Region.</span></p>
                <p className="c1"><span className="c4"></span></p>
            </div>
        </div>
    )
}

export default StandardTradingConditions