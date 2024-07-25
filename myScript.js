

const jobs = [
    {
        logo: 'image1.png',
        company: 'Photosnap',
        isNew: true,
        isFeatured: true,
        title: 'Senior Frontend Developer',
        details: {
            posted: '1d ago',
            type: 'Full Time',
            location: 'USA Only'
        },
        skills: ['Frontend', 'Senior', 'HTML', 'CSS', 'JavaScript']
    },
    {
        logo: 'image2.png',
        company: 'Manage',
        isNew: true,
        isFeatured: true,
        title: 'FullStack Developer',
        details: {
            posted: '1d ago',
            type: 'PartTime Time',
            location: 'Remote'
        },
        skills: ['FullStack', 'Midweight', 'Python', 'React']
    },
    {
        logo: 'image3.png',
        company: 'Account',
        isNew: true,
        isFeatured: false,
        title: 'Junior Frondend Developer',
        details: {
            posted: '2d ago',
            type: 'Part Time',
            location: 'USA Only'
        },
        skills: ['Frondend', 'Junior', 'JavaScript', 'React', 'Sass']
    },
    {
        logo: 'image1.png',
        company: 'MyHome',
        isNew: false,
        isFeatured: false,
        title: 'Junior Frondend Developer',
        details: {
            posted: '5d ago',
            type: 'Contract',
            location: 'USA Only'
        },
        skills: ['Frondend', 'Junior','CSS', 'JavaScript']
    },
    {
        logo: 'image1.png',
        company: 'Loop Studios',
        isNew: false,
        isFeatured: false,
        title: 'Software Engineer',
        details: {
            posted: '1w ago',
            type: 'Full Time',
            location: 'Worldwide'
        },
        skills: ['Fullstack', 'Midweight','JavaScript', 'Ruby', 'Sass']
    },
    {
        logo: 'image1.png',
        company: 'Facelt',
        isNew: false,
        isFeatured: false,
        title: 'Junior Backend Developer',
        details: {
            posted: '2w ago',
            type: 'Full Time',
            location: 'Uk Only'
        },
        skills: ['Backend', 'Junior','Ruby', 'RoR']
    },
    {
        logo: 'image1.png',
        company: 'Shortly',
        isNew: false,
        isFeatured: false,
        title: 'Junior Developer',
        details: {
            posted: '2w ago',
            type: 'Full Time',
            location: 'Worldwide'
        },
        skills: ['Frontend', 'Junior','HTML', 'JavaScript','Sass']
    },
    {
        logo: 'image1.png',
        company: 'Insure',
        isNew: false,
        isFeatured: false,
        title: 'Junior Fronend Developer',
        details: {
            posted: '2w ago',
            type: 'Full Time',
            location: 'USA Only'
        },
        skills: ['Frontend', 'Junior', 'JavaScript','Vue', 'Sass']
    },
    {
        logo: 'image1.png',
        company: 'Eyecam Co.',
        isNew: false,
        isFeatured: false,
        title: 'Full Stack Engineer',
        details: {
            posted: '3w ago',
            type: 'Full Time',
            location: 'Worldwide'
        },
        skills: ['Fullstack', 'Midweight', 'JavaScript','Python', 'Django']
    },
    {
        logo: 'image1.png',
        company: 'The Air Filter Company',
        isNew: false,
        isFeatured: false,
        title: 'Front-end Dev',
        details: {
            posted: '1mo ago',
            type: 'Part Time',
            location: 'Worldwide'
        },
        skills: ['Fronend', 'Junior', 'JavaScript','React', 'Sass']
    }
    

];



function creatNewJobElement(job) {
    const x = `
    <div class="one">
        <div class="job">
            <div class="logo">
                <img src="${job.logo}" alt="Company logo">
            </div>
            <div class="job_h">
                <div class="senior_info">
                    <span class="Photosnap">${job.company}</span>
                    ${job.isNew ? '<span class="new">New!</span>' : ''}
                    ${job.isFeatured ? '<span class="featured">FEATURED</span>' : ''}
                </div>
                <div class="Senior">
                    <h2>${job.title}</h2>
                    <div class="detalis_senior">
                        <span>${job.details.posted}</span> . 
                        <span>${job.details.type}</span> . 
                        <span>${job.details.location}</span>
                    </div>
                </div>
            </div>
            <div class="language">
                ${job.skills.map(skill => `<span>${skill}</span>`).join('')}
            </div>
        </div>
    </div>
    `;

    return x;
}

function submitJobListings(job1) {
    const jobListings = document.getElementById('job-listings');
    jobListings.innerHTML = job1.map(creatNewJobElement).join('');
}

function visibleNewJob() {
    const form = document.getElementById('jobForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';

}


function handleFormSubmit(event) {
    event.preventDefault();

    
    const logo = document.getElementById('logo').value;
    const company = document.getElementById('companyName').value;
    const isNew = document.getElementById('isNew').checked;
    const isFeatured = document.getElementById('isFeatured').checked;
    const title = document.getElementById('jobTitle').value;
    const posted = document.getElementById('jobPosted').value;
    const type = document.getElementById('jobType').value;
    const location = document.getElementById('jobLocation').value;
    const skills = document.getElementById('jobSkills').value.split(',').map(skill => skill.trim());
    
    const job = {
        logo,
        company,
        isNew,
        isFeatured,
        title,
        details: {
            posted,
            type,
            location
        },
        skills
    };

    jobs.push(job);
    submitJobListings(jobs);
    visibleNewJob();
}



function searchAndClear(){

const searchInput = document.getElementById('search');

$(document).ready(function() {
    $('#search').on('input', function() {
        var searchTerm = searchInput.value.toLowerCase();
        var foundJob = [];


        for (var i = 0; i < jobs.length; i++) {
            var job = jobs[i];
            if (job.company.toLowerCase().includes(searchTerm)) {
                foundJob.push(job);
            }
        }

        submitJobListings(foundJob);
    });

    $('#clearButton').click(function() {
        searchInput.value = '';
        submitJobListings(jobs);
    });

});
}


searchAndClear();
submitJobListings(jobs);
