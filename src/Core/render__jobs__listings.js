import { JobListingCard } from "/src/Components/Job_Listing_Card/job__listing__card.js";
import  fetchJobsData from "/src/Core/fetch__data.js";

export function removeExistingJobCards() {
  const jobsList = document.querySelector("[data-jobs-list]");  
  Array.from(jobsList.children).forEach(jobCard => jobCard.remove());
}

async function getJobsArray() {
  const jobsDataArray = await fetchJobsData();
  renderJobListings(jobsDataArray);
}

async function renderJobListings(jobsDataArray) {
  const jobsList = document.querySelector("[data-jobs-list]");

  removeExistingJobCards();  
  jobsDataArray.forEach((job) => {
    const jobCard = new JobListingCard('div','job__listing__card',job).getComponent();
    jobsList.appendChild(jobCard);
  });
}

document.addEventListener("DOMContentLoaded",getJobsArray);