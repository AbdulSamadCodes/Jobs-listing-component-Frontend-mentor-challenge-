/* async function to fetch data using api call */
async function fetchJobsData() {
  try {
    const responseBody = await fetch('/JSON/data.json');
    const jobsData = await responseBody.json();
    
    return jobsData;
  } catch {
      alert("Could'nt fetch data");
  }
}

