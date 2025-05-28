import React, { useState } from 'react';
import '../../pages/AnalysisReport/AnalysisReport.css'; // Import your CSS file for styling

const AnalysisReport = () => {
  // State for collapsible sections, all set to false to start closed
  const [openSections, setOpenSections] = useState({
    executiveSummary: false,
    background: false,
    evaluation: false,
    costComparison: false,
    recommendations: false,
    futureDevelopment: false,
    conclusion: false,
    technicalHowTo: false,
    nonTechnicalHowTo: false,
  });

  // Toggle section visibility
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="report-container">
      <header className="report-header">
        <h1 >USO Bi-Weekly Team Report Process:</h1>
          <p ><strong>Solution Options and Recommendations</strong></p>
      </header>

      {/* Executive Summary */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('executiveSummary')} className="section-title">
          Executive Summary {openSections.executiveSummary ? '▼' : '▶'}
        </h2>
        {openSections.executiveSummary && (
          <p>
To streamline USO’s bi-weekly reporting, I evaluated five solutions, recommending Google Forms for its low cost, quick setup, and strong automation. Alternatives include a custom app, third-party tools, Microsoft Forms, and a manual process. Assessed on cost, efficiency, scalability, and usability, Google Forms ensures immediate efficiency and future growth. This report details options, costs, implementation steps, and a plan for a scalable app-based system.
          </p>
        )}
      </section>

      {/* Background and Requirements */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('background')} className="section-title">
          Background and Requirements {openSections.background ? '▼' : '▶'}
        </h2>
        {openSections.background && (
          <div>
            <p>
              The USO team submits bi-weekly reports summarizing individual contributions across 10 key questions, covering new leads, client meetings, opportunities, roadblocks, and morale scores. These responses are compiled into a collective report, with repetitive answers (e.g., identical company names) eliminated for clarity.
            </p>
            <h3>Key Requirements:</h3>
            <ul>
              <li>Form-Based Input: Secure, user-friendly forms to collect responses.</li>
              <li>Authentication: Verify team member identities.</li>
              <li>Data Storage: Organize responses by user, question, and date.</li>
              <li>Deduplication: Remove repetitive answers while preserving unique details.</li>
              <li>Dashboard: Enable filtering by date, user, or question, with export capabilities.</li>
              <li>Automation: Streamline report generation to minimize manual effort.</li>
            </ul>
            <h3>10 Questions:</h3>
            <ul>
              {[
                'Today’s Date *',
                'Your Name *',
                'New Leads Generated (List company names) *',
                'Client Meetings (List company names) *',
                'New Opportunities (List company names and amounts) *',
                'Closed Opportunities (List company names and amounts) *',
                'New Activations Confirmed (List company names, dates, locations) *',
                'Upcoming Meetings - Next Week (List company names) *',
                'Current Roadblocks or Barriers *',
                'Morale Score *',
              ].map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Evaluation of Solution Options */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('evaluation')} className="section-title">
          Evaluation of Solution Options {openSections.evaluation ? '▼' : '▶'}
        </h2>
        {openSections.evaluation && (
          <div>
            <p>Five approaches were evaluated to meet these requirements. Below, each option is detailed with its description, cost analysis, timeframe for completion, pros, cons, efficiency, scalability, usability, and automation potential, culminating in a recommendation for suitability.</p>
            {[
              {
                title: 'Google Forms with Google Sheets and Data Studio (Recommended)',
                description: 'A no-code solution using Google Forms for data collection, Google Sheets for storage, and Google Data Studio for dashboards, with Google Apps Script for automation.',
                cost: {
                  initial: '$500–$1,000 (one-time, 20–40 hours at $25/hour for setup).',
                  ongoing: '$0–$50/month (2 hours/month for maintenance, optional).',
                  assumptions: 'Existing Google Workspace access; costs reflect labor only.',
                },
                timeframe: '5–7 days (1–2 days for form and sheet setup, 2–3 days for script development, 2 days for testing and training).',
                efficiency: 'High; automates data collection, deduplication, and report generation.',
                scalability: 'High; supports additional users and questions via scalable Google infrastructure.',
                usability: 'Intuitive forms and dashboards; minimal training (30-minute session).',
                automation: 'Robust; Apps Script handles deduplication, report formatting, and email delivery.',
                pros: [
                  'Low cost and rapid deployment.',
                  'High automation minimizes manual work.',
                  'Scalable and user-friendly for all team members.',
                  'Leverages existing Google Workspace tools.',
                ],
                cons: [
                  'Limited customization compared to a custom app.',
                  'Dependent on Google ecosystem, which may pose integration challenges.',
                ],
                recommendation: 'Optimal for immediate needs due to cost, speed, and efficiency. Ideal starting point with flexibility for future enhancements.',
              },
              {
                title: 'Custom Application (React + Firebase)',
                description: 'A tailored web application using React for the frontend and Firebase for the backend, offering a fully customized form, database, and dashboard with real-time features.',
                cost: {
                  initial: '$5,000–$10,000 (one-time, 80–160 hours at $60/hour for a developer).',
                  ongoing: '$100–$500/month (hosting, updates, and minor feature additions).',
                },
                timeframe: '10–14 days (5–7 days for development, 3–5 days for testing, 2 days for deployment and training).',
                efficiency: 'High post-deployment; real-time data syncing and automated workflows eliminate manual tasks.',
                scalability: 'Excellent; cloud-based Firebase supports unlimited users and advanced features.',
                usability: 'Highly intuitive, with a branded interface tailored to USO’s needs.',
                automation: 'Excellent; supports automated deduplication, reporting, and integrations.',
                pros: [
                  'Fully customizable to current and future needs.',
                  'Scalable for team growth and complex analytics.',
                  'Real-time updates enhance decision-making.',
                ],
                cons: [
                  'High initial cost and development time.',
                  'Requires ongoing technical maintenance.',
                  'Overkill for initial, simpler reporting needs.',
                ],
                recommendation: 'Strong for long-term scalability but cost-prohibitive for immediate deployment. Consider as a future upgrade.',
              },
              {
                title: 'Third-Party Survey Tools (e.g., Typeform, SurveyMonkey)',
                description: 'A commercial survey platform for form creation and response collection, with manual export for deduplication and external tools for dashboards.',
                cost: {
                  initial: '$0–$500 (setup labor, 10–20 hours at $25/hour).',
                  ongoing: '$25–$100/month (e.g., Typeform Professional: $50/month).',
                  additional: '$0–$10/month for tools like Excel or Zapier.',
                },
                timeframe: '2–4 days (1–2 days for form setup, 1–2 days for configuring reports and training).',
                efficiency: 'Moderate; quick form setup but manual export and deduplication add effort.',
                scalability: 'Moderate; supports more users but higher costs for premium tiers.',
                usability: 'Polished, user-friendly forms; report compilation may challenge non-technical users.',
                automation: 'Low; basic notifications included, but advanced automation requires costly integrations.',
                pros: [
                  'Rapid setup with no coding.',
                  'Professional, engaging forms.',
                  'Basic analytics included.',
                ],
                cons: [
                  'Recurring subscription costs.',
                  'Limited automation for deduplication and reporting.',
                  'Manual data processing reduces efficiency.',
                ],
                recommendation: 'Suitable for small teams with basic needs but inadequate for automation and scalability requirements.',
              },
              {
                title: 'Microsoft Forms with Power Automate',
                description: 'Microsoft Forms for data collection, Power Automate for workflow automation, and Power BI for dashboards, integrated within Microsoft 365.',
                cost: {
                  initial: '$500–$1,000 (one-time, 20–40 hours at $25/hour for setup).',
                  ongoing: '$6–$22/user/month for Microsoft 365 licenses; $10/user/month for Power BI Pro (optional).',
                  assumptions: 'Costs higher if Microsoft 365 is not currently used.',
                },
                timeframe: '5–7 days (2–3 days for form and automation setup, 2–3 days for Power BI dashboard, 1–2 days for testing/training).',
                efficiency: 'High; automated workflows and reporting minimize manual tasks.',
                scalability: 'High; Microsoft’s ecosystem supports large teams and complex analytics.',
                usability: 'Familiar for Microsoft 365 users; Power BI requires moderate training.',
                automation: 'High; Power Automate streamlines deduplication, reporting, and integrations.',
                pros: [
                  'Enterprise-grade security and compliance.',
                  'Seamless Microsoft 365 integration.',
                  'Advanced analytics via Power BI.',
                ],
                cons: [
                  'Higher costs if Microsoft 365 licenses are needed.',
                  'Steeper learning curve for automation and dashboards.',
                  'Longer setup than Google Forms.',
                ],
                recommendation: 'Viable if USO uses Microsoft 365; otherwise, costs and complexity outweigh benefits.',
              },
              {
                title: 'Manual Process with Automation',
                description: 'Team members submit responses via email using a standardized template, parsed by a Python script into a database, with a basic dashboard (e.g., Streamlit).',
                cost: {
                  initial: '$300–$600 (one-time, 12–24 hours at $25/hour for script and dashboard setup).',
                  ongoing: '$0–$50/month (script maintenance).',
                  assumptions: 'Uses free tools (e.g., Python, Google Sheets).',
                },
                timeframe: '3–5 days (2–3 days for script development, 1–2 days for dashboard and training).',
                efficiency: 'Low; email submissions are error-prone, requiring manual oversight.',
                scalability: 'Poor; email-based input limits growth.',
                usability: 'Simple for users but unreliable; dashboard usability depends on script quality.',
                automation: 'Moderate; scripts handle parsing and reporting, but email errors hinder reliability.',
                pros: [
                  'Low cost using free tools.',
                  'Minimal user setup (email-based).',
                  'Flexible for small, ad-hoc needs.',
                ],
                cons: [
                  'Error-prone and inefficient.',
                  'Complex parsing logic increases maintenance.',
                  'Unprofessional compared to form-based solutions.',
                ],
                recommendation: 'Not recommended due to inefficiency and scalability limitations.',
              },
            ].map((option, index) => (
              <div key={index} className="option">
                <h3>{option.title}</h3>
                <p><strong>Description:</strong> {option.description}</p>
                <h4>Cost Analysis:</h4>
                <ul>
                  <li><strong>Initial:</strong> {option.cost.initial}</li>
                  <li><strong>Ongoing:</strong> {option.cost.ongoing}</li>
                  {option.cost.assumptions && <li><strong>Assumptions:</strong> {option.cost.assumptions}</li>}
                  {option.cost.additional && <li><strong>Additional:</strong> {option.cost.additional}</li>}
                </ul>
                <p><strong>Timeframe for Completion:</strong> {option.timeframe}</p>
                <p><strong>Efficiency:</strong> {option.efficiency}</p>
                <p><strong>Scalability:</strong> {option.scalability}</p>
                <p><strong>Usability:</strong> {option.usability}</p>
                <p><strong>Automation Potential:</strong> {option.automation}</p>
                <h4>Pros:</h4>
                <ul>
                  {option.pros.map((pro, i) => <li key={i}>{pro}</li>)}
                </ul>
                <h4>Cons:</h4>
                <ul>
                  {option.cons.map((con, i) => <li key={i}>{con}</li>)}
                </ul>
                <p><strong>Recommendation:</strong> {option.recommendation}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Cost and Timeframe Comparison */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('costComparison')} className="section-title">
          Cost and Timeframe Comparison {openSections.costComparison ? '▼' : '▶'}
        </h2>
        {openSections.costComparison && (
          <div>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Initial Cost</th>
                  <th>Ongoing Cost</th>
                  <th>Setup Time</th>
                  <th>Efficiency</th>
                  <th>Scalability</th>
                  <th>Usability</th>
                  <th>Automation</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    option: 'Google Forms',
                    initialCost: '$500–$1,000',
                    ongoingCost: '$0–$50/mo',
                    setupTime: '5–7 days',
                    efficiency: 'High',
                    scalability: 'High',
                    usability: 'High',
                    automation: 'High',
                  },
                  {
                    option: 'Custom App',
                    initialCost: '$5,000–$10,000',
                    ongoingCost: '$100–$500/mo',
                    setupTime: '10–14 days',
                    efficiency: 'High',
                    scalability: 'Excellent',
                    usability: 'High',
                    automation: 'Excellent',
                  },
                  {
                    option: 'Third-Party Tools',
                    initialCost: '$0–$500',
                    ongoingCost: '$25–$100/mo',
                    setupTime: '2–4 days',
                    efficiency: 'Moderate',
                    scalability: 'Moderate',
                    usability: 'High',
                    automation: 'Low',
                  },
                  {
                    option: 'Microsoft Forms',
                    initialCost: '$500–$1,000',
                    ongoingCost: '$6–$32/user/mo',
                    setupTime: '5–7 days',
                    efficiency: 'High',
                    scalability: 'High',
                    usability: 'Moderate',
                    automation: 'High',
                  },
                  {
                    option: 'Manual Process',
                    initialCost: '$300–$600',
                    ongoingCost: '$0–$50/mo',
                    setupTime: '3–5 days',
                    efficiency: 'Low',
                    scalability: 'Poor',
                    usability: 'Low',
                    automation: 'Moderate',
                  },
                ].map((row, index) => (
                  <tr key={index}>
                    <td>{row.option}</td>
                    <td>{row.initialCost}</td>
                    <td>{row.ongoingCost}</td>
                    <td>{row.setupTime}</td>
                    <td>{row.efficiency}</td>
                    <td>{row.scalability}</td>
                    <td>{row.usability}</td>
                    <td>{row.automation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p><strong>Notes:</strong></p>
            <ul>
              <li>Costs assume standard contractor rates ($25/hour for setup, $60/hour for custom development).</li>
              <li>Google Forms and Manual Process leverage free tools; Microsoft Forms assumes potential new licenses.</li>
              <li>Efficiency and automation reflect post-setup performance.</li>
            </ul>
          </div>
        )}
      </section>

      {/* Final Recommendations */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('recommendations')} className="section-title">
          Final Recommendations {openSections.recommendations ? '▼' : '▶'}
        </h2>
        {openSections.recommendations && (
          <div>
            <p>
              The Google Forms-based solution is recommended as the immediate solution for USO’s bi-weekly reporting needs due to its compelling advantages:
            </p>
            <ul>
              <li><strong>Cost-Effectiveness:</strong> Initial cost of $500–$1,000 and minimal ongoing expenses ($0–$50/month) align with budget constraints.</li>
              <li><strong>Rapid Deployment:</strong> Operational within 5–7 days, ensuring quick implementation.</li>
              <li><strong>Efficiency and Automation:</strong> Automates data collection, deduplication, and report generation, significantly reducing manual effort.</li>
              <li><strong>Scalability and Usability:</strong> Supports team growth and additional questions, with intuitive interfaces requiring minimal training.</li>
              <li><strong>Security:</strong> Leverages Google Workspace’s encryption and access controls, ensuring compliance with GDPR/CCPA.</li>
            </ul>
            <h3>Implementation Plan:</h3>
            <ul>
              <li>Confirm Requirements: Finalize deduplication logic by May 20, 2025.</li>
              <li>Setup Authentication: Provide team member list for Google Workspace access by May 21, 2025.</li>
              <li>Develop Solution: Configure Google Forms, Sheets, Data Studio, and Apps Script by May 25, 2025.</li>
              <li>Test and Train: Conduct testing and a 30-minute team training session by May 27, 2025.</li>
              <li>Launch: Deploy for the next bi-weekly cycle starting June 1, 2025.</li>
            </ul>
            <h3>Rationale for Alternatives:</h3>
            <ul>
              <li><strong>Custom Application:</strong> Too costly and time-intensive for immediate needs but ideal for future scalability.</li>
              <li><strong>Third-Party Tools:</strong> Recurring costs and limited automation make them less suitable.</li>
              <li><strong>Microsoft Forms:</strong> Viable only if USO uses Microsoft 365; otherwise, costs and complexity are unjustified.</li>
              <li><strong>Manual Process:</strong> Inefficient and error-prone, unsuitable for reliable reporting.</li>
            </ul>
          </div>
        )}
      </section>

      {/* Future Development */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('futureDevelopment')} className="section-title">
          Future Development: App-Based Collection {openSections.futureDevelopment ? '▼' : '▶'}
        </h2>
        {openSections.futureDevelopment && (
          <div>
            <p>
              To ensure long-term efficiency and support USO’s growth, I propose a phased transition to an app-based collection system (e.g., a custom application using React and Firebase) within 6–12 months.
            </p>
            <h3>Rationale:</h3>
            <ul>
              <li><strong>Scalability:</strong> Supports unlimited users, complex data, and advanced features.</li>
              <li><strong>Efficiency:</strong> Eliminates manual steps with fully automated workflows.</li>
              <li><strong>User Experience:</strong> Branded, mobile-friendly interface enhances engagement.</li>
              <li><strong>Growth:</strong> Supports USO’s expansion and additional metrics.</li>
            </ul>
            <h3>Development Plan:</h3>
            <ul>
              <li><strong>Phase 1 (0–6 Months, 2025):</strong> Deploy Google Forms, collect feedback, monitor growth.</li>
              <li><strong>Phase 2 (6–9 Months, Q4 2025):</strong> Conduct feasibility study, define requirements, prototype app.</li>
              <li><strong>Phase 3 (9–12 Months, Q1 2026):</strong> Develop, test, and deploy app; migrate data; train team.</li>
            </ul>
            <h3>Benefits:</h3>
            <ul>
              <li>Long-Term Savings: Reduces maintenance costs.</li>
              <li>Enhanced Insights: Real-time dashboards and analytics.</li>
              <li>Competitive Edge: Modern system for operational excellence.</li>
            </ul>
            <h3>Interim Measures:</h3>
            <ul>
              <li>Enhance Google Forms with advanced Apps Script features.</li>
              <li>Explore low-code platforms (e.g., Bubble, Retool) if app development is delayed.</li>
            </ul>
          </div>
        )}
      </section>

      {/* Conclusion */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('conclusion')} className="section-title">
          Conclusion {openSections.conclusion ? '▼' : '▶'}
        </h2>
        {openSections.conclusion && (
          <p>
            The Google Forms solution offers the best balance of cost, speed, and functionality for USO’s immediate bi-weekly reporting needs, with a setup cost of $500–$1,000, deployment within 5–7 days, and robust automation to streamline processes. Alternative approaches, while viable in specific contexts, either incur higher costs, longer setup times, or insufficient automation. By implementing Google Forms now and planning for a custom app-based system within 6–12 months, USO can achieve short-term efficiency and position itself for long-term growth. I recommend approving the implementation plan and initiating the next steps by May 20, 2025, to ensure timely deployment.
          </p>
        )}
      </section>

      <div className="report-divider">
     
        <header className="report-header">
          <h1>How-to-Implement</h1>
          <p><strong>Technical & Non-Technical Users</strong></p>
        </header>
      </div>

      {/* How-to-Implement: Technical Users */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('technicalHowTo')} className="section-title">
          How-to-Implement: Technical Users {openSections.technicalHowTo ? '▼' : '▶'}
        </h2>
        {openSections.technicalHowTo && (
          <div>
            <p>This section provides detailed steps for technical users to implement the recommended Google Forms solution, including form creation, data storage, automation with Google Apps Script, and dashboard setup in Google Data Studio.</p>
            <h3>1. Create Google Form</h3>
            <ul>
              <li>Access <a href="https://forms.google.com">forms.google.com</a> with your USO Google Workspace account.</li>
              <li>Create a new form (click + Blank).</li>
              <li>Configure settings: Enable “Collect email addresses” and “Require sign-in” under Settings {'>'} Responses and General.</li>
              <li>Set title: “USO Bi-Weekly Team Report” and description: “Submit by every other Friday. Contact Carol Wargo.”</li>
              <li>Add 10 questions with appropriate types (e.g., Short answer for Date, Paragraph for New Leads, Linear scale for Morale Score). Ensure all are required.</li>
              <li>Link to a Google Sheet named “USO Bi-Weekly Report Responses” (Responses tab {'>'} Sheets icon).</li>
              <li>Share the form link with the team via email or USO intranet.</li>
            </ul>
            <p><strong>Time:</strong> 1–2 hours</p>
            <h3>2. Configure Google Sheet</h3>
            <ul>
              <li>Open the linked sheet and freeze the header row (View {'>'} Freeze {'>'} 1 row).</li>
              <li>Add a “User ID” column (B) with formula: <code>=LEFT(A2,FIND("@",A2)-1)</code> to extract usernames from emails.</li>
              <li>Optionally, create a “Structured Data” tab with columns: Response ID, User ID, Date, Question ID, Question Text, Answer.</li>
              <li>Secure the sheet: Share only with authorized USO members (Editor for admins, Viewer for others).</li>
            </ul>
            <p><strong>Time:</strong> 1–2 hours</p>
            <h3>3. Automate with Google Apps Script</h3>
            <ul>
              <li>In the sheet, go to Extensions{'>'}Apps Script and name the project “USO Report Automation”.</li>
              <li>Paste the following script to deduplicate answers and generate reports:</li>
            </ul>
            <pre className="code-block">
              {`function generateBiWeeklyReport() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Form Responses 1");
  const data = sheet.getDataRange().getValues();
  const reportDate = new Date();
  const report = {};
  const questions = data[0].slice(2);

  questions.forEach((question) => {
    report[question] = new Set();
  });

  for (let i = 1; i < data.length; i++) {
    const row = data[i];
    const responseDate = new Date(row[2]);
    if (responseDate >= new Date(reportDate.getTime() - 14 * 24 * 60 * 60 * 1000)) {
      for (let j = 0; j < questions.length; j++) {
        let answer = row[j + 2] ? row[j + 2].toString() : "";
        if (["New Leads Generated", "Client Meetings", "Upcoming Meetings - Next Week"].includes(questions[j])) {
          answer.split(",").forEach(item => item.trim() && report[questions[j]].add(item.trim()));
        } else if (["New Opportunities", "Closed Opportunities", "New Activations Confirmed"].includes(questions[j])) {
          answer.split(",").forEach(item => item.trim() && report[questions[j]].add(item.trim()));
        } else {
          answer && report[question].add(answer);
        }
      }
    }
  }

  const doc = DocumentApp.create(\`USO Bi-Weekly Report - \${reportDate.toDateString()}\`);
  const body = doc.getBody();
  body.appendParagraph("USO Bi-Weekly Team Report").setHeading(DocumentApp.ParagraphHeading.HEADING1);
  body.appendParagraph(\`Generated on: \${reportDate.toDateString()}\`);

  for (const [question, answers] of Object.entries(report)) {
    body.appendParagraph(question).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    body.appendParagraph([...answers].join(", ") || "No responses");
  }

  const pdf = doc.getAs("application/pdf");
  GmailApp.sendEmail("carol.wargo@uso.org", "USO Bi-Weekly Report", "See attached report.", {
    attachments: [pdf]
  });
}`}
            </pre>
            <ul>
              <li>Update the email address and sheet name as needed.</li>
              <li>Set a trigger (Triggers{'>'}Add Trigger) to run bi-weekly (e.g., every other Monday at 9 AM).</li>
              <li>Test by submitting form responses and running the script manually.</li>
            </ul>
            <p><strong>Time:</strong> 2–3 hours</p>
            <h3>4. Create Data Studio Dashboard</h3>
            <ul>
              <li>Go to <a href="https://datastudio.google.com">datastudio.google.com</a> and create a new report.</li>
              <li>Connect to the “USO Bi-Weekly Report Responses” sheet.</li>
              <li>Add a title, date range control, table (showing Timestamp, Email, etc.), and charts (e.g., Line chart for Morale Score).</li>
              <li>Customize with USO branding (navy blue, logo).</li>
              <li>Share with authorized team members (Share{'>'}Add people).</li>
            </ul>
            <p><strong>Time:</strong> 2–3 hours</p>
            <h3>5. Test and Train</h3>
            <ul>
              <li>Test the workflow: Submit responses, check sheet, script, and dashboard.</li>
              <li>Train team in a 30-minute session on form submission and deadlines.</li>
            </ul>
            <p><strong>Time:</strong> 2 hours</p>
            <p><strong>Total Time:</strong> 8–12 hours (5–7 days)</p>
          </div>
        )}
      </section>

      {/* How-to-Implement: Non-Technical Users */}
      <section className="report-section">
        <h2 onClick={() => toggleSection('nonTechnicalHowTo')} className="section-title">
          How-to-Implement: Non-Technical Users {openSections.nonTechnicalHowTo ? '▼' : '▶'}
        </h2>
        {openSections.nonTechnicalHowTo && (
          <div>
            <p>This section provides simple steps for non-technical users to set up the Google Forms solution, with guidance on delegating technical tasks like scripting.</p>
            <h3>1. Create Google Form</h3>
            <ul>
              <li>Go to <a href="https://forms.google.com">forms.google.com</a> and sign in with your USO account.</li>
              <li>Start a new form (click + Blank).</li>
              <li>In Settings, check “Collect email addresses” and “Require sign-in” to limit to USO team.</li>
              <li>Name it “USO Bi-Weekly Team Report” and add a description: “Submit by Friday every two weeks.”</li>
              <li>Add 10 questions (e.g., Short answer for Date, Paragraph for New Leads, Linear scale for Morale Score). Mark all as required.</li>
              <li>Save answers to a spreadsheet named “USO Bi-Weekly Report Responses” (Responses{'>'}Sheets icon).</li>
              <li>Email the form link to your team with submission instructions.</li>
            </ul>
            <p><strong>Time:</strong> 1–2 hours</p>
            <h3>2. Set Up Google Sheet</h3>
            <ul>
              <li>Open the spreadsheet in Google Drive.</li>
              <li>Fix the top row (View {'>'} Freeze {'>'} 1 row).</li>
              <li>Add a “User ID” column (B) with formula: <code>=LEFT(A2,FIND("@",A2)-1)</code> and drag down.</li>
              <li>Ensure dates look right (Format {'>'} Number {'>'} Date).</li>
              <li>Share only with yourself and USO admins (Share {'>'} Viewer for others).</li>
            </ul>
            <p><strong>Time:</strong> 1–2 hours</p>
            <h3>3. Automate Reports</h3>
            <ul>
              <li>Ask a tech helper to set this up (budget $50–$75, 2–3 hours).</li>
              <li>They&apos;ll go to Extensions &gt; Apps Script in the sheet and add code to combine answers and email a report.</li>
              <li>Test by filling out the form and checking your email for a PDF report.</li>
            </ul>
            <p><strong>Time:</strong> 2–3 hours (delegated)</p>
            <h3>4. Make a Simple Dashboard</h3>
            <ul>
              <li>Go to <a href="https://datastudio.google.com">datastudio.google.com</a> and start a new report.</li>
              <li>Link to your spreadsheet.</li>
              <li>Add a title, date filter, table of answers, and a graph (e.g., Morale Score over time).</li>
              <li>Use USO colors (e.g., navy blue) and logo.</li>
              <li>Share the dashboard link with team members who need it.</li>
            </ul>
            <p><strong>Time:</strong> 1–2 hours</p>
            <h3>5. Test and Teach Team</h3>
            <ul>
              <li>Test the form, sheet, report, and dashboard with 1–2 team members.</li>
              <li>Hold a 30-minute meeting to show how to fill out the form (submit by Friday every two weeks).</li>
              <li>Email the form link and instructions: “Use commas for lists, e.g., ‘Acme Corp, Beta Inc’.”</li>
            </ul>
            <p><strong>Time:</strong> 1–2 hours</p>
            <p><strong>Total Time:</strong> 7–11 hours (5–7 days)</p>
          </div>
        )}
      </section>

      <footer className="report-footer">
        <p><strong>Powered by:</strong> Carol Wargo</p>
        <a href="tel:+14437711726">443-771-1726</a>
      </footer>
    </div>
  );
};

export default AnalysisReport;


/**      <footer className="report-footer">
        <p><strong>Powered by: </strong> Carol Wargo  <span><i className=' text-muted small'>iTech Title</i></span> <span></span></p>
      
        <a href=' telto='>443-771-1726</a>
      </footer> */

      /**      <header className="report-header">
        <h1>Bi-Weekly Team Report Process: Solution Options and Recommendations</h1>
        <p><strong>Prepared by:</strong> Carol Wargo</p>
        <p><strong>Date:</strong> May 18, 2025</p>
        <p><strong>To:</strong> USO</p>
      </header> */