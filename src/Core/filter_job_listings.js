import getJobsData from '/src/Core/render__jobs__listings.js';
import  fetchJobsData from "/src/Core/fetch__data.js";
import renderJobListings from "/src/Core/render__jobs__listings.js"

export default async function filterJobsCards(eventObject) {
  const { target } = eventObject;
  const selectedTab = target.textContent;

  const jobsData = await getJobsData(await fetchJobsData());

  const filteredJobs = jobsData.filter((jobData) => {
    const {role,level,languages,tools} = jobData;
    const totalTabs = [role,level,languages,tools].flat().map((tab) => tab.toLowerCase());

    return totalTabs.includes(selectedTab.toLowerCase());
  });

  renderJobListings(filteredJobs);
}