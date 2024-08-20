import { JobListingCard } from "/src/Components/Job_Listing_Card/job__listing__card.js";
import fetchJobsData  from "/src/Core/fetch__data.js";

export function removeExistingJobCards() {
  const jobsList = document.querySelector("[data-jobs-list]");  
  Array.from(jobsList.children).forEach(jobCard => jobCard.remove());
}

export default async function getJobsData(jobsDataArray) {
  renderJobListings(jobsDataArray);

  return jobsDataArray;
}

export function renderJobListings(jobsDataArray) {
  const jobsList = document.querySelector("[data-jobs-list]");

  removeExistingJobCards();  
  jobsDataArray.forEach((job) => {
    const jobCard = new JobListingCard('div','job__listing__card',job).getComponent();
    jobsList.appendChild(jobCard);
  });
}

document.addEventListener("DOMContentLoaded",getJobsData(await fetchJobsData()));