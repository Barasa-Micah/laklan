import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './CareerPage.css';

const CareerPage = () => {
  const allJobs = [
    {
      title: 'Line Manager – Crop Protection',
      location: 'Kenya',
      type: 'Full Time',
      posted: '7 months ago',
      category: 'Full Time',
    },
    {
      title: 'Technical Sales Representative (TSR) – South Rift',
      location: 'Narok',
      type: 'Full Time',
      posted: '7 months ago',
      category: 'Full Time',
    },
    // Additional jobs can be added here...
  ];

  const [selectedCategories, setSelectedCategories] = useState(['Full Time', 'Freelance', 'Internship', 'Part Time', 'Temporary']);

  const handleCategoryChange = (category) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((item) => item !== category)
        : [...selectedCategories, category]
    );
  };

  const filteredJobs = allJobs.filter((job) => selectedCategories.includes(job.category));

  return (
    <>
      <Header />
      <div className="career-page">
        <div className="career-search">
          <h1>Jobs</h1>
          <form className="search-form">
            <input type="text" placeholder="Keywords" className="search-input" />
            <input type="text" placeholder="Location" className="search-input" />
            <label className="remote-checkbox">
              <input type="checkbox" /> Remote positions only
            </label>
            <button type="submit" className="search-button">Search Jobs</button>
            <div className="job-filters">
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Freelance')}
                  onChange={() => handleCategoryChange('Freelance')}
                /> Freelance
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Full Time')}
                  onChange={() => handleCategoryChange('Full Time')}
                /> Full Time
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Internship')}
                  onChange={() => handleCategoryChange('Internship')}
                /> Internship
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Part Time')}
                  onChange={() => handleCategoryChange('Part Time')}
                /> Part Time
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes('Temporary')}
                  onChange={() => handleCategoryChange('Temporary')}
                /> Temporary
              </label>
            </div>
          </form>
        </div>

        <div className="job-listings">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div className="job-card" key={index}>
                <h3>{job.title}</h3>
                <p>{job.location}</p>
                <div className="job-meta">
                  <span>{job.type}</span>
                  <span>Posted {job.posted}</span>
                </div>
              </div>
            ))
          ) : (
            <p>No jobs found for the selected categories.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CareerPage;
