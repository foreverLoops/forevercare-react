/*
TODO
event listeners in navbar and sidebar
use DOM manipulation to render content in and out
*/

export let notice = `
        <style>
                .display{
                    height: 100%
                }
        </style>
        <aside class="right-sidebar">
          <div class="announcements">
            <h3>Announcements</h3>
            <p>
              Evaluation of adult patients with any undiagnosed sign, symptom,
              or health concern.
            </p>
            <p>
              To do this effectively, one must recognize the classic and
              atypical presentations.
            </p>
            <p>
              Patient Participation Group (PPG) - Your Opinion Counts. The
              Practice has had a Patient Participation Group for over four
              years.
            </p>
            <p>
              Evaluation of adult patients with any undiagnosed sign, symptom,
              or health concern.
            </p>
            <p>
              To do this effectively, one must recognize the classic and
              atypical presentations.
            </p>
            <p>
              Patient Participation Group (PPG) - Your Opinion Counts. The
              Practice has had a Patient Participation Group for over four
              years.
            </p>
          </div>
          <div class="medications">
            <h3>Active Medications</h3>
            <ul>
              <li>Amoxicillin - 1.0 mg QDPC for 5 days</li>
              <li>
                Warfarin - 2 tablet(s) once a month at bedtime for 4 months,
                oral route
              </li>
              <li>Warfarin - 5 tablet(s) for 5 days, oral route</li>
              <li>Metformin - 1 tablet daily, oral route</li>
              <li>Amoxicillin - 1.0 mg QDPC for 5 days</li>
              <li>
                Warfarin - 2 tablet(s) once a month at bedtime for 4 months,
                oral route
              </li>
              <li>Warfarin - 5 tablet(s) for 5 days, oral route</li>
              <li>Metformin - 1 tablet daily, oral route</li>
            </ul>
          </div>
        </aside>
`


export let timeline = `
        <div class="search-bar">
        <input
            type="text"
            placeholder="Search by Provider Name / Section / Subject"
        />
        </div>
        <h3>Timeline</h3>
        <div class="event">
            <div class="event-date">July 28, 2024</div>
            <div class="event-details">
                <p>
                <strong>Appointment:</strong> Scheduled with Dr. Steven Antonio
                at 12:00 PM
                </p>
                <p>
                <strong>Appointment:</strong> Scheduled with Dr. Aniston David
                at 09:00 AM
                </p>
                <p><strong>Condition:</strong> Headache condition received</p>
                <p>
                <strong>Condition:</strong> Type 1 diabetes mellitus with
                ketoacidosis with coma condition received
                </p>
                <p>
                <strong>Appointment:</strong> Scheduled with Dr. Steven Antonio
                at 12:00 PM
                </p>
                <p>
                <strong>Appointment:</strong> Scheduled with Dr. Aniston David
                at 09:00 AM
                </p>
                <p><strong>Condition:</strong> Headache condition received</p>
                <p>
                <strong>Condition:</strong> Type 1 diabetes mellitus with
                ketoacidosis with coma condition received
                </p>
            </div>
        </div>
    `;

export let medications = `
    <style>
        h1 {
            color: #0056b3;
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f0f0f0;
            color: #0056b3;
        }
        tr:nth-child(even) {
            background-color: #f8f8f8;
        }
    </style>
    <div class="search-bar">
        <input
            type="text"
            placeholder="Search by Provider Name / Section / Subject"
        />
    </div>
    <h3>Medications</h3>
    <div class="event">
        <table>
            <thead>
                <tr>
                    <th>Medication Name</th>
                    <th>Dosage</th>
                    <th>Frequency</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Metformin</td>
                    <td>500mg</td>
                    <td>Twice daily</td>
                    <td>Take with meals</td>
                </tr>
                <tr>
                    <td>Lisinopril</td>
                    <td>10mg</td>
                    <td>Once daily</td>
                    <td>Monitor blood pressure</td>
                </tr>
                <tr>
                    <td>Amlodipine</td>
                    <td>5mg</td>
                    <td>Once daily</td>
                    <td>Take in the morning</td>
                </tr>
                <tr>
                    <td>Atorvastatin</td>
                    <td>20mg</td>
                    <td>Once daily</td>
                    <td>Take at bedtime</td>
                </tr>
            </tbody>
        </table>
    </div>
`;

export let clinicalSummary = `
    <style>
        .display{
            height: 100%
        }
        h1, h2 {
            color: #0056b3;
        }
        
        li { list-style: none;}

        .section {
            margin-bottom: 20px;
        }
        .section-title {
            font-size: 20px;
            margin-bottom: 10px;
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
        .patient-info, .medications, .allergies, .diagnosis, .treatment-plan {
            padding: 10px;
            background-color: #ffffff;
            border: 1.5px solid #e6e6e6;
            border-radius: 5px;
        }
        .info-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .info-row label {
            font-weight: bold;
        }
    </style>
    <div class="search-bar">
        <input
            type="text"
            placeholder="Search by Provider Name / Section / Subject"
        />
    </div>
    <h3>Medications</h3>
    <div class="event">
        <div class="section">
            <div class="section-title">Patient Information</div>
            <div class="patient-info">
                <div class="info-row">
                    <label>Patient Name:</label> <span>John Doe</span>
                </div>
                <div class="info-row">
                    <label>Age:</label> <span>45</span>
                </div>
                <div class="info-row">
                    <label>Gender:</label> <span>Male</span>
                </div>
                <div class="info-row">
                    <label>Date of Birth:</label> <span>1979-01-15</span>
                </div>
                <div class="info-row">
                    <label>Contact:</label> <span>(123) 456-7890</span>
                </div>
            </div>
        </div>

        <!-- Medical History Section -->
        <div class="section">
            <div class="section-title">Medical History</div>
            <div class="patient-info">
                <ul>
                    <li>Hypertension</li>
                    <li>Type 2 Diabetes</li>
                    <li>Previous Surgery: Appendectomy (2010)</li>
                </ul>
            </div>
        </div>

        <!-- Current Medications Section -->
        <div class="section">
            <div class="section-title">Current Medications</div>
            <div class="medications">
                <ul>
                    <li>Metformin 500mg - Twice daily</li>
                    <li>Lisinopril 10mg - Once daily</li>
                    <li>Amlodipine 5mg - Once daily</li>
                </ul>
            </div>
        </div>

        <!-- Allergies Section -->
        <div class="section">
            <div class="section-title">Allergies</div>
            <div class="allergies">
                <ul>
                    <li>Penicillin</li>
                    <li>Shellfish</li>
                </ul>
            </div>
        </div>

        <!-- Diagnosis Section -->
        <div class="section">
            <div class="section-title">Diagnosis</div>
            <div class="diagnosis">
                <p>Primary Diagnosis: Type 2 Diabetes Mellitus</p>
                <p>Secondary Diagnosis: Hypertension</p>
            </div>
        </div>

        <!-- Treatment Plan Section -->
        <div class="section">
            <div class="section-title">Treatment Plan</div>
            <div class="treatment-plan">
                <ul>
                    <li>Continue current medications</li>
                    <li>Monitor blood glucose levels daily</li>
                    <li>Follow a low-sodium diet</li>
                    <li>Exercise regularly (30 minutes of moderate exercise daily)</li>
                    <li>Follow-up appointment in 3 months</li>
                </ul>
            </div>
        </div>
    </div>
`;

export let documents = `
        <style>
            h1 {
                color: #0056b3;
                text-align: center;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            table, th, td {
                border: 1px solid #ddd;
            }
            th, td {
                padding: 10px;
                text-align: left;
            }
            th {
                background-color: #f0f0f0;
                color: #0056b3;
            }
            tr:nth-child(even) {
                background-color: #f8f8f8;
            }
            .action-link {
                color: #0056b3;
                text-decoration: none;
            }
            .action-link:hover {
                text-decoration: underline;
            }
        </style>
        <div class="search-bar">
            <input
                type="text"
                placeholder="Search by Provider Name / Section / Subject"
            />
        </div>
        <h3>Patient Documents</h3>
        <div class="event">
            <table>
                <thead>
                    <tr>
                        <th>Document Name</th>
                        <th>Type</th>
                        <th>Date Uploaded</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Blood Test Results</td>
                        <td>PDF</td>
                        <td>2023-09-01</td>
                        <td>
                            <a href="documents/blood-test-results.pdf" target="_blank" class="action-link">View</a> |
                            <a href="documents/blood-test-results.pdf" download class="action-link">Download</a>
                        </td>
                    </tr>
                    <tr>
                        <td>ECG Report</td>
                        <td>PDF</td>
                        <td>2023-08-15</td>
                        <td>
                            <a href="documents/ecg-report.pdf" target="_blank" class="action-link">View</a> |
                            <a href="documents/ecg-report.pdf" download class="action-link">Download</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Prescription</td>
                        <td>DOCX</td>
                        <td>2023-09-05</td>
                        <td>
                            <a href="documents/prescription.docx" target="_blank" class="action-link">View</a> |
                            <a href="documents/prescription.docx" download class="action-link">Download</a>
                        </td>
                    </tr>
                    <tr>
                        <td>CT Scan Images</td>
                        <td>ZIP</td>
                        <td>2023-08-25</td>
                        <td>
                            <a href="documents/ct-scan-images.zip" class="action-link">Download</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;