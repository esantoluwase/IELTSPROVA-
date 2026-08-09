// auto-grader.js - Integrate with your test pages
// Add this to reading-test.html, listening-test.html, etc.

// Wait for page to load
document.addEventListener('DOMContentLoaded', async function() {
    // Check if user is logged in
    firebase.auth().onAuthStateChanged(async function(user) {
        if (user) {
            // Initialize AI Employee
            const employee = new AIEmployee(user.uid);
            await employee.loadMemory(user.uid);
            
            // Store globally for use in tests
            window.aiEmployee = employee;
            console.log('🤖 AI Employee ready!');
        }
    });
});

// Function to use in your test pages
async function submitTestForGrading(testType, userAnswers, questions) {
    if (!window.aiEmployee) {
        alert('Please wait for AI Employee to load...');
        return;
    }

    try {
        // Show loading state
        showLoader('Grading your test...');
        
        // Grade the test
        const result = await window.aiEmployee.gradeTest(testType, userAnswers, questions);
        
        // Hide loader
        hideLoader();
        
        // Display results
        displayResults(result);
        
        return result;
    } catch (error) {
        console.error('Grading failed:', error);
        hideLoader();
        alert('Failed to grade test. Please try again.');
    }
}

function displayResults(result) {
    // Show score
    const scoreDiv = document.getElementById('test-results');
    scoreDiv.style.display = 'block';
    
    let html = `
        <div class="results-container">
            <h2>📊 Test Results</h2>
            <div class="score-card">
                <h3>Score: ${result.score}/${result.total}</h3>
                <p>Band Score: ${result.bandScore || 'Calculating...'}</p>
                <p>Percentage: ${result.percentage || ''}%</p>
            </div>
            <div class="feedback-section">
                <h3>📝 Feedback</h3>
                <ul>
    `;
    
    if (result.weaknesses && result.weaknesses.length > 0) {
        result.weaknesses.forEach(w => {
            html += `<li>⚠️ ${w}</li>`;
        });
    }
    
    if (result.feedback) {
        result.feedback.forEach(f => {
            html += `<li>${f}</li>`;
        });
    }
    
    html += `
                </ul>
            </div>
            ${result.needsApproval ? `
                <div class="admin-alert">
                    🔄 This test needs admin review. You'll receive feedback shortly.
                </div>
            ` : `
                <button onclick="reviewMistakes()">Review Mistakes</button>
            `}
        </div>
    `;
    
    scoreDiv.innerHTML = html;
}

function showLoader(message) {
    // Your existing loader function
    document.getElementById('loader').style.display = 'block';
    document.getElementById('loader-text').textContent = message;
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
      }
