export let notice = `
    <style>
        .display {
            height: 100%;
        }
    </style>
    <aside class="right-sidebar">
      <div class="announcements">
        <h3>Announcements</h3>
        <p>Evaluation of adult patients with any undiagnosed sign, symptom, or health concern.</p>
        <p>To do this effectively, one must recognize the classic and atypical presentations.</p>
        <p>Patient Participation Group (PPG) - Your Opinion Counts. The Practice has had a Patient Participation Group for over four years.</p>
      </div>
      <div class="medications">
        <h3>Active Medications</h3>
        <ul>
          <li>Amoxicillin - 1.0 mg QDPC for 5 days</li>
          <li>Warfarin - 2 tablet(s) once a month at bedtime for 4 months, oral route</li>
          <li>Metformin - 1 tablet daily, oral route</li>
        </ul>
      </div>
    </aside>
`;

export let timeline = `
    <div class="search-bar">
      <input type="text" placeholder="Search by Provider Name / Section / Subject" />
    </div>
    <h3>Timeline</h3>
    <div class="event">
        <div class="event-date">July 28, 2024</div>
        <div class="event-details">
            <p><strong>Appointment:</strong> Scheduled with Dr. Steven Antonio at 12:00 PM</p>
            <p><strong>Condition:</strong> Type 1 diabetes mellitus with ketoacidosis with coma condition received</p>
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
    </style>
    <h3>Medications</h3>
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
        </tbody>
    </table>
`;

export let clinicalSummary = `
    <style>
        .display { height: 100%; }
        h1, h2 { color: #0056b3; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 20px; margin-bottom: 10px; border-bottom: 2px solid #ddd; padding-bottom: 5px; }
    </style>
    <h3>Clinical Summary</h3>
    <div class="section">
        <div class="section-title">Patient Information</div>
        <div class="patient-info">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Age:</strong> 45</p>
        </div>
    </div>
`;

export let documents = `
    <style>
        h1 { color: #0056b3; text-align: center; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        table, th, td { border: 1px solid #ddd; }
        th, td { padding: 10px; text-align: left; }
    </style>
    <h3>Patient Documents</h3>
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
                <td><a href="documents/blood-test-results.pdf" target="_blank">View</a> | <a href="documents/blood-test-results.pdf" download>Download</a></td>
            </tr>
        </tbody>
    </table>
`;
